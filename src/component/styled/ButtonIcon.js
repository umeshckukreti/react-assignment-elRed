import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonIcon = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#ce90d96e",
  borderColor: "#ce90d96e",
  color: "red",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ce90d96e",
    borderColor: "#ce90d96e",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ce90d96e",
    borderColor: "#ce90d96e",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #ce90d96e)",
  },
});

export { ButtonIcon };
