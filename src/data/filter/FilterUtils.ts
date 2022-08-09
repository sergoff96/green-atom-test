import {IBackendPath} from "../flights/FlightInterfaces";

export const FILTER_FUNCTION_BY_FILTER_NAME = {
    filterByChangeCount: (changeCount: number): ((path: IBackendPath) => boolean) => {
        return (path: IBackendPath) => {
            if (changeCount === 0) {
                return !path.changes || path.changes.length === changeCount;
            }
            return path.changes && path.changes.length === changeCount;
        };
    },
}
