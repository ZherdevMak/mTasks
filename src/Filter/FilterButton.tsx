import React from 'react';
import {FilterType} from "./FilterState";
type ArrType = {
    money: ObFromArrType[]
    function: (newButton: FilterType) => void
}
type ObFromArrType = {
    banknots: string,
    value: number,
    number: string
}

function FilterButton(props: ArrType) {

    return (
        <div>
            <ul>
                {props.money.map((obj, index: number) => {
                    return (
                        <li key = {index}><span>{obj.banknots}</span>
                            <span>{obj.value}</span>
                            <span>{obj.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.function('all')}>All</button>
                <button onClick={() => props.function('RUBLS')}>Rubls</button>
                <button onClick={() => props.function('Dollars')}>Dollars</button>
            </div>
        </div>
    );
};

export default FilterButton;