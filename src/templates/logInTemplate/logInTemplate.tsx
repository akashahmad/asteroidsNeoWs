import React from 'react'
import Heading from '../../atoms/heading/heading'
import Space from '../../atoms/space/space'
import FormRow from '../../organisms/formRow/formRow'
import FormCol from '../../organisms/formColumn/formColumn'
import FormBox from '../../organisms/whiteBox/whiteBox'
import FormInput from '../../molecules/formInput/formInput'
import FormCheckBox from '../../molecules/formCheckBox/formCheckBox'
import Button from '../../atoms/button/button'

export default () => {
    const onChange = (value:string | number) => {
        
    }

    return (
        <FormBox>
            <form>
                <Space />
                <div className="flex justify-center ">
                    <Heading heading={"Wellcome Back!"} />
                </div>
                <Space />
                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"johndoe"} type={"text"} onChange={onChange} label={"Username"} />
                    </FormCol>

                </FormRow>
                <FormRow>
                    <FormCol>
                        <FormInput placeholder={"******"} type={"password"} onChange={onChange} label={"Password"} />
                    </FormCol>
                </FormRow>

                <FormRow>
                    <FormCol>
                        <FormCheckBox type={"checkbox"} onChange={onChange} label={"Remember Me"} />
                    </FormCol>
                </FormRow>

                <Space />
                <FormRow>
                    <Button buttonText={"Login"} />
                </FormRow>

                <Space />
                <FormRow>
                    <p className="text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">Forgot Password?</p>
                </FormRow>
                <Space />
            </form>
        </FormBox>
    );
}
