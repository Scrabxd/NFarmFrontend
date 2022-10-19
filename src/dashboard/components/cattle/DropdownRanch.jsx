import { Dropdown } from "@nextui-org/react"

export const DropdownRanch = () => {
    return (
        <Dropdown>
            <Dropdown.Button  color='primary'>Trigger</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="ranch1" >Ranch 1</Dropdown.Item>
                <Dropdown.Item key="ranch2" withDivider>Ranch 2</Dropdown.Item>
                <Dropdown.Item key="ranch3" withDivider>Ranch 3</Dropdown.Item>
                <Dropdown.Item key="ranch4" withDivider>Ranch 4</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
