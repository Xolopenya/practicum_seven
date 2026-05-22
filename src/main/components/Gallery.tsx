import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import structures from "../../data";
import { Link } from 'react-router-dom';

const imgData = structures.slice(0, 3);

const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    cursor: 'pointer',
  }
}));

function Gallery() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
        gridTemplateRows: { xs: 'auto', md: 'repeat(2, 220px)' },
        gap: 2,
        width: { xs: '90%', md: '85%' },
        mx: 'auto',
        my: 3,
      }}
    >
      <Box sx={{ gridRow: { xs: 'auto', md: '1 / 3' } }}>
        <Link to={`/building/${imgData[0].id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
          <StyledImg src={imgData[0].img} alt={imgData[0].title} />
        </Link>
      </Box>
      
      <Link to={`/building/${imgData[1].id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <StyledImg src={imgData[1].img} alt={imgData[1].title} />
      </Link>
      
      <Link to={`/building/${imgData[2].id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <StyledImg src={imgData[2].img} alt={imgData[2].title} />
      </Link>
    </Box>
  );
}

export default Gallery;