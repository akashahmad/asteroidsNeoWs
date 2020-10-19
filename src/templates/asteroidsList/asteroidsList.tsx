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

export default () => {
    const {user, setUser, setId, setLoggedIn, setLoader}:any = useContext(GlobalContext);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [asteriods, setAsteriods] = useState<any>(null);
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
        let standardEndDate = endDate ? new Date(endDate) : null;
        if (!date) {
            setStartDate(date);
        }
        else if (standardEndDate && standardEndDate < date) {
            NotificationManager.error('Please ensure that the Start Date is less than or equal to the End Date.', 'Alert', 5000);
            setStartDate(null);
        } else {
            let requiredDateStructure = new Date(date);
            setStartDate(requiredDateStructure);
            searchAsteroidByDate(standardEndDate, requiredDateStructure);
        }
    };

    const onEndDateChange = (date: Date) => {
        let standardStartDate = startDate ? new Date(startDate) : null;
        if (!date) {
            setEndDate(date)
        }
        else if (standardStartDate && date < standardStartDate) {
            NotificationManager.error('Please ensure that the End Date is greater than or equal to the Start Date.', 'Alert', 5000);
            setEndDate(null);
        } else {
            let requiredDateStructure = new Date(date);
            setEndDate(requiredDateStructure);
            searchAsteroidByDate(standardStartDate, requiredDateStructure);
        }
    };

    const searchAsteroidByDate = (searchStartDate: Date | null, searchEndDate: Date | null) => {
        if (searchStartDate && searchEndDate) {
            setLoader(true);
            axios.get(config.API_URL + `feed?start_date=${searchStartDate.toISOString().substring(0, 10)}&end_date=${searchEndDate.toISOString().substring(0, 10)}&api_key=${config.API_KEY}`).then(res => {
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
                if (sortedAsteroids.length <= 10) {
                    setAsteriods(sortedAsteroids);
                } else {
                    setAsteriods(sortedAsteroids.slice(0, 9));
                }
                setLoader(false);
            }).catch(err => {
                console.log(err)
                setLoader(false);
            })
        }
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
                                   startDate={startDate} endDate={endDate}/>
                    </div>
                    {asteriods && <div className="py-5">
                        <TableHeader ID Name Date Time Ab_Magnitutde Min_Max_Est_Diameter Relative_Velocity Hazard
                                     Add_Favourite setVelocityUnit={setVelocityUnit} setDiameterUnit={setDiameterUnit}
                        />
                        {asteriods.length !== 0 && asteriods.map(asteroid => <TableData ID={asteroid.id}
                                                                                        Name={asteroid.name}
                                                                                        Date={asteroid.close_approach_data[0].close_approach_date}
                                                                                        Time={asteroid.close_approach_data[0].close_approach_date_full.slice(asteroid.close_approach_data[0].close_approach_date_full.length - 6)}
                                                                                        Ab_Magnitutde={asteroid.absolute_magnitude_h}
                                                                                        Min_Max_Est_Diamater={diameterHandler(asteroid.estimated_diameter)}
                                                                                        Hazard={asteroid.is_potentially_hazardous_asteroid + ""}
                                                                                        Relative_Velocity={velocityHandler(asteroid.close_approach_data[0].relative_velocity)}
                        />)}
                    </div>}
                </div>
                {/* Favourite asternoids */}
                <div className="py-4">
                    <div>
                        <ListHeading mainHeading={"Favourite Asteroids"}/>
                    </div>
                    <div className="py-5">
                        <TableHeader ID Name Remove_Favourite/>
                        <TableData ID={"0001"} Name={"215 RC"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}