import React, {memo} from "react";
import {useStyles} from "./style";
import clsx from "clsx";

function Highlight({content, color}) {
    const classes = useStyles();
    return (
        <div
            className={
                clsx(classes.root, {
                    [classes.withColor]: color,
                })}
        >
            {content}
        </div>
    )
}

export default memo(Highlight)