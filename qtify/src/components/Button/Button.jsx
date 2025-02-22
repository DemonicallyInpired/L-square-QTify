import { Button as MUIButton } from "@mui/material";
export default function Button({ children, variant, size, ...rest }) {
  return (
    <MUIButton
      variant={variant}
      size={size}
      sx={{
        ...rest,
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      {children}
    </MUIButton>
  );
}
