/**
 * El código proporciona una función personalizada llamada useForm que devuelve un conjunto de variables y 
 * funciones que se pueden utilizar para manejar el estado y la validación de los formularios.

useForm recibe dos argumentos opcionales: initialForm, que es un objeto que contiene los valores iniciales de 
los campos del formulario, y formValidations, que es un objeto que contiene las funciones de validación de cada 
campo del formulario.

La función useForm devuelve un objeto que incluye formState, que es un objeto que contiene los valores actuales 
de los campos del formulario, y onInputChange, que es una función que se utiliza para actualizar los valores de 
los campos del formulario. También hay una función llamada onResetForm, que permite establecer los valores del 
formulario a sus valores iniciales.

Además, la función useForm devuelve un objeto que incluye las validaciones de cada campo del formulario en forma 
de propiedades que terminan en Valid, y una propiedad booleana isFormValid que indica si todos los campos del 
formulario son válidos o no.
 */

import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({})
    useEffect(() => {
      createValidators();
    }, [formState])
    

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys( formValidation )) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [fn, errorMessage = 'Este campo es requerido.' ] = formValidations[formField];
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}