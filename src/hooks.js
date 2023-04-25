import { useState } from "react";

const useFlip = (initialState=true) => {
    const [state, setState] = useState(initialState);
    const flip = () => {
        setState(state => !state)
    }
    return [state, flip];
}

export { useFlip };