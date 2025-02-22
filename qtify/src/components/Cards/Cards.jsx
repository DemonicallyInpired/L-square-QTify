import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import { Chip } from "@mui/material";
import { Box } from "@mui/material";
const Cards = ({ title, media, follows }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "var(--mui-palette-primary-dark)",
      }}
    >
      <Box
        sx={{
          borderRadius: "0.5rem",
          backgroundColor: "var(--mui-palette-primary-light)",
        }}
      >
        <CardMedia
          height={300}
          component="img"
          image={media}
          alt="some image"
        />
        <CardActions sx={{ position: "relative" }}>
          <Chip color="secondary" label={follows} />
        </CardActions>
      </Box>
      <CardContent>
        <Typography variant="body1" color="var(--mui-palette-primary-light)">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Cards;
