/**
 * El componente LoginPage es responsable de renderizar una interfaz de usuario para el inicio de sesión 
 * de un usuario y gestionar el estado del formulario de inicio de sesión. Utiliza el almacenamiento global 
 * de Redux para gestionar el estado de autenticación del usuario y para despachar acciones para iniciar sesión 
 * en la aplicación. El componente también utiliza el hook useForm para manejar los cambios en los campos del 
 * formulario y el hook useMemo para calcular el valor de la variable isAuthenticating. Además, 
 * utiliza componentes de la biblioteca @mui/material para renderizar los campos de entrada 
 * y el botón de inicio de sesión, así como para mostrar mensajes de error
 */

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    const isAuthenticating = useMemo( () => status === 'checking', [status] )

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch( startLoginWithEmailPassword( { email, password } ) )
    }

  return (
    <AuthLayout title="Login">
        <form onSubmit={ onSubmit }
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="Correo" 
                        type="email" 
                        placeholder="correo@google.com" 
                        fullWidth
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                        />
                </Grid>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField 
                        label="Contraseña" 
                        type="password" 
                        placeholder="Contraseña" 
                        fullWidth
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                        />
                </Grid>

                <Grid container
                    display={ !!errorMessage ? '' : 'none' }
                    sx={{ mt: 1}}
                >
                    <Grid 
                        item 
                        xs={ 12 }
                        >
                            <Alert severity="error">{ errorMessage }</Alert>
                    </Grid>
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                    <Grid item xs={ 12 }>
                        <Button 
                            disabled={ isAuthenticating }
                            type="submit" 
                            variant="contained" 
                            fullWidth>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    </AuthLayout>
  )
}
