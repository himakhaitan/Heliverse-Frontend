import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import {addTeamMember} from "../slicers/search";

const UserCard = ({user}) => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(addTeamMember(user));
  };
  return (
    <Card key={user.id} sx={{ maxWidth: 345 }} onClick={handler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user.avatar}
          alt={user.first_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.first_name + " " + user.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email: </strong> {user.email}
            <br />
            <strong>Gender: </strong> {user.gender}
            <br />
            <strong>Domain: </strong> {user.domain}
            <br />
            <strong>Available: </strong> {user.available ? "Yes" : "No"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
