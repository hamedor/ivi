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
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
        </>
    )
}

export default TranslateButton;