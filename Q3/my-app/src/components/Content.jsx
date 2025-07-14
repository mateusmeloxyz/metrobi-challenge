import { Stack, Box } from "@mui/material";
import ColorBox from "./ColorBox";

const Sidebar = () => (
  <Stack sx={{ height: "100%", gap: 2, alignItems: "stretch" }}>
    <ColorBox bgcolor="#D7C9E3" sx={{ flexGrow: 1 }} title="Hero" />
    <ColorBox bgcolor="#9FC363" sx={{ flexGrow: 2 }} title="Sidebar" />
  </Stack>
);

const MainContent = () => (
  <Stack sx={{ height: "100%", gap: 2, alignItems: "stretch" }}>
    <ColorBox bgcolor="#F5C632" sx={{ flexGrow: 2 }} title="Main Content" />
    <ColorBox bgcolor="#898989" sx={{ flexGrow: 1 }} title="Extra Content" />
  </Stack>
);

const Content = () => {
  return (
    <Box sx={{ flexGrow: 7 }}>
      <Stack
        direction="row"
        sx={{
          height: "100%",
          width: "100%",
          gap: 2,
          alignItems: "stretch",
        }}
      >
        <Box sx={{ flexGrow: 1, flexBasis: 1 }}>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 2, flexBasis: 2 }}>
          <MainContent />
        </Box>
      </Stack>
    </Box>
  );
};

export default Content;
