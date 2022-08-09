import {IBackendFlight} from "../../data/flights/FlightInterfaces";

export const FLIGHTS: IBackendFlight[] = [
    {
        id: '1',
        price: 123456,
        paths: [
            {
                id: '111',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 9, 19, 35),
                changes: ['Hkg', 'Jnb'],
            },
            {
                id: '222',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 10, 19, 35),
                changes: ['Hkg'],
            }
        ]
    }, {
        id: '2',
        price: 12345,
        paths: [
            {
                id: '111',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 9, 19, 35),
                changes: ['Hkg', 'Jnb', 'Www'],
            },
            {
                id: '222',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 10, 19, 35),
                changes: [],
            }
        ]
    }, {
        id: '3',
        price: 123456,
        paths: [
            {
                id: '111',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 9, 19, 35),
                changes: ['Hkg', 'Jnb'],
            },
            {
                id: '222',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 10, 19, 35),
                changes: ['Hkg', 'Jnb'],
            }
        ]
    }, {
        id: '4',
        price: 123456,
        paths: [
            {
                id: '111',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 9, 19, 35),
                changes: ['Hkg', 'Jnb'],
            },
            {
                id: '222',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 10, 19, 35),
                changes: ['Hkg', 'Jnb'],
            }
        ]
    }, {
        id: '5',
        price: 123456,
        paths: [
            {
                id: '111',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 9, 19, 35),
                changes: ['Hkg', 'Jnb'],
            },
            {
                id: '222',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 10, 19, 35),
                changes: ['Hkg', 'Jnb'],
            }
        ]
    }, {
        id: '6',
        price: 123456,
        paths: [
            {
                id: '111',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 8, 20, 35),
                changes: ['Hkg', 'Jnb'],
            },
            {
                id: '222',
                startPoint: 'MOW',
                endPoint: 'Hkt',
                timeStart: new Date(2022, 7, 8, 20, 5),
                timeEnd: new Date(2022, 7, 10, 19, 35),
                changes: ['Hkg', 'Jnb'],
            }
        ]
    }
];