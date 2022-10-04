
export const SwitchTheme = () => {
    return (
        <Switch
          checked={true}
          size="xl"
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
        />
    )
}
