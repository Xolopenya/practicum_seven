import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from '../../data';
import CarCard from './CarCard';
import ArticleCard from './ArticleCard';

const cardData = structures.slice(6);

const cardsWithImage = [0, 2, 4]; 

function CarsContent() {
    return (
        <Container maxWidth="xl" sx={{ mb: 6 }}>
            <Grid container spacing={{ xs: 3, md: 4 }}>
                {cardData.map((item, index) => {
                    const hasImage = cardsWithImage.includes(index);
                    
                    return (
                        <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.id}>
                            {hasImage ? (
                                <CarCard car={item} />
                            ) : (
                                <ArticleCard car={item} />
                            )}
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}

export default CarsContent;