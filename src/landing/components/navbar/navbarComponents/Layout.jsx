import { Box } from "./Box.jsx";

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        //    position: "fixed",
        // overflow: "visible scroll",
        }}
    >
        {children}
    </Box>
);