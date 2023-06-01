import { Box, Stack, Button} from "@mui/material";
import Link from "next/link";

import Image from "next/image";
import MyText from "../content/myText";
import FilmModal from "./movieModal";
import MyTitle from "../content/myTitle";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { modalStore } from "@/store/modalStore";

const FilmPersons = observer(({persons}:any) => {

    const openModal = () => {
        modalStore.showCreators()
        modalStore.openModal();
    }
    const {t} = useTranslation();
    return (
        <Box>
            <MyTitle text={t("Актёры и создатели")} isButton={true} onClick={openModal}/>
            <Stack direction='row' justifyContent='space-between' sx={{mt:'2rem', mb:'2rem'}}>
            {persons?.slice(0, 10).map((person:any) => {
                return(
                    <Box key={person.id} sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                        <Link
                            href={{
                            pathname: `/personPage/${person.id}`,
                            query: {
                            id:person.id,
                            },
                            }}>
                            <Box sx={{width:'88px', height:'88px', borderRadius:'50%', overflow:'hidden' ,display:'flex', alignItems:'center'}}>
                                <Image 
                                    className="coverImage"
                                    width={88}
                                    height={88}
                                    alt="фото актера"
                                    src={person.posterUrl}
                                    >
                                    </Image>
                            </Box>
                            <Box sx={{width:'77px'}}>
                                <MyText  text={person.nameRu} align="left" color='rgba(255,255,255,0.89)'/>
                            </Box>
                        </Link>
                    </Box>
            )
        })}
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Button sx={{width:'88px', height:'88px', borderRadius:'50%', backgroundColor:'#1f1b2e', color:'#fff', textTransform:'uppercase'}} onClick={openModal}>Еще</Button>
        </Box>

        
   
        </Stack>

        </Box>
    );
});

export default FilmPersons;