import React from "react";
import {IBackendPath} from "../../data/flights/FlightInterfaces";
import FlightPath from "../FlightPath/FlightPath";

import './FlightCard.scss';


interface IFlightCardProps {
    price: number;
    paths: IBackendPath[];
    className?: string;
}

const FlightCard = (props: IFlightCardProps) => {
    const {price, paths, className} = props;
    const cardClassName = `flight-card ${className || null}`;

    return (
        <div className={cardClassName}>
            <div className="flight-card__header">
                {price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })}
            </div>
            {paths.map(path => {
                return <FlightPath {...path} key={path.id} className={'flight-card__flight-path'}/>
            })}
        </div>
    );
};

export default React.memo(FlightCard);

