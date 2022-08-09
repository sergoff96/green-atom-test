import {flow, IModelType, SnapshotIn, types} from "mobx-state-tree";
import {IBackendFlight, IBackendPath} from "./FlightInterfaces";
// import {number, string} from "mobx-state-tree/dist/types/primitives";
import FlightProvider from "./FlightProvider";

const PathItem = types.model('PathItem', {
    id: types.string,
    startPoint: types.string,
    endPoint: types.string,
    timeStart: types.Date,
    timeEnd: types.Date,
    changes: types.array(types.string),
})

const FlightItem = types.model('FlightItem',{
    id: types.string,
    price: types.number,
    paths: types.array(PathItem),
});

export const FlightStore = types.model('FlightStore', {
    flights: types.array(FlightItem),
}).actions(self => {
        return {
            initStore: flow(function* () {
                try {
                    self.flights = yield FlightProvider.getFlights();
                } catch (e: any) {
                    console.error(e.message);
                }
            }),
        };
    }
).views(self => {
    return {
        getFlightsWithFilters(filters: ((path: IBackendPath) => boolean)[]): IBackendFlight[] {
            if (!filters.length) {
                return self.flights;
            }

            const flightsWithFilters = self.flights.map((flight: IBackendFlight) => {
                const paths = flight.paths.filter((path: IBackendPath) => {
                    let result: boolean = false;
                    for (let i = 0; i < filters.length; i++) {
                        result = result || filters[i](path);
                    }

                    return result;
                })

                return {...flight, paths};
            })

            return flightsWithFilters.filter((flight: IBackendFlight) => !!flight.paths.length)
        }
    }
});