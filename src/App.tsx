import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button as DefaultButton } from "@mui/material";

import { Button } from "./components/Button";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Clarity Core Playground
        </Typography>
        <div>
          <DefaultButton variant="contained">Default Button</DefaultButton>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Button variant="contained">Clarity button</Button>
        </div>
      </Box>
    </Container>
  );
}
