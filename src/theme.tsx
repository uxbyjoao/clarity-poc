import { createTheme } from "@mui/material/styles";

// import * as tokens from "./tokens";
import * as tokens from "./tokens.json";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    // Disable ripple globally
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },

    // TODO: Button component
    MuiButton: {},

    // Menu component
    MuiMenu: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        paper: {
          backgroundColor: tokens.base.color.neutral.white,
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: tokens.base.color.neutral["200"],
          borderRadius: tokens.base.radius["2"],
        },
        list: {
          padding: `${tokens.base.spacing["2"]} 0`,
        },
      },
    },

    // MenuItem component
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: `0 ${tokens.base.spacing["2"]}`,
          paddingLeft: tokens.base.spacing["4"],
          paddingRight: tokens.base.spacing["4"],
          height: "36px",
          borderRadius: tokens.base.radius["1"],
          fontSize: "12px",
          fontWeight: "500",
          color: tokens.base.color.neutral["950"],
          gap: tokens.base.spacing["3"],
          ":hover": {
            backgroundColor: tokens.base.color.neutral["100"],
          },
        },
      },
    },

    // Divider component
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.base.color.neutral["100"],
        },
      },
    },
  },
});

export default theme;
