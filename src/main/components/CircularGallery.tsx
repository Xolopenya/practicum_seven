import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CarData } from '../../data';

interface CircularGalleryProps {
    items: CarData[];
}

const GalleryContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
}));

const GalleryItem = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 260,
}));

const CircularImage = styled('img')(({ theme }) => ({
    width: 180,
    height: 180,
    borderRadius: '50%',
    objectFit: 'cover',
    border: `3px solid ${theme.palette.primary.light}`,
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
    }
}));

function CircularGallery({ items }: CircularGalleryProps) {
    return (
        <GalleryContainer
            sx={{
                width: { xs: '100%', md: '85%' },
                mx: 'auto',
                flexDirection: { xs: 'column', md: 'row' },
                columnGap: { md: '100px' },
                alignItems: { xs: 'center', md: 'flex-start' },
            }}
        >
            {items.map((item, index) => (
                <GalleryItem
                    key={index}
                    sx={{
                        width: { xs: '100%', sm: '45%', md: '30%' },
                        mb: { xs: 4, md: 0 },
                    }}
                >
                    <CircularImage src={item.img} alt={item.title} />
                    <Typography variant="subtitle1" component="h3" gutterBottom sx={{ mt: 2 }}>
                        {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ maxWidth: 260 }}>
                        {item.description[0]}{' '}
                        <Box component="span" sx={{ textDecoration: 'underline', color: 'primary.main' }}>
                            ...
                        </Box>
                    </Typography>
                </GalleryItem>
            ))}
        </GalleryContainer>
    );
}

export default CircularGallery;