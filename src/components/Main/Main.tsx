import React from "react";

import Filter from "../Filter/Filter";
import FlightList from "../FlightsList/FlightList";
import Toggler from "../Toggler/Toggler";

import {SORT_BY_PRICE, SORT_BY_TIME} from "../../data/sort/SortConsts";

import './Main.scss';


export interface IFilterValues {
    [name: string]: boolean;
}

interface IMain {

}

const Main = (props: IMain) => {

    return (
        <div className={'main'}>
            <div className={'main__filter-wrapper'}>
                <Filter
                    header={'Количество пересадок'}
                    className={'main__filter'}
                />
            </div>
            <div className={'main__container'}>
                <Toggler
                />
                <FlightList />
            </div>
        </div>
    );
}

export default Main
