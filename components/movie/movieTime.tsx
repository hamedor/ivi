import { Typography } from '@mui/material';
import MyText from '../content/myText';
import { useTranslation } from 'react-i18next';


interface FilmTimeProps {
  minutes: number;
}

const MovieTime = ({ minutes }:FilmTimeProps) => {

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const {t} = useTranslation();

  return (
    <MyText text={`${hours} ${t('ч')}. ${remainingMinutes} ${t('мин')}.`} align={'center'} color="rgba(255,255,255,.72)"/>
  );
};

export default MovieTime;