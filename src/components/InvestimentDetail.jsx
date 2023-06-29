import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button";

import './InvestimentDetail.css';

const InvestimentDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    return ( 
        <>
            <div className="back-button-containner">
                <Button onClick={() => navigate(-1)} label = {'Voltar'} />
            </div>
            <div className="investiment-detail-containner">
                <h2>{params.investimentAlias}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quaerat nulla, 
                    exercitationem sunt maiores enim tenetur architecto. Minima dignissimos tempora consequatur reiciendis 
                    blanditiis similique autem quam? Reiciendis sint iure tempore.
                </p>
            </div>
        </>
    );
}
 
export default InvestimentDetail;