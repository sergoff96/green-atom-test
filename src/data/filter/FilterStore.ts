import {flow, types} from "mobx-state-tree";
import {IFilterDataItem, IFilterItem} from "./FilterInterfaces";
import FilterProvider from "./FilterProvider";

const FilterCheckbox = types.model('FilterCheckbox', {
    name: '',
    label: '',
    checked: false,
}).actions(self => ({
    toggleFilterItem(filterItem: IFilterItem) {
        self = {
            name: filterItem.name,
            label: filterItem.label,
            checked: filterItem.checked,
        }
    },
    toggle() {
        self = {...self, checked: !self.checked}
    }
}));

export const FilterStore = types.model('FilterStore', {
    checkboxes: types.map(FilterCheckbox),
}).actions(self => {return {
    initStore: flow(function* () {
        try {
            const filterItems = yield FilterProvider.getFilterItems();
            Object.entries(filterItems).forEach(([name, value]) => {
                self.checkboxes.set(name, FilterCheckbox.create({name: name, checked: false, label: value as string}));
            });
        } catch (e: any) {
            console.error(e.message);
        }
    }),
    toggleFilterItem(filterItem: IFilterDataItem) {
        const currentItemInState = self.checkboxes.get(filterItem.name);
        self.checkboxes.set(filterItem.name, {...currentItemInState, checked: filterItem.checked});
    }
}})
