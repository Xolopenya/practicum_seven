import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";
import SettingChart from "./SettingChart";
import { LineChart } from '@mui/x-charts/LineChart';

type GroupChartProps = {
    data: tGroup;
};

function GroupChart({ data }: GroupChartProps) {
    const [series, setSeries] = React.useState({
        'Максимальная мощность': true,
        'Средняя мощность': false,
        'Минимальная мощность': false,
    });

    const [isBar, setIsBar] = React.useState(true);

    // считаем сколько рядов активно
    const activeSeriesCount = Object.values(series).filter(Boolean).length;

    // формируем серии для графика
    let seriesY = Object.entries(series)
        .filter(item => item[1] === true)
        .map(item => {
            return {
                dataKey: item[0],
                label: item[0],
                // используем as const чтобы TypeScript понял что это точная строка value
                barLabel: activeSeriesCount === 1 ? ('value' as const) : undefined,
            }
        });

    const chartSetting = {
        yAxis: [
            {
                label: 'Мощность (л.с.)',
                labelStyle: {
                    transform: 'translateX(-10px)'
                }
            }
        ],
        height: 400,
    };

    return (
        <Container maxWidth="lg">
            {isBar ? (
                <BarChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={seriesY}
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            )}
            <SettingChart series={series} setSeries={setSeries} isBar={isBar}
                setIsBar={setIsBar} />
        </Container>
    );
}

export default GroupChart;