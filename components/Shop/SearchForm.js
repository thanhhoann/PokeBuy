import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import data from "../../pokemonsDB/names";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30vw",
    },
  },
}));

export default function SearchForm(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  console.log(value);
  props.onShowPokemonByName(value);

  return (
    <Autocomplete
      className="form"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={data.names}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Pokemon's name" variant="outlined" />
      )}
    />
  );
}
