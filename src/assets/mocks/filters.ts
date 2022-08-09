import {IFilterBackend} from "../../data/filter/FilterInterfaces";

export type FiltersType =
    'all'|
    '0'|
    '1'|
    '2'|
    '3';

export const FILTERS: IFilterBackend = {
    all: 'Все',
    '0': 'Без пересадок',
    '1': '1 пересадка',
    '2': '2 пересадки',
    '3': '3 пересадки',
}