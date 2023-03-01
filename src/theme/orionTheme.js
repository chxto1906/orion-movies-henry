import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const orionTheme = createTheme({
    palette: {
        primary: {
            main: '#103C6B'
        },
        secondary: {
            main: '#370665'
        },
        error: {
            main: red.A400
        }
    }
})