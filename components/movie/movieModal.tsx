import {Button, Modal, Box, Container, Divider, Stack} from '@mui/material';
import { useState } from 'react';
import CommentsList from '../comments/commentsList';
import PersonsList from './moviePersonsList';
import { modalStore } from '@/store/modalStore';
import { observer } from 'mobx-react-lite';
import MyTitle from '../content/myTitle';
import { useTranslation } from 'react-i18next';


const MovieModal = observer(({filmId ,persons, comments }: any) => {
const { t } = useTranslation();


  return (
    <>
      <Modal
        open={modalStore.modalIsOpen}
        onClose={() => modalStore.closeModal()}
        sx={{
          display: 'flex',
          pt:'10rem',
          justifyContent: 'center',
          overflow: 'auto',
        }}
      >
        <Box sx={{ position: 'relative', width: '1200px', m: '0 auto' }}>
          
          <Stack direction="row" alignItems="center">
            <MyTitle text={t('Создатели')} isButton={true} showRedBorder={true} onClick={() => modalStore.showCreators()}/>    
            <MyTitle text={t('Отзывы')} isButton={true} showRedBorder={true} onClick={() => modalStore.showReviews()}/>
            <MyTitle text={t('Трейлеры')} isButton={true} showRedBorder={true} onClick={() => modalStore.showTrailers()}/>
          </Stack>

          <Divider sx={{color:'#fff', width:'100%', height:'1px', borderColor:'rgba(255,255,255,0.12)'}}/>

          <Box>{modalStore.content}</Box>
          <Container maxWidth={false} sx={{ width: '1203px', position: 'absolute' }}>
            {modalStore.content === 'Отзывы' ? (
              <CommentsList /* showChildComments={true} */ filmId={filmId} comments={comments}/>
            ) : null}
            {modalStore.content === 'Создатели' ? <PersonsList persons={persons} /> : null}
          </Container>
        </Box>
      </Modal>
      {modalStore.modalIsOpen && (
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(16, 14, 25, 0.98)',
          }}
        />
      )}
    </>
  );
});

export default MovieModal;