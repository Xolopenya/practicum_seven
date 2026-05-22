import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
    return (
        // обертка футера
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: 'primary.dark',    
                color: 'white',        
                py: 3, // Вертикальные отступы 
            }}
        >
            <Container maxWidth="lg">
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>

                    <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                        Топ Раритетных автомобилей
                    </Typography>
                    
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Николенко А.К. Б9123-09.03.04(1)
                    </Typography>
                    
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;