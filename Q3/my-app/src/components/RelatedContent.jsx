import { Stack, Box } from "@mui/material";
import ColorBox from "./ColorBox";

const RelatedContent = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Stack
        sx={{
          height: "100%",
          gap: 2,
          alignItems: "stretch",
          flexDirection: "row",
        }}
      >
        <ColorBox
          bgcolor="#2AB676"
          sx={{ flexGrow: 2 }}
          title="Related Images"
        />
        <ColorBox
          bgcolor="#F3CCDE"
          sx={{ flexGrow: 1 }}
          title="Related Posts"
        />
      </Stack>
    </Box>
  );
};

export default RelatedContent;
