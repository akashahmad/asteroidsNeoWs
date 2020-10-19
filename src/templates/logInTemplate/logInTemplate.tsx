import React, {useContext, useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import Heading from '../../atoms/heading/heading'
import Space from '../../atoms/space/space'
import FormRow from '../../organisms/formRow/formRow'
import FormCol from '../../organisms/formColumn/formColumn'
import FormBox from '../../organisms/whiteBox/whiteBox'
import FormInput from '../../molecules/formInput/formInput'
import FormCheckBox from '../../molecules/formCheckBox/formCheckBox'
import Button from '../../atoms/button/button'
import firebase from "../../config/firebase";
import {GlobalContext} from '../../context/GlobalState';


const LoginTemplate = (props: any) => {
    let {history} = props;
    const {setLoader}:any = useContext(GlobalContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const loginHandler = (event:any) => {
        event.preventDefault();
        setLoader(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        setLoader(false);
                        history.push("/");
                    }
                });
            })
            .catch(err => {
                setLoader(false);
                setErrorMessage(err.message);
            });
    };

    return (
        <FormBox>
            <form onSubmit={(event) => {
                loginHandler(event)
            }}>
                <Space />
                <div className="flex justify-center ">
                    <Heading heading={"Wellcome Back!"}/>
                </div>
                <Space />
                <FormRow>
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
                </FormRow>

                <FormRow>
                    <FormCol>
                        <FormCheckBox type={"checkbox"} label={"Remember Me"}/>
                    </FormCol>
                </FormRow>
                <Space />
                <FormRow>
                    <p className="text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
                        {errorMessage ? errorMessage : " "}
                    </p>
                </FormRow>
                <FormRow>
                    <Button buttonText={"Login"}/>
                </FormRow>
                <FormRow>
                    <Link to="/sign-up">
                        <p className="text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
                            Don't have an account yet?
                        </p>
                    </Link>
                </FormRow>
                <Space />
            </form>
        </FormBox>
    );
};

export default withRouter(LoginTemplate)
