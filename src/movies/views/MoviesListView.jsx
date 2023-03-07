/**
 * El código muestra una vista de lista de películas que utiliza un componente de tabla para mostrar información. 
 * La vista obtiene los datos de la lista de películas del estado global utilizando el hook useSelector de Redux. 
 * También define las columnas de la tabla y las pasa como una prop al componente de tabla.
 */

import React from 'react'
import { useSelector } from 'react-redux';
import { TableComponent } from '../components/TableComponent';

export const MoviesListView = () => {

    const { movies } = useSelector( state => state.movies )

    const columns = [
        {
          field: 'name',
          headerName: 'Nombre',
          width: 200,
          editable: true,
        },
        {
          field: 'gender',
          headerName: 'Género',
          width: 150,
          editable: true,
        },
        {
          field: 'rating',
          headerName: 'Rating',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'cast_crew',
          headerName: 'Reparto',
          sortable: false,
          editable: true,
          width: 360
        },
        {
          field: 'release_date',
          headerName: 'Fecha publicación',
          width: 200,
          type: "date",
          editable: true,
          valueGetter: ({ value }) => value && new Date(value)
        }
      ];

  return (
    <>
        <div style={{ height: 400, width: '100%' }}>
            <TableComponent columns={columns} initialRows={ movies } />
        </div>
    </>
  )
}
