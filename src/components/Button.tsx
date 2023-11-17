import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

// API: https://mui.com/material-ui/api/button/
// Figma: https://www.figma.com/file/RWnWNT9nWID1Wl6Py56Xai/Clarity-Core?type=design&node-id=2078-7020&mode=design
const RootButton = styled(MuiButton)`
  /* These should potentially be tokens as well — hardcoding them for now */
  text-transform: none;
  font-weight: 500;
  transition-duration: 0ms;

  /* Sizes */
  &.MuiButton-sizeMedium {
    border-radius: var(--clarity-components-button-base-medium-radius);
    padding: var(--clarity-components-button-base-medium-padding-vertical)
      var(--clarity-components-button-base-medium-padding-horizontal);
  }

  /* Primary button */
  &.MuiButton-contained {
    color: var(--clarity-components-button-primary-text-default-color);
    background-color: var(
      --clarity-components-button-primary-background-default-color
    );
  }

  &.MuiButton-contained:hover {
    color: var(--clarity-components-button-primary-text-hover-color);
    background-color: var(
      --clarity-components-button-primary-background-hover-color
    );
  }

  &.MuiButton-contained:active {
    color: var(--clarity-components-button-primary-text-active-color);
    background-color: var(
      --clarity-components-button-primary-background-active-color
    );
  }
`;

// TODO: Type this
export const Button = (props) => {
  return (
    <RootButton
      disableElevation
      disableFocusRipple
      disableTouchRipple
      {...props}
    />
  );
};
