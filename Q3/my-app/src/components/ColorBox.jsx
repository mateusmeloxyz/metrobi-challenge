import { Box } from "@mui/material";
import PropTypes from "prop-types";

const ColorBox = ({ children, content, title, bgcolor, sx, ...props }) => {
  return (
    <Box bgcolor={bgcolor} sx={sx} {...props}>
      {title ? <h2>{title}</h2> : content || children}
    </Box>
  );
};

ColorBox.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  title: PropTypes.string,
  bgcolor: PropTypes.string,
  sx: PropTypes.object,
};

export default ColorBox;
