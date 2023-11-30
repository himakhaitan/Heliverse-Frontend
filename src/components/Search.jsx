import React from "react";
import { TextField } from "@mui/material";
import { updateName } from "../slicers/search";
import { useDispatch, useSelector } from "react-redux";

const Search = ({ label }) => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="outlined-controlled"
      label={label}
      fullWidth={true}
      value={useSelector((state) => state.users.name)}
      onChange={(event) => {
        dispatch(updateName(event.target.value));
      }}
    />
  );
};

export default Search;
