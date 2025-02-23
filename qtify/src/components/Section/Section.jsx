import { Box, Typography, Collapse, Divider } from "@mui/material";
import axios from "axios";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";

import CardGrid from "../CardGrids/CardGrids.jsx";
const Section = ({ section, isSong }) => {
  const [cards, setCards] = useState([]);
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    try {
      const fetchData = async () => {
        let URI = `https://qtify-backend-labs.crio.do/`;
        if (isSong) {
          URI = URI.concat("songs");
        } else {
          URI = URI.concat(`/albums/${section}`);
        }
        const response = await axios.get(URI);
        if (response && response.status) {
          const data = response.data;
          setCards(() => data);
        }
      };
      fetchData();
    } catch (err) {
      console.error(err.stack);
    }
  }, []);
  const handleExpand = () => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <>
      <Box padding={"2rem"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textTransform: "capitalize", marginBottom: "1rem" }}
            color="primary.light"
          >
            {section}
          </Typography>
          {!isSong ? (
            <Typography
              variant="h6"
              color="primary"
              onClick={handleExpand}
              sx={{
                cursor: "pointer",
              }}
            >
              {expand ? (
                <Button
                  variant="text"
                  size="small"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  Collapse
                </Button>
              ) : (
                <Button
                  variant="text"
                  size="small"
                  textTransform="capitalize"
                  fontWeight="bold"
                >
                  Show All
                </Button>
              )}
            </Typography>
          ) : null}
        </Box>
        {!isSong ? (
          <Collapse in={expand} collapsedSize="400px">
            <Box sx={{ overflow: "hidden" }}>
              <CardGrid cards={cards} expand={expand} isSong={false} />
            </Box>
          </Collapse>
        ) : (
          <Box>
            <CardGrid isSong={true} cards={cards} />
          </Box>
        )}
      </Box>

      <Divider sx={{ backgroundColor: "primary.main" }} />
    </>
  );
};
export default Section;
