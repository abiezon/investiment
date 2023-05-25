import React from "react";
import Investiment from "./Investiment";

const Investiments = ({ listInvestiments, handleInvestimentSell }) => {
    return (
        <>
            { listInvestiments.map((investiment) => (
                <Investiment investiment={investiment} handleInvestimentSell={handleInvestimentSell}/>
            ))}
        </>
    )
}

export default Investiments;