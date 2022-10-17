import { changeTheme, Switch, useTheme } from "@nextui-org/react"
import { useEffect } from "react"
import { MoonIcon } from "./MoonIcon"
import { SunIcon } from "./SunIcon"

export const SwitchTheme = () => {

	const { isDark } = useTheme()

	const onHandleChangeTheme = () => {

		const nextTheme = isDark ? 'light' : 'dark'
		changeTheme( nextTheme )
		localStorage.setItem( 'isDark', isDark )

	}

	console.log( 'switch' )

    return (
    	<Switch
          	checked={ !isDark }
		    onChange={ onHandleChangeTheme }
			color="success"
			size="md"
          	iconOn={<SunIcon filled />}
          	iconOff={<MoonIcon filled />}
        />
    )
}
