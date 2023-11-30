import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const UserCard = ({
  id,
  first_name,
  last_name,
  email,
  domain,
  available,
  avatar,
  gender,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={avatar}
          alt={first_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalizeFirstLetter(first_name) +
              " " +
              capitalizeFirstLetter(last_name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email: </strong> {email}
            <br />
            <strong>Gender: </strong> {gender}
            <br />
            <strong>Domain: </strong> {domain}
            <br />
            <strong>Available: </strong> {available ? "Yes" : "No"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
