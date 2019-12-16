import Highlight from "../components/highlight/Highlight";
import React from "react";

export function getBenchMarkData() {
    const columns = [
        { name: 'repository', title: 'Repository' },
        { name: 'job_id', title: 'Job id' },
        { name: 'last_update', title: 'Last update' },
        { name: 'command', title: 'Command' },
        { name: 'log', title: 'Log' },
        { name: 'status', title: 'Status' },
    ]

    const rows = [];

    for(let i = 0; i < 11; i++) {
        const d = new Date();
        rows.push({
            repository: {
                name: `test${i}`,
                branch: 'master',
                commit: '6b0a7c9',
            },
            job_id: i,
            last_update: '2019.12.15.',
            command: <Highlight content={'Xx -lah bench'} />,
            log: i,
            status: (i % 2 === 0) ? 1 : 2,
            logData:[
                {
                    host: `test${i}_Dusk_reference_1`,
                    ip: '134.209.133.246',
                    current_job: '',
                    status: 1,
                },
                {
                    host: `test${i}_Dusk_reference_2`,
                    ip: '134.209.133.246',
                    current_job: '',
                    status: 0,
                }
            ]
        })
    }

    return {
        rows,
        columns
    }

}