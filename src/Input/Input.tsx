import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import {Button} from "./Button";
import {InputWithoutButton} from "./InputWithoutButton";


// type Statetype = {
//     message: string
// }

const Input = () => {

    let [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'}
    ])
    let [title, setTitle] = useState("")

    const callBackButtonHandler = () => {
        AddMessege(title)
        setTitle("")
    }
    const AddMessege = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }


    return (
        <div>
            <InputWithoutButton setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput AddMessage={AddMessege}/>*/}
            {message.map((item, index) => {
                return (
                    <div key={index}>
                        {item.message}
                    </div>
                )
            })}
        </div>
    );
};

export default Input;