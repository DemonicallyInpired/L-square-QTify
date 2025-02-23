import "../../index.css";
import { styled } from "@mui/system";
import { ButtonBase as MUIButton } from "@mui/material";

const CustomButton = styled(MUIButton)`
  && {
    font-family: "Poppins", serif !important;
  }
`;
export default function Button({ children, variant, size, ...rest }) {
  return (
    <CustomButton
      variant={variant}
      size={size}
      sx={{
        padding: "0.5%",
        borderRadius: "10px",
        ...rest,
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      {children}
    </CustomButton>
  );
}
