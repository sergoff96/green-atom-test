import {SORT_BY_PRICE, SORT_BY_TIME} from "./SortConsts";
import {IBackendFlight} from "../flights/FlightInterfaces";
import {sortType} from "./SortTypes";
import moment from "moment";

interface ISortFunctions {
    [key: string]: (flights: IBackendFlight[]) => IBackendFlight[];
}

export const SORT_FUNCTIONS: ISortFunctions = {
    [SORT_BY_PRICE]: (flights: IBackendFlight[]) => {
        return [...flights].sort((flight1, flight2) => {
            return flight1.price - flight2.price;
        })
    },
    [SORT_BY_TIME]: (flights: IBackendFlight[]) => {
        return [...flights].sort((flight1, flight2) => {
            const flightTime1 = Math.min(
                ...flight1.paths.map(({timeStart, timeEnd}) => {
                    return moment.duration(moment(timeEnd).diff(timeStart)).asMilliseconds();
                })
            );
            const flightTime2 = Math.min(
                ...flight2.paths.map(({timeStart, timeEnd}) => {
                    return moment.duration(moment(timeEnd).diff(timeStart)).asMilliseconds();
                })
            );
            return flightTime1 - flightTime2;
        })
    },
}