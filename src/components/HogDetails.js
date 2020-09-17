import React from "react";

const HogDetails = (hog) => {
// console.log(hog)
    return (
        <div>
            <div className="hogDetails" >
                <h4>Specialty: {hog.hog.hog.specialty} </h4>
                <h4>Greased: {hog.hog.hog.greased} </h4>
                <h4>Weight: {hog.hog.hog.weight} </h4>
                <h4>Highest Medal Achieved:  { hog.hog.hog['highest medal achieved']} </h4>
            </div>
        </div>
    )
}

export default HogDetails;


//     greased: false,
//     'highest medal achieved': 'bronze'