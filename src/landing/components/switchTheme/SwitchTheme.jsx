import { changeTheme, Switch, useTheme } from "@nextui-org/react"
import { MoonIcon } from "./MoonIcon"
import { SunIcon } from "./SunIcon"

export const SwitchTheme = () => {

	const { isDark } = useTheme()

	const onHandleChangeTheme = () => {

		const nextTheme = isDark ? 'light' : 'dark'
		changeTheme( nextTheme )
	}

    return (
    	<Switch
          	checked={ false }
		    onChange={ onHandleChangeTheme }
			color="success"
			size="sm"
          	iconOn={<SunIcon filled />}
          	iconOff={<MoonIcon filled />}
        />
    )
}
