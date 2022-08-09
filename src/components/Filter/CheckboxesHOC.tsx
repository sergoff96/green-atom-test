import React from 'react';
import CheckboxCustom, {CheckboxCustomChangeHandler} from "../CheckboxCustom/CheckboxCustom";

interface ICheckboxesHOC {
    checkboxes: {[name: string]: {name: string, checked: boolean, label: string}},
    onChange: CheckboxCustomChangeHandler,
    checkboxClassName: string,
}

const CheckboxesHOC = (props: ICheckboxesHOC) => {
    const {checkboxes, onChange, checkboxClassName} = props;

    return (
        <>
            {Object.entries(checkboxes).map(([name, checkbox]) => {
                const {label, checked} = checkbox;
                return (
                    <CheckboxCustom
                        label={label}
                        name={name}
                        onChange={onChange}
                        isChecked={checked}
                        className={checkboxClassName}
                        key={name}
                    />
                )
            })}
        </>
    );
}

export default CheckboxesHOC;
