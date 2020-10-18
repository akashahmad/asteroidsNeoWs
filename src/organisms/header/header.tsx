import React from 'react'
import Logo from '../../atoms/logo/logo'
import HeaderText from '../../atoms/loginSignUpText/loginSignUpText'

interface TextAndHeading{
    logo:string,
    firstText:string;
    lastText:string;
    betweenText:any;
}
export default ({logo,betweenText,firstText,lastText}:TextAndHeading) => {
    return (
        <div className="w-100 flex justify-between px-8 py-3 shadow-lg bg-white">
            <div>
                <Logo logo={logo} />
            </div>
            <div className="flex items-center">
                <div>
                    <HeaderText loginSignUpText={firstText} />
                </div>
                <div className="px-4">
                    <HeaderText loginSignUpText={betweenText} />
                </div>
                <div>
                    <HeaderText loginSignUpText={lastText} />
                </div>
            </div>
        </div>
    );
}
