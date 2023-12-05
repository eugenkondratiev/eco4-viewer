// import React from 'react';

import { useContext } from "react";
// import { ParameterInfoContext } from "../../App";

import stl from './InfoModal.module.scss'
import { ParameterInfoContext } from "../../context/parameter-info-context";

import { PARAMETER_TYPES } from "../../utils/constants";

const getParamaterTypeString = (type) => {
    if (type === PARAMETER_TYPES.AVG) return "Середнє"
    if (type === PARAMETER_TYPES.SUM) return "Загальне"
    if (type === PARAMETER_TYPES.MIN) return "Мінімум"
    return "Максимум"
}

const InfoModal = () => {

    const { parameterInfo, setParameterInfo } = useContext(ParameterInfoContext);
    if (!parameterInfo) return null
    return (
        <div className={stl["modal-insertion"]}>
            <div className={stl["insertion-content"]}>
                {/* <picture>
                <img src="../public/img/myhome.jpg" alt="WAR IS HELL">
            </picture> */}
                {parameterInfo && <article>
                    <h2>{parameterInfo.tag}</h2>
                    <p>Одиниці обчислення :  {parameterInfo.eu} </p>
                    <p>Опис параметра :  {parameterInfo.caption} </p>
                    <p>Тип накопичення :  {
                        getParamaterTypeString(parameterInfo.type)
                    } </p>

                </article>}
                <button className={stl["close-button"]} onClick={
                    () => {
                        setParameterInfo(null)
                    }
                }>Закрити</button>
            </div>
        </div>
    );
}

export default InfoModal;




