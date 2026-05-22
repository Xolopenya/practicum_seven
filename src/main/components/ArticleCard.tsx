import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CarData } from '../../data';

interface ComponentProps {
    car: CarData;
}

function ArticleCard({ car }: ComponentProps) {
    return (
        <Card sx={{ 
            height: '100%', 
            backgroundColor: 'transparent', 
            border: 'none', 
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ textAlign: 'center', mb: 2 }}
                >
                    {car.title}
                </Typography>
                
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                        textAlign: 'left',
                        mb: 2,
                        flexGrow: 1,
                    }}
                >
                    {car.description[0]}
                </Typography>
                
                <Button
                    variant="contained"
                    size="small"
                    sx={{ alignSelf: { xs: 'center', md: 'flex-end' } }}
                >
                    Подробнее
                </Button>
            </CardContent>
        </Card>
    );
}

export default ArticleCard;