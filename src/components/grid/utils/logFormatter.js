import {DataTypeProvider} from "@devexpress/dx-react-grid";
import React from "react";
import ListAltIcon from '@material-ui/icons/ListAlt';
import IconButton from "@material-ui/core/IconButton";

const LogFormatter = ({value}, click) => {
    return (
        <IconButton
            onClick={() => click.onClick(value)}
        >
            <ListAltIcon />
        </IconButton>
    )
};

export const LogTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={(s) => LogFormatter(s, props)}
        {...props}
    />
);
