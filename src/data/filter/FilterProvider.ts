import {FILTERS} from "../../assets/mocks/filters";
import {emulateBackendDelay} from "../../utils/utils";
import {IFilterBackend} from "./FilterInterfaces";

export default class FilterProvider {
    static async getFilterItems(): Promise<IFilterBackend> {
        return await emulateBackendDelay<IFilterBackend>(FILTERS);
    }
}
