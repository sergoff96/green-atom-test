import React from "react";

import './CheckboxCustom.scss'

export type CheckboxCustomChangeHandler = (name: string, newValue: boolean) => void;

export interface ICheckboxCustom {
    onChange: CheckboxCustomChangeHandler;
    isChecked: boolean;
    name: string;
    label: string;
    className?: string;
}

const CheckboxCustom = (props: ICheckboxCustom) => {
    const {onChange, isChecked, name, label, className} = props;

    const checkboxClassname = `checkbox ${className ? className : ''}`

    return (
        <label className={checkboxClassname}>
            <input
                type="checkbox"
                checked={isChecked || false}
                onChange={() => {
                    onChange(name, !isChecked)
                }}
                className={'checkbox__input'}
            />
            <div className={'checkbox__fake-checkbox'} />
            <div className={'checkbox__label'}>
                {label}
            </div>
        </label>
    );
}

export default React.memo(CheckboxCustom);
