import { makeAutoObservable } from "mobx";
import Cookies from 'js-cookie';
import { changeLanguage } from "i18next";

class TranslationStore {
  translation = changeLanguage("ru");


  constructor() {
    makeAutoObservable(this);
    const storedTranslation = changeLanguage("ru");
    if (storedTranslation) {
      this.translation = storedTranslation;
    }
  }

  setTranslation(status) {
    this.translation = status;
  }
}

export const translationStore = new TranslationStore();

