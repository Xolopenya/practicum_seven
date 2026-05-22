import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CarData } from '../../data';

interface ComponentProps {
    car: CarData;
}

function CarCard({ car }: ComponentProps) {
    return (
        <Card sx={{ 
            height: '100%', 
            backgroundColor: 'transparent', 
            border: 'none', 
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    alignItems: 'center',
                    gap: 2,
                    height: '100%',
                }}
            >
                <Box sx={{ width: { xs: '100%', md: '40%' } }}>
                    <CardMedia
                        component="img"
                        alt={car.title}
                        image={car.img}
                        sx={{
                            borderRadius: 1,
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '4/3',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', md: '60%' },
                        textAlign: { xs: 'center', md: 'right' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <CardContent sx={{ p: 0 }}>
                        <Typography variant="h6" component="h3" gutterBottom>
                            {car.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {car.description[0]}
                        </Typography>
                    </CardContent>
                    <Box sx={{ mt: 1 }}>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                float: { xs: 'none', md: 'right' },
                            }}
                        >
                            Подробнее
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}

export default CarCard;