import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";
import GroupChart from "./components/GroupChart"
import { years, countries, brands } from "./groupdata";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';

type tSelect = "Страна" | "Год" | "Марка";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Страна");
    const [groupData, setGroupData] = React.useState(countries); // состояние для данных

    const handleChange = (event: SelectChangeEvent) => {
        setGroup(event.target.value as tSelect);
        if (event.target.value === "Страна") {
            setGroupData(countries);
        } else if (event.target.value === "Год") {
            setGroupData(years);
        } else if (event.target.value === "Марка") {
            setGroupData(brands);
        }
    };

    return (
        <div>
            <Navbar active="3" />

            <Box sx={{ width: "200px", m: "20px auto" }}>
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={group}
                        label="Группировать по"
                        onChange={handleChange}
                    >
                        <MenuItem value="Страна"> Стране </MenuItem>
                        <MenuItem value="Год"> Году </MenuItem>
                        <MenuItem value="Марка"> Марке </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <GroupChart data={groupData} /> 
            <GroupGrid data={groupData} />
        </div>
    );
}

export default Chart;