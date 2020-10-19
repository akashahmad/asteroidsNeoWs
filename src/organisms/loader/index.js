import React from "react";
import Heading from '../../atoms/heading/heading'

export default () => {
  return (<div className="mainWrapper">
    <img className="loader" src={require('../../assets/images/loader.gif')} alt="loader"/>
    <Heading heading="Please wait ..."/>
  </div>)
}
