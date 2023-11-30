import React from "react";
import {TextField} from "@mui/material";

const Search = ({value, func, label}) => {
  return (
    <TextField
      id="outlined-controlled"
      label={label}
      fullWidth={true}
      value={value}
      onChange={(event) => {
        func(event.target.value);
      }}
    />
  );
};

export default Search;
