import { Box } from "./Box.jsx";

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: "100%",
        //    position: "fixed",
        // overflow: "visible scroll",
        }}
    >
        {children}
    </Box>
);