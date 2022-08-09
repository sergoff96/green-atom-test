import React from 'react';

import RadioButton from "./RadioButton";

import {SORT_BY_PRICE, SORT_BY_TIME} from "../../data/sort/SortConsts";

import {sortType} from "../../data/sort/SortTypes";

import './Toggler.scss';
import {getSnapshot} from "mobx-state-tree";
import {observer} from "mobx-react";
import sortStore from "../../data/sort";


const TOGGLER_LABELS_BY_TYPE: {[key: string]: string} = {
    [SORT_BY_PRICE]: 'Самый дешёвый',
    [SORT_BY_TIME]: 'Самый быстрый',
};

interface ITogglerProps {
    // name: string;
    // onChange: () => void;
    // activeValue: sortType;
    // itemValues: sortType[];
    className?: string;
}

const ITEM_VALUES = [SORT_BY_PRICE, SORT_BY_TIME];

const Toggler = (props: ITogglerProps) => {
    const {className} = props;
    const activeValue = getSnapshot(sortStore).active;

    const togglerClassName = `toggler ${className || ''}`;

    const onChange = (value: string, isActive: boolean) => {
        if (isActive) {
            sortStore.toggle(value);
        }
    }

    return (
        <div className={togglerClassName}>
            {ITEM_VALUES.map(item => {
                return <RadioButton
                    name={'sort'}
                    isActive={item === activeValue}
                    onChange={onChange}
                    value={item}
                    label={TOGGLER_LABELS_BY_TYPE[item]}
                    key={item}
                />
            })}
        </div>
    )
}

export default observer(Toggler);
