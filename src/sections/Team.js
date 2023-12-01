import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTeamMember, clearTeamMembers } from "../slicers/search";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TeamCard = ({ user }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeTeamMember(user));
  };

  return (
    <div
      onClick={removeHandler}
      className={`teamcard ${user.available ? "true" : "false"}`}
    >
      <img className="circle" src={user.avatar} alt="avatar" />
      <div className="details">
        <div className="name">
          {user.first_name} {user.last_name}
        </div>
        <div className="domain">{user.domain}</div>
      </div>
    </div>
  );
};
const MemberCard = ({ user }) => {
  return (
    <div className={`teamcard`}>
      <img className="circle" src={user.avatar} alt="avatar" />
      <div className="details">
        <div className="name">
          {user.first_name} {user.last_name}
        </div>
        <div className="domain">{user.domain}</div>
        <div className="email">{user.email}</div>
      </div>
    </div>
  );
};

const Team = () => {
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(clearTeamMembers());
  };

  const createTeam = async () => {
    const team = selectedUser.map((user) => {
      return user.id;
    });

    console.log(team);

    const res = await fetch("https://heliverse-pycj.onrender.com/api/team/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ members: team }),
    });
    const data = await res.json();
    if (data.success === true) {
      setMembers(data.savedTeam.members);
      handleClickOpen();
    }
    if (data.success === false) {
      alert(data.message);
      dispatch(clearTeamMembers());
    }
  };

  return (
    <>
      <div className="team">
        <div className="team_inner">
          <div className="team_members">
            {selectedUser.map((user) => {
              return <TeamCard user={user} key={user.id} />;
            })}
          </div>
          <div className="go" onClick={createTeam}>
            <ControlPointRoundedIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Team Created"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Your team has been created successfully.
          </DialogContentText>
          <div className="team_members">
            {members.map((user) => {
              return <MemberCard user={user} key={user.id} />;
            })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Team;
