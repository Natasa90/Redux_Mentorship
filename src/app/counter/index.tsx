"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { increment, decrement } from "../store/slices/counterSlice";
import { CustomButton } from "../customButton";

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="flex flex-col gap-4 mt-10">
            <h1 className="text-3xl">Counter Demo</h1>
            <p className="text-center p-2 text-2xl">{count}</p>
            <div className="flex p-3 gap-4 justify-center">
                <CustomButton
                    className="bg-white text-black text-2xl py-2 px-4"
                    title="+"
                    handleClick={() => dispatch(increment())}
                />
                <CustomButton
                    className="bg-white text-black text-2xl py-2 px-4"
                    title="-"
                    handleClick={() => dispatch(decrement())}
                />
            </div>
        </div>
    );
};
