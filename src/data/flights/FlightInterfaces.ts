export interface IBackendPath {
    id: string;
    startPoint: string;
    endPoint: string;
    timeStart: Date;
    timeEnd: Date;
    changes: string[];
}

export interface IBackendFlight {
    id: string;
    price: number;
    paths: IBackendPath[];
}