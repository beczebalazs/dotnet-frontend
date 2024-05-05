import { createTheme } from "@mui/material";

import { breakpoints } from "./custom-theme/customBreakpoints";
import { grey } from "@mui/material/colors";
import {
  alpha,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material/styles";

const StandardStyle = ({ theme }: { theme: Theme }) => ({
  backgroundColor: "white",
  display: "flex",
  borderRadius: theme.spacing(1),
  border: `${theme.spacing(0.1)} solid ${grey[200]}`,
  padding: theme.spacing(1),
  "& .MuiInput-underline:before": {
    display: "none",
  },
  "& .MuiInput-underline:hover:before": {
    border: "none",
  },
  "& .MuiInputBase-root.MuiInput-root:after": {
    borderBottom: "none",
  },
  "& .MuiInputBase-root.MuiInput-root": {
    height: theme.spacing(4),
  },
});

const FilledStyle = ({ theme }: { theme: Theme }) => ({
  backgroundColor: grey[200],
  borderRadius: theme.spacing(0),
  padding: theme.spacing(1),
  "& .MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)":
    {
      marginTop: theme.spacing(0),
    },
  "& .MuiInputBase-input.MuiFilledInput-input": {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  "& .MuiInputBase-root.MuiFilledInput-root": {
    borderRadius: theme.spacing(0),
    backgroundColor: grey[200],
    paddingLeft: theme.spacing(0),
    height: theme.spacing(4),
  },
  "& .MuiInputBase-root.MuiFilledInput-root:before": {
    display: "none",
  },
  "& .MuiInputBase-root.MuiFilledInput-root:after": {
    display: "none",
  },
  "& .MuiInputBase-root.MuiFilledInput-root:hover": {
    backgroundColor: grey[200],
  },
});

const OutlinedStyle = ({ theme }: { theme: Theme }) => ({
  backgroundColor: grey[200],
  border: `${theme.spacing(0.1)} solid ${grey[500]}`,
  borderRadius: theme.spacing(6),
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none",
  },
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    height: theme.spacing(5),
  },
});

type MuiTextFieldTheme = {
  defaultProps?: ComponentsProps["MuiTextField"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
  variants?: ComponentsVariants["MuiTextField"];
};

const TextStyle = ({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  display: "flex",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.7)}`,
  },
});

const ContainedStyle = ({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  boxShadow: "none",
  borderRadius: 0,
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.7)}`,
    boxShadow: "none",
  },
});

const ButtonOutlinedStyle = ({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  border: `${theme.spacing(0.1)} solid ${grey[600]}`,
  borderRadius: theme.spacing(6),
  "&:hover": {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.7)}`,
  },
});

type MuiButtonTheme = {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants["MuiButton"];
};

const palette = {
  primary: {
    main: "#CBA9A0",
  },
  secondary: {
    main: "#40B1B8",
  },
};

const typography = {
  fontFamily: "Inter",
};

const MuiTextField = {
  variants: [
    {
      props: { variant: "standard" },
      style: StandardStyle,
    },
    {
      props: { variant: "filled" },
      style: FilledStyle,
    },
    {
      props: { variant: "outlined" },
      style: OutlinedStyle,
    },
  ],
} as MuiTextFieldTheme;

const MuiButton = {
  variants: [
    {
      props: { variant: "text" },
      style: TextStyle,
    },
    {
      props: { variant: "contained" },
      style: ContainedStyle,
    },
    {
      props: { variant: "outlined" },
      style: ButtonOutlinedStyle,
    },
  ],
} as MuiButtonTheme;

export const theme = createTheme({
  typography,
  palette,
  breakpoints,
  components: {
    MuiTextField,
    MuiButton,
  },
});
