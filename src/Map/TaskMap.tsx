import React from 'react';
import '../App.css';
import {TabelElement} from "./Map";

export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

export type CarModelsType = {
    manufacturer:string,
    model:string
}
export type TopCarsArreyType = {
    topCars: Array<CarModelsType>
}

function TaskMap() {
    return (
        <div className='App'>
            <TabelElement topCars={topCars} />
        </div>

    );
}

export default TaskMap;