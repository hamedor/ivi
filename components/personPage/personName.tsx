import React, { Component } from "react";
import style from "../../styles/Person.module.css"
import response from "./Response";
import ItemFilm from "./personFilm";
import {useTranslation} from 'react-i18next';
import "../translate/i18next"


const Person  = () => {
    const { t } = useTranslation();
    let per = response.person.nameRu;
    if(`${t('Фильмы')}` === 'Фильмы'){
        per = response.person.nameRu;
    } else {
        per = response.person.nameEn
    }
        return (
            <div className={style.personpage}>
                <div className={style.personpage__conteiner}>
                    <img src={response.person.posterUrl} className={style.personpage__img}/>
                    <h1 className={style.personpage__name}>{per}</h1>
                    <h2>{t('Фильмы')}: </h2>
                    <ItemFilm />
                </div>
            </div>
    )
    }
    








export default Person;