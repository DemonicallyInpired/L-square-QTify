import PropTypes from "prop-types";
import Box from "@mui/material/Box";
const CustomTabPannels = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`music-tabpanel-${index}`}
      aria-labelledby={`music-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, color: "#fefefe" }}>{children}</Box>}
    </div>
  );
};
CustomTabPannels.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default CustomTabPannels;
