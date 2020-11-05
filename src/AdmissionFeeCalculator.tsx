import React from "react";
import Summary from "./Summary";
import Detail from "./Detail";

class AdmissionFeeCalculator extends React.Component {
    render() {
        return (
            <>
                <Detail />
                <Summary />
            </>
        );
    }
}

export default AdmissionFeeCalculator;
