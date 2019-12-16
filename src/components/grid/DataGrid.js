import React, {memo, useState} from "react";
import {Grid, PagingPanel, Table, TableHeaderRow, TableSelection} from "@devexpress/dx-react-grid-material-ui";
import {IntegratedPaging, PagingState, SelectionState} from "@devexpress/dx-react-grid";

function DataGrid({columns, rows, events, noPagination, noHighlight, providers}) {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [pageSizes] = useState([5, 10, 15]);
    const [selection, setSelection] = useState([]);

    const [tableColumnExtensions] = useState(getColumnExtensitons);

    function getColumnExtensitons() {
        const extensions = [];
        providers.forEach((provider) => {
            provider.columns.forEach((col) => {
                extensions.push({
                    columnName: col,
                    ...provider.columnOptions
                })
            })
        });

        return extensions;

    }

    function handleSelectionChange(id) {
        if(!events) {
            return ;
        }

        events.onRowClick(id);
        setSelection(id)
    }

    function render() {
        return (
            <Grid
                rows={rows}
                columns={columns}>

                {renderProviders()}

                <SelectionState
                    selection={selection}
                    onSelectionChange={handleSelectionChange}
                />
                <PagingState
                    currentPage={currentPage}
                    onCurrentPageChange={setCurrentPage}
                    pageSize={pageSize}
                    onPageSizeChange={setPageSize}
                />
                <IntegratedPaging />
                <Table
                    columnExtensions={tableColumnExtensions}
                />


                <TableHeaderRow />
                {renderPagination()}

                <TableSelection
                    selectByRowClick
                    highlightRow={!noHighlight}
                    showSelectionColumn={false}
                />

            </Grid>
        )
    }

    function renderProviders() {
        return providers.map((provider) => {
            return  <provider.provider
                onClick={provider.onClick}
                for={provider.columns}
                data={provider.data}
            />
        })
    }

    function renderPagination() {
        if(noPagination) {
            return null
        }
        return (
            <PagingPanel
                pageSizes={pageSizes}
            />
        )
    }

    return render();
}

export default memo(DataGrid)