import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { useDispatch } from "react-redux";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Options = ({ id, label, helper, value, setFunc, options }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFunc(event.target.value));
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select labelId={id} value={value} label={label} onChange={handleChange}>
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option}>{capitalizeFirstLetter(option)}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default Options;
