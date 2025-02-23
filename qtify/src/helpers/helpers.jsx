const truncate = (str, len) => {
  if (typeof str !== "string") {
    throw new Error(
      `invalid type for the argument str expected string got ${typeof str}`,
    );
  }
  if (str.length > len) {
    return str.substring(0, len).concat("...");
  }
  return str.substring(0, str.length);
};
const a11yProps = (index) => {
  return {
    id: `music-tab-${index}`,
    "aria-controls": `music-tab-${index}`,
  };
};
export { truncate, a11yProps };

