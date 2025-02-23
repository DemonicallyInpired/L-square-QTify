import { Grid } from "@mui/material";
import Cards from "../Cards/Cards";
import SwiperCards from "../SwiperCards/SwiperCards";
import MusicTabs from "../CustomPannels/Tabs";
export default function CardGrid({ cards, expand, isSong }) {
  return expand ? (
    <Grid container spacing={2}>
      {cards.map(({ title, image, follows, id, likes }) => {
        return (
          <Grid item xs={12} sm={6} md={3} lg={2.2} xl={1.6} key={id}>
            <Cards
              title={title}
              media={image}
              isSong={isSong}
              follows={follows}
              likes={isSong ? likes : null}
            />
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <>
      {isSong ? (
        <MusicTabs cards={cards} />
      ) : (
        <SwiperCards isSong={isSong} cards={cards} />
      )}
    </>
  );
}
