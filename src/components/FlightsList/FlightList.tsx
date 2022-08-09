import React, {useEffect, useMemo, useState} from 'react';
import {FLIGHTS} from "../../assets/mocks/flights";
import FlightCard from "../FlightCard/FlightCard";
import flightStore from "../../data/flights";
import {observer} from "mobx-react";

import './FlightList.scss';
import {getSnapshot} from "mobx-state-tree";
import filterStore from "../../data/filter";
import {FILTER_FUNCTION_BY_FILTER_NAME} from "../../data/filter/FilterUtils";
import sortStore from "../../data/sort";
import {SORT_FUNCTIONS} from "../../data/sort/SortUtils";
import {toJS} from "mobx";


interface IFlightListProps {
    className?: string;
}

const FlightList = observer((props: IFlightListProps) => {
    const {className} = props;
    const [isLoading, toggleIsLoading] = useState<boolean>(true);
    const componentClassName = `flight-list ${className}`;

    const sortedRule = useMemo(() => getSnapshot(sortStore).active, [sortStore.active]);

    useEffect(() => {
        flightStore.initStore().then(() => {
            toggleIsLoading(false);
        });
    }, []);

    const filters = getSnapshot(filterStore).checkboxes;
    const filterFunctions = useMemo(() => {
        return Object.values(filters).filter(filterValue => {
            return filterValue.checked;
        }).map(filterValue => {
            const filterName = parseInt(filterValue.name);
            if (isNaN(filterName)) {
                return () => true;
            }

            return FILTER_FUNCTION_BY_FILTER_NAME.filterByChangeCount(filterName);
        })
    }, [filters])

    const flights = useMemo(() => {
        return flightStore.getFlightsWithFilters(filterFunctions);
    }, [filterFunctions, flightStore]);
    const sortedFlights = useMemo(() => SORT_FUNCTIONS[sortedRule](flights),[sortedRule, flights.length])

    if (isLoading) {
        return (
            <div className={componentClassName}>
                загрузка...
            </div>
        )
    }

    return (
        <div className={componentClassName}>
            {sortedFlights.map(flight => {
                return <FlightCard
                    price={flight.price}
                    paths={flight.paths}
                    key={flight.id}
                    className={'flight-list__flight-card'}
                />
            })}
        </div>
    );
});

export default FlightList;
