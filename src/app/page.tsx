"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./counter";
import { CounterMessage } from "./counterMessage";

export default function Home() {
    return (
        <Provider store={store}>
            <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Counter />
                <CounterMessage />
            </main>
        </Provider>
    );
}
