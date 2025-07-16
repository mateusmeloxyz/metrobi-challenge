import { Stack, Box } from "@mui/material";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack
          sx={{ height: "100%", width: "100%", alignItems: "stretch", gap: 2 }}
        >
          {children}
        </Stack>
      </Box>
    </Stack>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
