import React from 'react'
import Heading from '../../atoms/heading/heading'
import Space from '../../atoms/space/space'
import FormRow from '../../organisms/formRow/formRow'
import FormCol from '../../organisms/formColumn/formColumn'
import FormBox from '../../organisms/whiteBox/whiteBox'
import FormInput from '../../molecules/formInput/formInput'
import Button from '../../atoms/button/button'
const SignUpTemplate = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("e", e.target.value)
    }
    return (
        <FormBox>
            <form>
                <Space />
                <div className="flex justify-center ">
                    <Heading heading={"You Did It!"} />
                </div>
                <div className="flex justify-center ">
                    <Heading heading={"Tell Us Little About Yourself."} />
                </div>
                <Space />
                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"johndoe"} type={"text"} onChange={onChange} label={"Name"} />
                    </FormCol>
                    <FormCol>
                        <FormInput placeholder={"johndoe@gmail.com"} type={"email"} onChange={onChange} label={"Email"} />
                    </FormCol>
                </FormRow>

                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"johndoe"} type={"text"} onChange={onChange} label={"Username"} />
                    </FormCol>
                    <FormCol>
                        <FormInput placeholder={"44 831 1234567"} type={"number"} onChange={onChange} label={"Contact Number"} />
                    </FormCol>
                </FormRow>

                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"******"} type={"password"} onChange={onChange} label={"Password"} />
                    </FormCol>
                    <FormCol>
                        <FormInput placeholder={"******"} type={"password"} onChange={onChange} label={"Confirm Password"} />
                    </FormCol>
                </FormRow>
                <Space />
                <FormRow>
                    <Button buttonText={"Signup"} />
                </FormRow>
                <Space />
            </form>
        </FormBox>
    );
}

export default SignUpTemplate;