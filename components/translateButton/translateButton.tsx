import React from "react";
import { useTranslation } from "react-i18next";
import style from '../../../Kinoman-Website/styles/Person.module.css'

const TranslateButton = () => {
const { t, i18n } = useTranslation();
const changeLanguage = (lang) => {
i18n.changeLanguage(lang);
}
    return (
        <>
            <button onClick={() => changeLanguage("ru")} className={style.translateButton}>RU</button>
            <button onClick={() => changeLanguage("en")} className={style.translateButton}>EN</button>
        </>
    )
}

export default TranslateButton;