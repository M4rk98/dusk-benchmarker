import {DataTypeProvider} from "@devexpress/dx-react-grid";
import React from "react";

const StatusFormatter = ({ value }, data) => {
    if(value === 1) {
        return data.danger.icon;
    }
    if(value === 2) {
        return data.success.icon;
    }

    return data.default.icon;

};

export const StatusTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={(data) => StatusFormatter(data, props.data)}
        {...props}
    />
);
