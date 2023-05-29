import React, { useState } from 'react';
import { Container } from '@mui/material';
import MyInput from '@/components/features/myInput';
import MyText from '@/components/content/myText';
import MyButton from '@/components/buttons/myButton';
import { userStore } from '@/store/userStore';
import { useTranslation } from 'react-i18next';

const profile = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, setLogin] = useState<string>('');

    const Login = (login ,email, password) => {
        console.log(email)
        console.log(password)
        userStore.login(login, email, password)
    }
    const register = (login ,email, password) => {
        userStore.register(login, email, password)
    }

    return (
        <Container maxWidth={false} sx={{ width: '1240px', mb:'1rem' }}>
            <MyText text={t('логин')}/>
            <MyInput setState={setLogin} label={'login'}/>
            <MyInput setState={setEmail} label={'email'}/>
            <MyInput setState={setPassword} label={'password'}/>
           
            <MyButton text={t('Вход')} func={() => Login(login ,email, password)}/>
            <MyButton text={t('Регистрация')} func={() => register(login ,email, password)}/>
        </Container>
    )
}

export default profile
