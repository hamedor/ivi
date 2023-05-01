import React, { Component } from "react";
import response from "./Response";
import { AiFillStar } from "react-icons/ai";
import style from "../../styles/Person.module.css";
import {useTranslation} from 'react-i18next';
import "../translate/i18next"


const ItemFilm = () => {
    let res = response.movies.concat();
    const { t } = useTranslation();
    function lang(el){
        if(`${t('год')}` === 'год'){
            return <h2>{el.nameRu}</h2>
        } else {
            return <h2>{el.nameEn}</h2>
        }
    }
    return (
    <div className={style.itemfilms}>
    {res.map(el => 
    <div className={style.itemfilms__block}>
        <img src={el.posterUrl}  />
        <div className={style.itemfilms__content}>
            <div>{lang(el)}</div>
            <p>{el.year} {t('год')}</p>
            <p>{t('Рейтинг')}: {el.ratingKinopoisk}<AiFillStar className={style.itemfilms__star}/></p>
            <p>{t('Просмотры')}: {el.ratingKinopoiskVoteCount}</p>
        </div>
    </div> )}
    </div>
    )
}

export default ItemFilm;