import React, {useState, useRef} from 'react'

interface Person{
    firstName: string,
    lastName: string
}

interface Props{
    message: string,
    fn?: () => void,
    ok?: boolean,
    i?: number,
    obj?: Person
}

const Message: React.FC<Props> = (props: Props) => {

    const [count, setCount] = useState<number | null>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    let {message} = props;
    return (
        <div>
            {message.toUpperCase()}
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default Message;