import { Dropdown } from "@nextui-org/react"

export const DropdownRanch = () => {
    return (
        <Dropdown>
            <Dropdown.Button solid color='primary'>Trigger</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="ranch1">Ranch 1</Dropdown.Item>
                <Dropdown.Item key="ranch2">Ranch 2</Dropdown.Item>
                <Dropdown.Item key="ranch3">Ranch 3</Dropdown.Item>
                <Dropdown.Item key="ranch4">Ranch 4</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
