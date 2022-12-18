import { useState } from 'react';
import DivTop from "../../../components/DivTop/DivTop"
import MainContainer from "../../../components/MainContainer/MainContainer"
import Text from "../../../components/Text/Text"
import { Chart } from 'primereact/chart';
import { getDashboard } from '../../../services/user';
import useFetch from '../../../hooks/useFetch';
import { langUpperCased } from '../../../utils/localStorage';
import { useTranslation } from 'react-i18next';

const colors = [
    { backgroundColor: "#42A5F5", hoverBackgroundColor: "#64B5F6" },
    { backgroundColor: "#66BB6A", hoverBackgroundColor: "#81C784" },
    { backgroundColor: "#FFA726", hoverBackgroundColor: "#FFB74D" },
    { backgroundColor: "#FF5733", hoverBackgroundColor: "#FF6747" },
    { backgroundColor: "#FCD02C", hoverBackgroundColor: "#FFD847" },
    { backgroundColor: "#C0FC2C", hoverBackgroundColor: "#C9FC4C" },
    { backgroundColor: "#8BFD52", hoverBackgroundColor: "#73FD2E" },
    { backgroundColor: "#52FD8E", hoverBackgroundColor: "#2FFC76" },
    { backgroundColor: "#57FBCE", hoverBackgroundColor: "#2FFCC4" },
    { backgroundColor: "#57E0FB", hoverBackgroundColor: "#32DDFF" },
    { backgroundColor: "#328CFF", hoverBackgroundColor: "#4F9BFB" },
    { backgroundColor: "#3140FC", hoverBackgroundColor: "#4F5CFB" },
    { backgroundColor: "#8D31FC", hoverBackgroundColor: "#9F51FC" },
    { backgroundColor: "#E751FC", hoverBackgroundColor: "#E22FFB" },
    { backgroundColor: "#FB2FBD", hoverBackgroundColor: "#FB56C9" },
    { backgroundColor: "#F92F6F", hoverBackgroundColor: "#FB568A" },
    { backgroundColor: "#F92F36", hoverBackgroundColor: "#F6585C" },
]

const MyProgress = () => {

    const lang = langUpperCased();
    const [chartData, setChartData] = useState({});
    const { t } = useTranslation();

    const [resp] = useFetch({
		service: () => getDashboard(),
		callNow: true,
		globalLoader: true,
        callback: () => {
            const auxLables = [];
            const auxBackgroundColor = [];
            const auxHoverBackgroundColor = [];
            const auxData = [];
            resp?.muscles?.forEach( (m, index) => {
                auxLables.push(m[`title${lang}`]);
                auxBackgroundColor.push(colors[index].backgroundColor);
                auxHoverBackgroundColor.push(colors[index].hoverBackgroundColor);
                auxData.push(m?.count);
            });

            setChartData({
                labels: auxLables,
                datasets: [
                    {
                        data: auxData,
                        backgroundColor: auxBackgroundColor,
                        hoverBackgroundColor: auxHoverBackgroundColor
                    }
                ]
            })
        }
	});

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });


    return (
        <MainContainer
            navbar
            back
            color={2}
            shadow
            scroll
            bg={1}
            text={t('dashboard.details.index')}
        >
            <DivTop>
                <Text size={5} color={5} className='mb-2' font={2} text={t('dashboard.details.title')} />
                <Text className='mb-5' bold text={t('dashboard.details.trainedZones')} />
                <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '90%' }} />
            </DivTop>
        </MainContainer>
    )
}

export default MyProgress