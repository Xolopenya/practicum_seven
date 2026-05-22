import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import structures from "../data"; 
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Building() {
  const { id } = useParams();
  // ищем элемент в массиве structures 
  const itemId = id ? parseInt(id, 10) : 1;
  const item = structures.find(c => c.id === itemId) || structures[0];

  return (
    <div>
      <Navbar active="1" /> 
      <Container maxWidth="xl" sx={{ mt: "20px", mb: "40px" }}>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: "20px" }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
            ГЛАВНАЯ
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 500 }}>
            {item.title}
          </Typography>
        </Breadcrumbs>

        <Box sx={{ textAlign: "center", mb: "40px" }}>
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "60%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "40px"
          }}
        >
          <Box sx={{ flex: 1 }}>
            {item.description[0] && (
              <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6", mb: 2 }}>
                {item.description[0]}
              </Typography>
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            {item.description[1] ? (
              <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: "1.6" }}>
                {item.description[1]}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Дополнительная информация будет доступна скоро...
              </Typography>
            )}
          </Box>
        </Box>

      </Container>
    </div>
  );
}

export default Building;