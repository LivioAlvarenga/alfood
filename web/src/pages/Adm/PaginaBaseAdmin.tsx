import { AppBar, Box, Button, Link, Paper, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Link as RouterLink, Outlet } from "react-router-dom";

const PaginaBaseAdmin = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Typography variant="h5">Administração</Typography>
            <Box sx={{ display: "flex", flexGrow: 1, gap: 3, alignItems: "center" }}>
              <Link component={RouterLink} to="/admin/restaurantes">
                <Button sx={{ my: 2, color: "white" }}>Restaurantes</Button>
              </Link>
              <Link component={RouterLink} to="/admin/restaurantes/novo">
                <Button sx={{ my: 2, color: "white" }}>Novo Restaurante</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Outlet />
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default PaginaBaseAdmin;
