import useRequest from "@/hooks/useRequest";
import { Box, Stack } from "@mui/material";
import MyList from "../../content/myList";
import Hr from "../../content/hr";
import DropdownSlider from "../../navbar/DropdownSlider";
import DropdownSliderToRight from "../../navbar/DropdownSliderToRight";
import { useTranslation } from 'react-i18next';


const FilmsDropDownContent = () => {
    const genresUrl = 'http://localhost:3001/movies/filters/genres';
    const countriesUrl = 'http://localhost:3001/movies/filters/countries';
    const { t } = useTranslation();

    const genres:any = useRequest(genresUrl);
    const countries:any = useRequest(countriesUrl);
    const features = [
        {nameRu: `${t("Подборки")}`},
        {nameRu:`${t("Рейтинг")}`},
        {nameRu: `${t("Трейлеры")}`},
        {nameRu:`${t("Что посмотреть")}`},
        {nameRu:`${t("Фильмы в HD")}`},
        {nameRu:`${t("Выбор ИВИ")}`},
        {nameRu:`${t("Новинки подписки")}`},
]

    const generateContent = (data) => {
        return data?.map((e) => ({
        link: `/movies/${t(e.nameRu)}`,
        content: `${t(e.nameRu)}`,
        }));
       }
       
    const genresContent = generateContent(genres);
    const countriesContent = generateContent(countries);
    const featuresContent = generateContent(features);

    console.log(genresContent)
    return(
        <Box sx={{p:'0 1rem'}}>
            <Box sx={{mt:'0.1rem'}}>
                <Hr/>
            </Box>

            <Stack direction='row' justifyContent='space-between' sx={{mt:'1rem'}}>
                <Box>
                    <MyList title={t("Жанры")} content={genresContent} itemsPerColumn={8}/>
                </Box>
                <Box>
                    <MyList title={t("Страны")} content={countriesContent} itemsPerColumn={8} />
                </Box>
                <Box>
                    <MyList title={t("Новинки")} content={featuresContent} itemsPerColumn={8}/>
                </Box>
                <Box>
                    <DropdownSlider/>
                    <DropdownSliderToRight/>
                    <DropdownSlider/>    
                </Box>
            </Stack>
        </Box> 
    )
}

export default FilmsDropDownContent;