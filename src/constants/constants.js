import React from "react";
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CachedIcon from '@material-ui/icons/Cached';
import CogSolid from '../resources/cog-solid.svg';
import CogSolidDanger from '../resources/cog-solid_danger.svg';

export const benchmark_statuses = {
    success: {
        icon: <CheckCircleIcon style={{color: '#66DE42'}}/>
    },
    danger: {
        icon: <ErrorIcon style={{color: '#F37235'}}/>
    },
    default: {
        icon: <CachedIcon/>
    }
}

export const log_statuses = {
    default: {
        icon: <img src={CogSolid} />
    },
    danger: {
        icon: <img src={CogSolidDanger}/>
    },
}