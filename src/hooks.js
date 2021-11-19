import { useState } from 'react';

export function useStack() {

    const [stack, setStack] = useState([]);

    function push(item) {

        let newData = [...stack];

        newData.push(item);

        setStack(newData);
    }

    function pop() {
        let newData = [...stack];

        newData.pop();

        setStack(newData);
    }


    return { stack, push, pop };

}

export function useCounter(start, finish) {

    const [counter, setCounter] = useState(start);

    function increase() {
        if (counter >= finish) {
            setCounter(start);
        }

        else {
            setCounter(counter + 1);
        }
    }

    return [counter, increase];

}

