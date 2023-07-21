import { NextUIProvider } from "@nextui-org/react"
import { lightTheme } from "./lightTheme"

export const AppTheme = ({ children }) => {
    return (
        <NextUIProvider theme={ lightTheme }>
            
            { children }

        </NextUIProvider>
    )
}
