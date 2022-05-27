import React from "react";
import '../App.css'
import {Button} from "./component/Button";


function MicroTaskButton() {
    // const MyFirstSubscriber = () => {console.log('hello! My name is Vasia!!!')}
    // const MySecondSubscriber = () => {console.log('hello! My name is Ivan!!!')}
    // const OnClickHandler = (name:string) => {
    //     console.log(name)
// }
    const buttonFoo1 = (subscriber: string, age:number,addres:string) => {
        console.log(subscriber, age, addres)
    }
    const buttonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const buttonFoo3 = () => {
        console.log('Я тупая кнопка')
    }
    return (
        <div className='App'>
            <Button name={'MyYouTubeChannel-1'} callBack={() => buttonFoo1("Ivan", 28, 'Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => buttonFoo2("Vasia")}/>
            <Button name={'MyYouTubeChannel-3'} callBack={buttonFoo3}/>
            {/*<button onClick = {(event) => {console.log('hello!')}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick = {(event) =>  OnClickHandler('Vasia') }>MyYouTubeChannel-1</button>*/}
            {/*<button onClick = {(event) =>  OnClickHandler('Ivan') }>MyYouTubeChannel-2</button>*/}
        </div>

    )
}

export default MicroTaskButton