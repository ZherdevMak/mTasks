import React, {ChangeEvent} from 'react';
type InputWithoutButtonType = {
    title: string,
    setTitle: (title: string) => void
}

export const InputWithoutButton = (props: InputWithoutButtonType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    }
    return (
        <input value={props.title} onChange={onChangeHandler}/>

    );
};

