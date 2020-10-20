import React, {useContext, useState} from 'react';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';
import FilterRow from '../../organisms/filterRow/filterRow'
import Header from '../../organisms/header/header'
import TableHeader from '../../organisms/tableHeadings/tableHeadings'
import TableData from '../../organisms/tableData/tableData'
import ListHeading from '../../atoms/listHeading/listHeading'
import {GlobalContext} from '../../context/GlobalState';
import firebase from "../../config/firebase";
import config from '../../config/config.json'
import arraySort from 'array-sort';
import FavouriteDataTable from '../../organisms/tableFavouriteData/tableFavouriteData'
import FavouriteTableHeadings from '../../organisms/tableFavouriteHeading/tableHeadings'

export default () => {
    const {user, setUser, setId, setLoggedIn, setLoader, favouriteIds, favouriteAsteroids, setFavouriteIds, setFavouriteAsteroids}:any = useContext(GlobalContext);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [asteriods, setAsteriods] = useState<any>(null);
    const [asteroidId, setAsteroidId] = useState("");
    const [diameterUnit, setDiameterUnit] = useState("km");
    const [velocityUnit, setVelocityUnit] = useState("kmSec");
    const lastTextHandler = () => {
        firebase.auth().signOut();
        setUser(null);
        setId(null);
        setLoggedIn(false);
    };
    const diameterHandler = (estimatedDiameter) => {
        switch (diameterUnit) {
            case "km":
                return estimatedDiameter.kilometers.estimated_diameter_min + " - " + estimatedDiameter.kilometers.estimated_diameter_min;
            case "meters":
                return estimatedDiameter.meters.estimated_diameter_min + " - " + estimatedDiameter.meters.estimated_diameter_min;
            case "miles":
                return estimatedDiameter.miles.estimated_diameter_min + " - " + estimatedDiameter.miles.estimated_diameter_min;
            case "feet":
                return estimatedDiameter.feet.estimated_diameter_min + " - " + estimatedDiameter.feet.estimated_diameter_min;
            default:
                return estimatedDiameter.kilometers.estimated_diameter_min + " - " + estimatedDiameter.kilometers.estimated_diameter_min;
        }
    };

    const velocityHandler = (relativeVelocity) => {
        switch (velocityUnit) {
            case "kmSec":
                return relativeVelocity.kilometers_per_second;
            case "kmH":
                return relativeVelocity.kilometers_per_hour;
            case "mH":
                return relativeVelocity.miles_per_hour;
            default:
                return relativeVelocity.kilometers_per_second;
        }
    };
    const onStartDateChange = (date: Date) => {
        let standardEndDate: any = endDate ? new Date(endDate) : null;
        let requiredDateStructure: any = new Date(date);
        if (!date) {
            setStartDate(date);
        }
        else if (standardEndDate && standardEndDate < date) {
            NotificationManager.error('Please ensure that the Start Date is less than or equal to the End Date.', 'Alert', 5000);
            setStartDate(null);
        } else if (Math.floor(((standardEndDate - requiredDateStructure) / 86400000)) > 7) {
            NotificationManager.error('Please ensure that the Dates should between 7 days.', 'Alert', 5000);
            setStartDate(null);
        }
        else {
            setStartDate(requiredDateStructure);
            searchAsteroidByDate(requiredDateStructure, standardEndDate);
        }
    };

    const onEndDateChange = (date: Date) => {
        let standardStartDate: any = startDate ? new Date(startDate) : null;
        let requiredDateStructure: any = new Date(date);
        if (!date) {
            setEndDate(date)
        }
        else if (standardStartDate && date < standardStartDate) {
            NotificationManager.error('Please ensure that the End Date is greater than or equal to the Start Date.', 'Alert', 5000);
            setEndDate(null);
        }
        else if (Math.floor(((requiredDateStructure - standardStartDate) / 86400000)) > 7) {
            NotificationManager.error('Please ensure that the Dates should between 7 days.', 'Alert', 5000);
            setEndDate(null);
        } else {
            setEndDate(requiredDateStructure);
            searchAsteroidByDate(standardStartDate, requiredDateStructure);
        }
    };

    const searchAsteroidByDate = (searchStartDate: Date | null, searchEndDate: Date | null) => {
        if (searchStartDate && searchEndDate) {
            setLoader(true);
            setAsteroidId("");
            axios.get(config.API_URL + `feed?start_date=${searchStartDate.getFullYear() + '-' + ("0" + (searchStartDate.getMonth() + 1)).slice(-2) + '-' + ("0" + searchStartDate.getDate()).slice(-2)}&end_date=${searchEndDate.getFullYear() + '-' + ("0" + (searchEndDate.getMonth() + 1)).slice(-2) + '-' + ("0" + searchEndDate.getDate()).slice(-2)}&api_key=${config.API_KEY}`).then(res => {
                let dates = Object.keys(res.data.near_earth_objects);
                let allAsteriods: any = [];
                dates.forEach((date) => {
                    res.data.near_earth_objects[date].forEach(each => {
                        allAsteriods.push({
                            closeApproachData: each.close_approach_data[0].epoch_date_close_approach,
                            ...each
                        });
                    })
                });
                let sortedAsteroids = arraySort(allAsteriods, 'closeApproachData');
                if (sortedAsteroids.length > 10) {
                    setAsteriods(sortedAsteroids.slice(0, 10));
                } else {
                    setAsteriods(sortedAsteroids);
                }
                setLoader(false);
            }).catch(err => {
                setLoader(false);
            })
        }
    };

    const timeHandler = (date: any) => {
        date = new Date(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? ("0" + hours).slice(-2) : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        return hours + ":" + minutes + " " + ampm;
    };

    const favouriteHandler = (id, name) => {
        if (!!favouriteIds.find(sin => sin === id)) {
            setFavouriteAsteroids([...favouriteAsteroids.filter(sin => sin.id !== id)]);
            setFavouriteIds([...favouriteIds.filter(sin => sin !== id)]);
            firebase.firestore().collection('usersFavourites')
                .doc(id)
                .delete()
        } else {
            let favouriteAsteroid = {
                id,
                name,
                userId: user.uid
            };
            firebase.firestore().collection('usersFavourites')
                .doc(id)
                .set(favouriteAsteroid).then(() => {
            })
                .catch(() => {
                })
        }
    };

    const searchById = (event: any) => {
        event.preventDefault();
        setStartDate(null);
        setEndDate(null);
        setLoader(true);
        axios.get(config.API_URL + `neo/${asteroidId}?api_key=${config.API_KEY}`).then(res => {
            let allAsteriods: any = [];
            res.data.close_approach_data.forEach((record) => {
                let close_approach_data: any = [record];
                allAsteriods.push({
                    id: res.data.id,
                    name: res.data.name,
                    absolute_magnitude_h: res.data.absolute_magnitude_h,
                    estimated_diameter: res.data.estimated_diameter,
                    close_approach_data
                });
            });
            let sortedAsteroids = arraySort(allAsteriods, 'closeApproachData');
            setAsteriods(sortedAsteroids);
            setLoader(false);
        }).catch(err => {
            console.log("err", err);
            setLoader(false);
            NotificationManager.error('No Asteroid Found with this Id please Confirm the Id.', 'Alert', 5000);
        })
    };

    return (
        <div>
            <div>
                <Header logo={"LOGO"} firstText={`Hello! ${user && user.fullName ? user.fullName : ""}`}
                        betweenText={"|"} lastText={"Logout"}
                        lastTextHandler={lastTextHandler}/>
            </div>
            <div className="px-8 ">
                {/* Nearest Asteroids */}
                <div className="py-4">
                    <div>
                        <FilterRow placeholder={"1234"} type={"number"}
                                   mainHeading={asteriods ? "10 Nearest Asteroids as per their closest approach" : "Search Nearest Asteroids"}
                                   startDateHandler={onStartDateChange} endDateHandler={onEndDateChange}
                                   startDate={startDate} endDate={endDate} asteroidId={asteroidId}
                                   setAsteroidId={setAsteroidId} searchById={searchById}
                        />
                    </div>
                    {asteriods && <div className="py-5 ">
                        <TableHeader ID Name Date Time Ab_Magnitutde Min_Max_Est_Diameter Relative_Velocity Hazard
                                     Add_Favourite setVelocityUnit={setVelocityUnit} setDiameterUnit={setDiameterUnit}
                        />
                        {asteriods.length !== 0 && asteriods.map(asteroid => <TableData ID={asteroid.id}
                                                                                        key={asteroid.id}
                                                                                        Name={asteroid.name}
                                                                                        Date={asteroid.close_approach_data[0].close_approach_date}
                                                                                        Time={asteroid.close_approach_data[0].close_approach_date_full ? timeHandler(asteroid.close_approach_data[0].close_approach_date_full) : "N/A"}
                                                                                        Ab_Magnitutde={asteroid.absolute_magnitude_h}
                                                                                        Min_Max_Est_Diamater={diameterHandler(asteroid.estimated_diameter)}
                                                                                        Hazard={asteroid.is_potentially_hazardous_asteroid + ""}
                                                                                        Relative_Velocity={velocityHandler(asteroid.close_approach_data[0].relative_velocity)}
                                                                                        favouriteHandler={favouriteHandler}
                                                                                        isFavourite={!!favouriteIds.find(sin => sin === asteroid.id)}
                        />)}
                    </div>}
                </div>
                {/* Favourite asternoids */}
                <div className="py-4">
                    <div className="flex justify-center">
                        <ListHeading
                            mainHeading={favouriteIds && favouriteIds.length !== 0 ? "Favourite Asteroids" : "No Favourite Asteroids Found Yet"}/>
                    </div>
                    {favouriteIds && favouriteIds.length !== 0 && <div className="py-5 ">
                        <FavouriteTableHeadings ID Name Remove_Favourite/>
                        {favouriteAsteroids.map(sin => <FavouriteDataTable key={sin.id} ID={sin.id} Name={sin.name}
                                                                  favouriteHandler={favouriteHandler}
                                                                  isFavourite={true}  
                        />)}
                    </div>}
                </div>
            </div>
        </div>
    );
}