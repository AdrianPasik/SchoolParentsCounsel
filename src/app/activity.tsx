"use client";
import React, { useEffect, useState } from "react";
import Glyph from "./glyph";

export default function Activity(props: {
    Title: string,
    Date: string,
    Content: string
}) {
    const upperCssDisabled = "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active";
    const upperCss = "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group";

    const timecss = "font-caveat font-medium text-indigo-500";
    const timecssDisabled = "font-caveat font-medium text-amber-500";
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        let today: Date = new Date();
        let activityDate = new Date(props.Date);
        if (activityDate < today) {
            setIsDone(true);
        }
    }, []);

    return (
        <div className={isDone ? upperCssDisabled : upperCss}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Glyph isDone={isDone} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{props.Title}</div>
                    <time className={isDone? timecssDisabled : timecss}>{isDone && "Było "}{props.Date}</time>
                </div>
                <div className="text-slate-500">{props.Content}</div>
            </div>
        </div>
    )

}

