import React, {memo, useState} from "react";
import {Card} from "@material-ui/core";
import DataGrid from "../../components/grid/DataGrid";
import {benchmark_statuses, log_statuses} from "../../constants/constants";
import {useHistory} from "react-router-dom";
import {useStyles} from "./style";
import {LogTypeProvider} from "../../components/grid/utils/logFormatter";
import {RepositoryTypeProvider} from "../../components/grid/utils/repositoryFormatter";
import {StatusTypeProvider} from "../../components/grid/utils/statusFormatter";

function BenchMarker({data}) {
    const [selectedLog, setSelectedLog] = useState(null)
    const history = useHistory();
    const classes = useStyles();

    function render() {
        return (
            <>
                <Card>
                    {renderBenchMarkData()}
                </Card>
                {renderLogData()}
            </>
        )
    }

    function renderBenchMarkData() {
        const providers = [
            {
                columns: ['log'],
                provider: LogTypeProvider,
                onClick: (log) => setSelectedLog(log)
            },
            {
                columns: ['repository'],
                provider: RepositoryTypeProvider,
                columnOptions: {
                    width: 300
                }
            },
            {
                columns: ['status'],
                provider: StatusTypeProvider,
                data: benchmark_statuses
            }
        ];

        return (
            <DataGrid
                noHighlight
                columns={data.columns}
                rows={data.rows}
                providers={providers}
            />
        )
    }

    function renderLogData() {
        if(selectedLog === null) {
            return null;
        }
        const selectedData = data.rows.find((row) => {
            return row.log === selectedLog;
        });
        const columns = Object.keys(selectedData.logData[0]).map((key) => {
            return {
                name: key,
                title: key
            }
        });
        const providers = [
            {
                columns: ['status'],
                provider: StatusTypeProvider,
                data: log_statuses
            }
        ];
        const events = {
            onRowClick: (id) => {
                history.push(`${selectedData.logData[id].host}/${selectedData.job_id}`)
            }
        };

        return (
            <Card className={classes.logWrapper_div}>
                <DataGrid
                    noPagination
                    columns={columns}
                    rows={selectedData.logData}
                    providers={providers}
                    events={events}
                />
            </Card>
        )
    }

    return render();
}

export default memo(BenchMarker)