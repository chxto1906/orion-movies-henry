import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';



export const TableComponent = ({ columns, rows }) => {
  return (
    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
  );
}

TableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};
