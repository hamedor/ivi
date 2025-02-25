import MyText from "./myText";
import { observer } from "mobx-react-lite";
import { TextProps } from "../../interfaces/textProps";
import ShowMoreText from "../features/showMoreText";
import { useContext } from "react";
import { TranslationStoreContext } from "../../pages/_app";

interface TranslationDynamicDataProps extends TextProps {
  nameRu: string;
  nameEn: string;
  shouldCut?: boolean;
}

const TranslationDynamicData = observer(
  ({
    nameRu,
    nameEn,
    align = "center",
    color = "rgba(255,255,255,.48)",
    weight = 400,
    size = "16px",
    line = "1.25rem",
    shouldCut = false,
  }: TranslationDynamicDataProps) => {
    const translationStore = useContext(TranslationStoreContext);

    if (!translationStore) {
      return null;
    }
    const displayName =
      translationStore.currentLanguage === "en" && nameEn ? nameEn : nameRu;

    return (
      <>
        {shouldCut ? (
          <ShowMoreText text={displayName} length={14} color={color} />
        ) : (
          <MyText
            text={displayName}
            align={align}
            color={color}
            weight={weight}
            size={size}
            line={line}
          />
        )}
      </>
    );
  }
);

export default TranslationDynamicData;
