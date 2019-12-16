import {DataTypeProvider} from "@devexpress/dx-react-grid";
import React from "react";
import RepoIcon from '../../../resources/repo_icon.svg'
import BranchIcon from '../../../resources/branch_icon.svg'
import NodeIcon from '../../../resources/Node_icon.svg'
import {Typography} from "@material-ui/core";
import Highlight from "../../highlight/Highlight";

const RepositoryFormatter = ({ value }) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <img src={RepoIcon}  />
                <Typography style={{marginLeft: 8}} variant={'body1'}>{value.name}</Typography>
            </div>
            <div style={{display: 'flex'}}>
                <img style={{marginRight: 8}} src={BranchIcon} />
                <Highlight color={'primary'} content={value.branch} />
                <img style={{marginLeft: 8, marginRight: 8}} src={NodeIcon} />
                <Highlight content={value.commit} />
            </div>
        </>
    )
};

export const RepositoryTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={RepositoryFormatter}
        {...props}
    />
);
