import { useState } from "react";
import { Button } from "./Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  IconBrandWhatsapp,
  IconMail,
  IconMessageCircle,
  IconCopy,
  IconDownload,
} from "@tabler/icons-react";

// This is a hacky MenuSubheader component for demo purposes.
// It would need to be a custom component to be used in the Menu components.
const MenuSubheader = ({ children }) => {
  return (
    <Box
      sx={{
        height: "28px",
        paddingLeft: "16px",
        paddingRight: "16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "12px", fontWeight: 400, color: "#78716C" }}>
        {children}
      </Typography>
    </Box>
  );
};

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Download & Share
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuSubheader>Share via</MenuSubheader>
        <MenuItem onClick={handleClose}>
          <IconBrandWhatsapp size={20} stroke={1.5} />
          WhatsApp
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconMail size={20} stroke={1.5} />
          Email
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconMessageCircle size={20} stroke={1.5} />
          SMS
        </MenuItem>
        <Divider />
        <MenuSubheader>Copy link</MenuSubheader>
        <MenuItem onClick={handleClose}>
          <IconCopy size={20} stroke={1.5} />
          Copy image link
        </MenuItem>
        <MenuItem disabled onClick={handleClose}>
          <IconCopy size={20} stroke={1.5} />
          Copy image video
        </MenuItem>
        <Divider />
        <MenuSubheader>Download media</MenuSubheader>
        <MenuItem onClick={handleClose}>
          <IconDownload size={20} stroke={1.5} />
          Download image
        </MenuItem>
        <MenuItem disabled onClick={handleClose}>
          <IconDownload size={20} stroke={1.5} />
          Download video
        </MenuItem>
      </Menu>
    </div>
  );
}
