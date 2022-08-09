import {emulateBackendDelay} from "../../utils/utils";
import {IBackendFlight} from "./FlightInterfaces";
import {FLIGHTS} from "../../assets/mocks/flights";

export default class FlightProvider {
    static async getFlights() {
        return emulateBackendDelay<IBackendFlight[]>(FLIGHTS);
    }
}