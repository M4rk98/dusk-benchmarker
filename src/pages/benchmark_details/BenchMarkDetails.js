import React, {memo} from "react";
import Grid from "@material-ui/core/Grid";
import {Card, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import Highlight from "../../components/highlight/Highlight";
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";
import {useStyles} from "./style";

function BenchMarkDetails({data}) {
    const params = useParams();
    const classes = useStyles();

    function render() {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <Card className={classes.details_card}>
                        {renderDetails()}
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    {renderLogMessage()}
                </Grid>
            </Grid>
        )
    }

    function renderDetails() {
        const {rows} = data;
        const selected_row = rows.find((row) => row.job_id === Number(params.job_id));
        const selected_row_log = selected_row.logData.find((row) => row.host === params.reference_id)

        const expected_data = {
            "Repository": selected_row.repository.name,
            "Branch": <Highlight color={'primary'} content={selected_row.repository.branch} />,
            "Commit": <Highlight content={selected_row.repository.commit}/>,
            "Job Id": selected_row.job_id,
            "Command": <Highlight content={selected_row.command}/>,
            "Status": 1,
            "Host": selected_row_log.host,
            "Created": "",
            "Updated": selected_row.last_update
        }

        const details = Object.keys(expected_data).map((detail) => (
            <Grid container className={classes.details_grid}>
                <Grid item xs={6}>
                    <Typography variant={'body2'}>
                        {detail}:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={'body1'}>
                        {expected_data[detail]}
                    </Typography>
                </Grid>
            </Grid>
        ));

        return (
            <div>
                {details}
            </div>
        )
    }

    function renderLogMessage() {
        return (
            <Card className={classes.card}>
                <IconButton>
                    <GetAppIcon />
                </IconButton>
            </Card>
        )
    }

    return render();
}

export default memo(BenchMarkDetails)