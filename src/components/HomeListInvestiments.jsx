import React from "react";
import AddInvestiment from "./AddInvestiment";
import Investiments from "./Investiments";

const HomeListInvestiments = (props) => {
    return (  
        <>
            <AddInvestiment handleInvestimentAddition={props.handleInvestimentAddition}/>
            <Investiments listInvestiments={props.listInvestiments} handleInvestimentSell={props.handleInvestimentSell}/>
        </>
    );
}
 
export default HomeListInvestiments;