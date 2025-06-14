import { useRef } from "react";

const usePlayStop = (time, fn) => {

    const ref = useRef(null);

    const play = () => {
        if (ref.current)
            return;

        if (!ref.current)
            ref.current = setInterval(fn, time);
    };

    const stop = () => {
        if (ref.current)
            clearInterval(ref.current);
    }

    return { stop, play };
}

export default usePlayStop;