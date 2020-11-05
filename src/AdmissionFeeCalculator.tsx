import React from "react";
import Summary from "./Summary";
import Detail from "./Detail";
import {DetailProps} from "./types/props/DetailProps";

class AdmissionFeeCalculator extends React.Component {
    private detail: DetailProps = {
        classification: {
            name: "大人",
            description: "",
            unitPrice: 1000,
            numOfPeople: 0,
            totalPrice: 0
        }
    };
    render() {
        return (
            <>
                <Detail classification={this.detail.classification}/>
                <Summary />
            </>
        );
    }
}

export default AdmissionFeeCalculator;
