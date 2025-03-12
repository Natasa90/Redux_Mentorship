import { useSelector } from "react-redux";
import { RootState } from "../store";

export const CounterMessage = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    return (
        <div>
            <p>Counter Value from Redux: {counterValue}</p>
        </div>
    );
};
