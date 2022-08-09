import {types} from "mobx-state-tree";
import {sortType} from "./SortTypes";

export const SortType = types.model('SortType', {
    active: types.string,
}).actions(self => ({
    toggle(active: string) {
        self.active = active;
    }
}))