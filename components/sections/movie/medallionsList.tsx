import { Stack, Box } from "@mui/material";
import Medallion from "./medallion";
import { Person } from "../../../interfaces/persons";
import MyText from "../../content/myText";
import Link from "next/link";

interface MedallionListProps {
  persons: Person[];
  rating: number;
}

const MedallionList = ({ persons, rating }: MedallionListProps) => {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "center", mt: "2rem",
      "@media (max-width:875px)": {
        width:'450px',
        justifyContent:'space-between',
        mt:'32px'
      },
      "@media (max-width:450px)": {
        width:'100%',
        justifyContent:'space-between',
       
      }  }}
      spacing={2}
    >
      <Box sx={{
        height: "56px",
        width: "56px",
        "@media (max-width:875px)": {
          width:"86px",
          height:"86px"
        },
        "@media (max-width:450px)": {
          width: "60px",
          height: "50px",
        }
       }}>
        <Medallion rating={rating} />
      </Box>

      {persons
        ?.filter((e) => e.roles.some((el) => el.nameRu.includes("Актеры")))
        .slice(0, 4)
        .map((e) => {
          return (
            <Link
              key={e.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "unset",
              }}
              href={`/person/${e.id}`}
            >
              <Box sx={{ 
                height: "56px",
                width: "56px",
                "@media (max-width:875px)": {
                  width:"86px",
                  height:"86px"
                },
                "@media (max-width:450px)": {
                  width: "66px",
                  height: "50px",
                }
              
            }}>
                <Medallion image={e.posterUrl} />
              </Box>
              <Box sx={{ width: "77px" }}>
                <MyText text={e.nameRu} align="center" size="16px" line="20px"/>
              </Box>
            </Link>
          );
        })}
    </Stack>
  );
};

export default MedallionList;
