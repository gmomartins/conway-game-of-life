import { useRef } from "react";

const usePlayStop = (time, fn) => {

    const ref = useRef(null);

    const play = () => {
        if (ref.current){
            stop();
        }

        if (!ref.current)
            ref.current = setInterval(fn, time);
    };

    const stop = () => {
        if (ref.current) {
            clearInterval(ref.current);
            ref.current = null;
        }
    }

    return { stop, play };
}

export default usePlayStop;