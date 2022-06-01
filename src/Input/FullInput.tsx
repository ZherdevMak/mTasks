import React, {ChangeEvent, useState} from 'react';

type InputProps = {
    AddMessage: (title: string) => void
}
export const FullInput = (props: InputProps) => {
    let [title, setTitle] = useState("")
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const OnClickButtonHandler = () => {
        props.AddMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={OnClickButtonHandler}>send</button>
        </div>
    );
};

