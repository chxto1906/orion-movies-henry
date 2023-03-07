/**
 * El componente AuthLayout es responsable de renderizar una estructura de diseño común para 
 * las páginas de autenticación. Renderiza una cuadrícula (Grid) con un solo elemento secundario (Grid item) 
 * que contiene un título (Typography) y los hijos que se pasan como prop (children). 
 * La cuadrícula se centra vertical y horizontalmente en la pantalla, con un fondo de color primario 
 * y un relleno de 4 en todas las direcciones. El elemento secundario tiene un tamaño de 3 en pantallas 
 * extra pequeñas (xs) y un ancho de 450 en pantallas pequeñas (sm) o superiores. 
 * Además, tiene una sombra de caja y un fondo blanco con un relleno de 3 y bordes redondeados. 
 * El título se muestra con un tamaño de fuente grande y un margen inferior de 1. 
 * Finalmente, el componente devuelve la estructura de cuadrícula con el título y los hijos como elementos secundarios.
 */

import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: "primary.main", padding: 4 }}
    >
        <Grid item
            className="box-shadow"
            xs={ 3 }
            sx={{ 
                backgroundColor: "white", 
                padding: 3, 
                borderRadius: 2,
                width: {
                    sm: 450
                }
            }}
        >
            <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>
            { children }
        </Grid>
    </Grid>
  )
}
