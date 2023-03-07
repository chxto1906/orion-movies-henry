/**
 * En resumen, este componente define la estructura básica de la aplicación 
 * y utiliza los componentes AppRouter y AppTheme para proveer la navegación y el tema de la aplicación.
 */

import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const OrionApp  = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
