import { Button as MUIButton } from "@mui/material";
export default function Button(props) {
  const { children, variant } = props;
  return (
    <MUIButton
      variant={variant}
      sx={{
        backgroundColor: "var(--mui-palette-primary-dark)",
        color: "var(--mui-palette-primary-main)",
        textTransform: "capitalize",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
      className="btn-primary"
    >
      {children}
    </MUIButton>
  );
}
