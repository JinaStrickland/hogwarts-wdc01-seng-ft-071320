import React, { Component } from "react";
import Hog from "./Hog"

export default class HogsContainer extends Component {

    render () {
        return (
            <div>
                {this.props.hogs.map(hog => <Hog hog={hog} key={hog.id} />)}
            </div>
        )
    }
}
