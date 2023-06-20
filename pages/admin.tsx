import useRequest from "@/hooks/useRequest";
import { Container, Box } from "@mui/material";
import MyButton from "@/components/controls/buttons/myButton";
import { useState } from "react";

import MyText from "@/components/content/myText";
import MyInput from "@/components/controls/myInput";
import { Movies } from "@/interfaces/movie";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Admin = ({isAdmin}) => {

  if(!isAdmin){
    return(
      <Box sx={{margin:'4rem auto', width:'25rem'}}>
        <MyText  text={'У Вас нет прав для просмотра этой страницы'}/>
      </Box>
    )
  }


  const envUrl = process.env.NEXT_PUBLIC_API_URL;

  const url = `${envUrl}:3003/info?&keywords=`;
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState<Movies | null>(null);

  const result = useRequest(`${url}${keywords}`);

  const submit = () => {
    if (keywords) {
      setData(result);
    }
  };

  return (
    <Container maxWidth={false} sx={{ width: "77.5rem", mb: "1rem" }}>
      <Box sx={{mt:'4rem'}}>
        <MyInput label={"Введите название фильма"} setState={setKeywords} />
        <Box sx={{mt:'2rem'}}>
        <MyButton func={submit} text="Найти" />
        </Box>
      </Box>


      {data?.rows.map((movie) => {
        return (
          <Box key={movie.id}>
            <MyText text={movie.nameRu} />
            <MyText text={movie.nameEn} />
          </Box>
        );
      })}
    </Container>
  );
};

export async function getServerSideProps({locale, req}) {


  const rolesIvi = req.cookies.rolesIvi;
  const isAdmin = rolesIvi ? rolesIvi.includes('ADMIN') : false;

  return {
    props: {
      isAdmin,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}




export default Admin;

