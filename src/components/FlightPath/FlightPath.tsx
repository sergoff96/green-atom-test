import React from 'react';
import moment from 'moment';

import {IBackendPath} from '../../data/flights/FlightInterfaces';

import './FlightPath.scss';


import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import {pluralize} from "../../utils/utils";


interface IFlightPathProps extends IBackendPath {
    className?: string;
}

const DATE_TRANSFORM_OPTIONS: DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
}

const INTL_FORMAT = new Intl.DateTimeFormat('ru-RU', DATE_TRANSFORM_OPTIONS);

const FlightPath = (props: IFlightPathProps) => {
    const {startPoint, endPoint, changes, timeEnd, timeStart, className} = props;
    const componentClassName = `flight-path ${className || null}`

    const flightTimeInterval = moment.duration(moment(timeEnd).diff(timeStart));
    const flightTimeIntervalInHoursAndMinutes = {
        hours: Math.floor(flightTimeInterval.asHours()),
        minutes: flightTimeInterval.minutes(),
    }

    return (
        <div className={componentClassName}>
            <div className={'flight-path__item'}>
                <div className={'flight-path__item-title'}>
                    {startPoint} - {endPoint}
                </div>
                <div className={'flight-path__item-value'}>
                    {INTL_FORMAT.format(timeStart)} - {INTL_FORMAT.format(timeEnd)}
                </div>
            </div>
            <div className={'flight-path__item'}>
                <div className={'flight-path__item-title'}>
                    В пути
                </div>
                <div className={'flight-path__item-value'}>
                    {`${flightTimeIntervalInHoursAndMinutes.hours 
                        ? flightTimeIntervalInHoursAndMinutes.hours + 'ч ' 
                        : ''}${flightTimeInterval.minutes()}м`
                    }
                </div>
            </div>
            <div className={'flight-path__item'}>
                <div className={'flight-path__item-title'}>
                    {changes.length + ' ' + pluralize(changes.length, ' пересадка', ' пересадки', ' пересадок')}
                </div>
                <div className={'flight-path__item-value'}>
                    {changes.join(', ').toUpperCase()}
                </div>
            </div>
        </div>
    );
}

export default FlightPath;
