import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata"; // Импортируем тип данных

// Описываем тип пропсов для компонента
type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    // rows получаем из пропса data
    const rows: GridRowsProp = data;

    // Настраиваем колонки под структуру tGroup
    const columns: GridColDef[] = [
        { field: 'Группа', headerName: 'Группа', flex: 1 },
        { field: 'Минимальная мощность', headerName: 'Минимальная мощность', flex: 1 },
        { field: 'Максимальная мощность', headerName: 'Максимальная мощность', flex: 1 },
        { field: 'Средняя мощность', headerName: 'Средняя мощность', flex: 1 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                showToolbar={false}
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id} // Важно для уникальности строк
            />
        </Container>
    );
}

export default GroupGrid;