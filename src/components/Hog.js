import React from "react";
import HogDetails from "./HogDetails"

const Hog = (props) => {
    // console.log(props)

    let pigImage = require(`../hog-imgs/${props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`)

    return (
        <div>
            <div className="hogName" onClick={ (e) => {console.log(e.target)}}>
                <h2> Name: {props.hog.name} </h2>
                <img src={pigImage} alt= {`${props.hog.name}`} />
            </div>
            <div className="hogDetails">
                <HogDetails hog = {props} />
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Hog;

