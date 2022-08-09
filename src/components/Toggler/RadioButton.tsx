import React from 'react';

interface IRadioButtonProps {
    name: string;
    value: string;
    isActive: boolean;
    onChange: (name: string, isActive: boolean) => void;
    label: string;
}

const RadioButton = (props: IRadioButtonProps) => {
    const {name, isActive, onChange, label, value} = props;

    const handleChange = () => {
        onChange(value, !isActive);
    }

    return (
        <div className={'toggler__radio-button'}>
            <input
                type="radio"
                name={name}
                onChange={handleChange}
                checked={isActive}
                className={'toggler__radio-input'}
                value={value}
                id={value}
            />
            <label htmlFor={value} className={'toggler__radio-label'}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton;
