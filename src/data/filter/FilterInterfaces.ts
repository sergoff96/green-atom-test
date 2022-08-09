export interface IFilterBackend {
    [name: string]: string;
}

export interface IFilterDataItem {
    name: string;
    checked: boolean;
}

export interface IFilterItem extends IFilterDataItem {
    label: string;
}