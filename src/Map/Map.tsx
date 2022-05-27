import React from 'react';
import {CarModelsType, TopCarsArreyType} from "./TaskMap";


export function TabelElement(props: TopCarsArreyType) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                </thead>
                {props.topCars.map((item, index) => {
                    return (
                        <thead key={item.manufacturer.toString()}>
                        <tr>
                            <th>{item.manufacturer}</th>
                            <th>{item.model}</th>
                        </tr>
                        </thead>
                    )
                })}
            </table>
        </div>
    )
}
