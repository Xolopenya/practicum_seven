import cars from "../table"; // Импортируем наши данные из table.tsx
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

function BuildingsGrid() {
    const navigate = useNavigate();
    const rows: GridRowsProp = cars; // подключаем массив машин

    const columns: GridColDef[] = [
        { field: 'Марка', headerName: 'Марка', flex: 1, minWidth: 120 },
        { field: 'Модель', headerName: 'Модель', flex: 1.5, minWidth: 150 },
        { field: 'Год', headerName: 'Год', type: 'number', width: 90 },
        { field: 'Страна', headerName: 'Страна', flex: 1, minWidth: 120 },
        { field: 'Тип кузова', headerName: 'Тип кузова', flex: 1, minWidth: 120 },
        { field: 'Двигатель', headerName: 'Двигатель', width: 100 },
        { field: 'Объём (л)', headerName: 'Объём (л)', type: 'number', width: 100 },
        { field: 'Мощность (л.с.)', headerName: 'Мощность (л.с.)', type: 'number', width: 130 },
        { field: '0–100 (с)', headerName: '0–100 (с)', type: 'number', width: 100 },
        { field: 'Трансмиссия', headerName: 'Трансмиссия', width: 110 },
        { field: 'Тираж (шт.)', headerName: 'Тираж (шт.)', type: 'number', width: 110 },
        {
            field: 'Цена, $ (оценка)',
            headerName: 'Цена, $ (оценка)',
            type: 'number',
            width: 150,
            // форматируем цену с запятыми
            valueFormatter: (value: number) => new Intl.NumberFormat('en-US').format(value),
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                showToolbar={true} 
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10 }, 
                    },
                }}
                pageSizeOptions={[10, 25, 50]}
                sx={{
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: 'action.hover',
                        cursor: 'pointer',
                    },
                }}
            />
        </Container>
    );
}

export default BuildingsGrid;