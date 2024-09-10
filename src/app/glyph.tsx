"use client";
import React, { useEffect, useState } from "react";

export default function Glyph(props: {
    isDone: boolean
}) {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height={(props.isDone ? "12" : "10")}>
            {
                (props.isDone) ?
                    (<path fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />)
                    :
                    (<path
                        d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />)
            }
        </svg>
    );
}