import { Grid, Box, Typography, Collapse, Divider } from "@mui/material";
import axios from "axios";
import Cards from "../Cards/Cards.jsx";
import Button from "../Button/Button.jsx";
import { useEffect, useState } from "react";
const Section = ({ section }) => {
  const [cards, setCards] = useState([]);
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/${section}`,
        );
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
          sx={{ textTransform: "capitalize" }}
          color="primary.light"
        >
          {section}
        </Typography>
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
      </Box>
      <Collapse in={expand} collapsedSize="400px">
        <Box sx={{ overflow: "hidden" }}>
          <Grid container spacing={2}>
            {cards.map(({ title, image, follows, id }) => (
              <Grid item xs={12} sm={6} md={3} lg={2.2} xl={1.6} key={id}>
                <Cards title={title} media={image} follows={follows} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Collapse>
      <Divider sx={{ backgroundColor: "primary.main" }} />
    </Box>
  );
};
export default Section;
