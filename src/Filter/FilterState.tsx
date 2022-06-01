import React, {useState} from 'react';
import FilterButton from "./FilterButton";

export type FilterType = 'all' | 'RUBLS' | 'Dollars'


function FilterState() {

    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]

    let [filter, setFilter] = useState<FilterType>('all')
    let currntMoney = money
    if (filter === 'RUBLS') {
        currntMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currntMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    const onClicfilterHandler = (newButton: FilterType) => {
        setFilter(newButton)
    }


    return (
        <FilterButton money={currntMoney} function={onClicfilterHandler}/>
    );
};

export default FilterState;