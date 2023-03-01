import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const OrionApp  = () => {
  return (
    <AppTheme>
        <AppRouter />
    </AppTheme>
  )
}
