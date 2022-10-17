import { NextUIProvider } from "@nextui-org/react"
import { darkTheme } from "./darkTheme"

export const AppTheme = ({ children }) => {
    return (
        <NextUIProvider theme={ darkTheme }>
            
            { children }

        </NextUIProvider>
    )
}
