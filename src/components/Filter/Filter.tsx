import React, {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {IFilterValues} from "../Main/Main";
import filterStore from "../../data/filter";
import {getSnapshot} from "mobx-state-tree";
import CheckboxesHOC from "./CheckboxesHOC";
import {observer} from "mobx-react";

import './Filter.scss';


interface IFilterProps {
    header: string;
    className?: string;
}

const Filter:React.FC<IFilterProps> = observer((props): JSX.Element => {
    const {header, className} = props;
    const [isLoading, toggleIsLoading] = useState<boolean>(true);

    const elementClassName = `filter ${className || null}`;

    useEffect(() => {
        filterStore.initStore().then(() => {
            toggleIsLoading(false);
        });
    }, []);

    const onChange = useCallback((name: string, newValue: boolean) => {
        filterStore.toggleFilterItem({name, checked: newValue});
    }, []);

    const preloader = <div>загрузка...</div>;

    return (
        <div className={elementClassName}>
            <div className="filter__header">
                {header || 'Фильтры'}
            </div>
            {isLoading ? preloader : <CheckboxesHOC
                onChange={onChange}
                checkboxes={getSnapshot(filterStore).checkboxes}
                checkboxClassName={'filter__checkbox'}
            />}
        </div>
    );
});

export default Filter;