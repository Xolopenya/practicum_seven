import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

type tSeries = {
    'Максимальная мощность': boolean,
    'Средняя мощность': boolean,
    'Минимальная мощность': boolean,
}

type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
    isBar: boolean;
    setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    };

    const handleChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar((event.target as HTMLInputElement).checked);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 4,
                m: "20px 0"
            }}
        >
            <FormControl>
                <FormLabel>Тип диаграммы:</FormLabel>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>

                    
                    <Typography
                        variant="body2"
                        color={!isBar ? 'primary' : 'text.secondary'}
                        sx={{ fontWeight: !isBar ? 'bold' : 'normal' }}
                    >
                        Линейная
                    </Typography>

                   
                    <Switch
                        checked={isBar}
                        onChange={handleChartTypeChange}
                        color="primary"
                    />

                    <Typography
                        variant="body2"
                        color={isBar ? 'primary' : 'text.secondary'}
                        sx={{ fontWeight: isBar ? 'bold' : 'normal' }}
                    >
                        Гистограмма
                    </Typography>

                </Box>
            </FormControl>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
            <Divider orientation="horizontal" flexItem sx={{ display: { xs: 'block', sm: 'none' }, width: '100%', my: 2 }} />

            <FormControl>
                <FormLabel id="label-checkbox-group">
                    На диаграмме показать:
                </FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series["Максимальная мощность"]}
                            onChange={handleChange}
                            name="Максимальная мощность"
                        />
                    }
                    label="максимальную мощность"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series["Средняя мощность"]}
                            onChange={handleChange}
                            name="Средняя мощность"
                        />
                    }
                    label="среднюю мощность"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={series["Минимальная мощность"]}
                            onChange={handleChange}
                            name="Минимальная мощность"
                        />
                    }
                    label="минимальную мощность"
                />
            </FormControl>
        </Box>
    )
}

export default SettingChart;