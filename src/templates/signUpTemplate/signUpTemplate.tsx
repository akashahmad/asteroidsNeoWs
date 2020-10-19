import React, {useState,useContext} from 'react'
import {Link, withRouter} from 'react-router-dom';
import Heading from '../../atoms/heading/heading';
import Space from '../../atoms/space/space';
import FormRow from '../../organisms/formRow/formRow';
import FormCol from '../../organisms/formColumn/formColumn';
import FormBox from '../../organisms/whiteBox/whiteBox';
import FormInput from '../../molecules/formInput/formInput';
import Button from '../../atoms/button/button';
import firebase from "../../config/firebase";
import {GlobalContext} from '../../context/GlobalState';

const SignUpTemplate = (props: any) => {
    let {history} = props;
    const {setLoader}:any = useContext(GlobalContext);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const signupHandler = (event: any) => {
        event.preventDefault();
        setErrorMessage("");
        if (!validateEmail(email)) {
            setErrorMessage("Email is Invalid.")
        }
        else if (password !== confirmPassword) {
            setErrorMessage("Passwords are not matching.")
        }
        else {
            setLoader(true);
            firebase.auth().createUserWithEmailAndPassword(email, password).then((data: any) => {
                let uid = data.user.uid;
                let userObj = {
                    fullName: titleCase(fullName),
                    email,
                    uid
                };
                firebase.firestore().collection('users')
                    .doc(uid)
                    .set(userObj).then(() => {
                    setLoader(false);
                    history.push("/");
                })
                    .catch(err => {
                        setLoader(true);
                    })
            }).catch(function (error) {
                setLoader(false);
                setErrorMessage(error.message);
            });
        }

    };
    const validateEmail = (email: string) => {
        let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const titleCase = (str: string) => {
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    };

    return (
        <FormBox>
            <form onSubmit={(event) => signupHandler(event)}>
                <Space />
                <div className="flex justify-center ">
                    <Heading heading={"You Did It!"}/>
                </div>
                <div className="flex justify-center ">
                    <Heading heading={"Tell Us Little About Yourself."}/>
                </div>
                <Space />
                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"John Doe"} type={"text"} onChange={setFullName} label={"Full Name"}
                                   required={true} minLength={2} maxLength={50}/>
                    </FormCol>
                    <FormCol>
                        <FormInput placeholder={"johndoe@email.com"} type={"email"} onChange={setEmail} label={"Email"}
                                   required={true} minLength={3} maxLength={200}/>
                    </FormCol>
                </FormRow>
                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"******"} type={"password"} onChange={setPassword} required={true}
                                   label={"Password"} minLength={8} maxLength={200}/>
                    </FormCol>
                    <FormCol>
                        <FormInput placeholder={"******"} type={"password"} onChange={setConfirmPassword}
                                   required={true} label={"Confirm Password"} minLength={8} maxLength={200}/>
                    </FormCol>
                </FormRow>
                <Space />
                <FormRow>
                    <p className="text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
                        {errorMessage ? errorMessage : " "}
                    </p>
                </FormRow>
                <FormRow>
                    <Button buttonText={"Signup"}/>
                </FormRow>
                <FormRow>
                    <Link to="/log-in">
                        <p className="text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
                            Already have an account?
                        </p>
                    </Link>
                </FormRow>
                <Space />
            </form>
        </FormBox>
    );
};

export default withRouter(SignUpTemplate);