import MyText from "../content/myText";
import MyTitle from "../content/myTitle";
import CommentsList from "../comments/commentsList";
import { countComments } from "../../functions/countComments";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { modalStore } from "@/store/modalStore";

const MovieReviews = ({comments}:any) => {

    const count = countComments(comments)
    const {t} = useTranslation();
    const openModal = () => {
        modalStore.showReviews();
        modalStore.openModal();
    }

    

    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <MyTitle text={t("Отзывы")} isButton={true} onClick={openModal}/>
                <Box sx={{ ml: 1, mt: '-4px' }}>
                    <MyText text={count} align="left" />
                </Box>
                </Box>
            <Box sx={{mt:'1rem'}}>
                <MyText text={t('О фильме')} align={'left'}/>
            </Box>
            
            <CommentsList showChildComments={false} comments={comments}/>
            
        </>
    )
}

export default MovieReviews;