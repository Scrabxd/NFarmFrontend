import { Dropdown, Text, User } from "@nextui-org/react";

export const UserDropDown = () => {

    const { name, lastName, email } = JSON.parse( localStorage.getItem( 'userData' ) )

  return (
   
    <Dropdown placement="bottom">

        <Dropdown.Trigger>

            <User
                bordered
                size="md"
                as="button"
                color="primary"
                name={ `${ name } ${ lastName }` }
                description={ email }
                src=""
            />

        </Dropdown.Trigger>

        <Dropdown.Menu color="default" aria-label="User Actions">

            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                    { email }
                </Text>
            </Dropdown.Item>

            <Dropdown.Item key="settings" withDivider>
                My Settings
            </Dropdown.Item>

            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>

            <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
            </Dropdown.Item>

            <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
            </Dropdown.Item>
            
        </Dropdown.Menu>
    </Dropdown>

    )
}
