import {SortType} from "./SortStore";
import {SORT_BY_PRICE} from "./SortConsts";

const sortStore = SortType.create({active: SORT_BY_PRICE});

export default sortStore;