import React, {useState} from "react";
import {Button} from "../Button/component/Button";
import '../App.css'



function UseState() {
    let [a, setA]=useState(1)


    const onClickHandler = () => {
       setA(++a);
    }
    const setName = ()=> a.toString()
    const setZero = () => {
        setA(a=0)
    }


    return (
        <div className='App'>
            <Button name={setName()} callBack={onClickHandler}/>
            <Button name='Set 0' callBack={setZero}/>
        </div>

    );

}
export default UseState