import { Dropdown, Avatar, Text } from "@nextui-org/react";

export const UserDropDown = () => {
  return (
   
        <Dropdown>

            <Dropdown.Trigger>
                <Avatar
                bordered
                as="button"
                color="primary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </Dropdown.Trigger>

            <Dropdown.Menu
            aria-label="User menu actions"
            color="default"
            onAction={ (actionKey) => console.log({ actionKey }) }
            >

                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                    </Text>
                </Dropdown.Item>

                <Dropdown.Item key="settings" withDivider>
                    My Settings
                </Dropdown.Item>

                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>

                <Dropdown.Item key="analytics" withDivider>
                    Analytics
                </Dropdown.Item>

                <Dropdown.Item key="system">System</Dropdown.Item>

                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>

                <Dropdown.Item key="help_and_feedback" withDivider>
                    Help & Feedback
                </Dropdown.Item>

                <Dropdown.Item key="logout" withDivider color="error">
                    Log Out
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>

    )
}
