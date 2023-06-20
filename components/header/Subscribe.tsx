import { Box, Button } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import React from "react";
import Link from "next/link";
import MyText from "../content/myText";
import { useTranslation } from "next-i18next";

const Subscribe = () => {
  
  const { t } = useTranslation();


  return (
    <Box
      sx={{
        margin: "20px auto",
        width: "100%",
      }}
    >
      <Link href="/subscribe">
        <Button
          startIcon={<ElectricBoltIcon sx={{ color: "yellow" }} />}
          sx={{
            width: "100%",
            backgroundImage:
              "url(https://solea-parent.dfs.ivi.ru/picture/bypass/teaserTilePattern_a.svg)",
            backgroundSize: "auto 48px",
            borderRadius: "8px",
            height: "48px",
            textTransform: "capitalize",
          }}
        >
          <MyText
            text={t("Смотреть 30 дней бесплатно")}
            size="16px"
            color="#fff"
          />
        </Button>
      </Link>
    </Box>
  );
};
export default Subscribe;
