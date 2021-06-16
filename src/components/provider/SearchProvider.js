import React, { useState, useEffect } from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import {
  getProviderCities,
  searchProvider,
} from "../../store/features/provider";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function SearchProvider() {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [lastName, setLastName] = useState("");
  const [speciality, setSpeciality] = useState("");

  const [cityChange, setCityChange] = React.useState("");
  const [specialityChange, setSpecialityChange] = React.useState("");
  const [lastNameChange, setLastNameChange] = React.useState("");

  const { cities, specialities, providersOption } = useSelector(
    (state) => state.provider
  );

  const handleOptionChange = (type, newValue) => {
    if (type === "speciality" && specialityChange !== newValue) {
      console.log(" selected city >> " + city + " >>> speciality " + newValue);
      setSpecialityChange(newValue);
    } else if (type === "city" && cityChange !== newValue) {
      setCityChange(newValue);
    } else if (type === "lastName" && lastNameChange !== newValue) {
      setLastNameChange(newValue);
    }
  };

  const handleChange = (name, value) => {

    if (name === "city") {
      setSpeciality("");
      setLastName("");
      setCity(value);
    } else if (name === "speciality") {
      setSpeciality(value);
      setLastName("");
    } else {
      setLastName(value);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cities || cities.length === 0) {
      dispatch(getProviderCities());
    }
  }, [dispatch, cities]);
  return (
    <div style={{ width: "100%" }}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        display="flex"
        alignitems="flex-end"
      >
        <FormControl>
          <Autocomplete
            value={city}
            onChange={(event, newValue) => {
              handleChange("city", newValue);
            }}
            onInputChange={(event, newInputValue) => {
              handleOptionChange("city", newInputValue);
            }}
            options={cities}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="City"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Autocomplete
            value={speciality}
            onChange={(event, newValue) => {
              handleChange("speciality", newValue);
            }}
            onInputChange={(event, newInputValue) => {
              handleOptionChange("speciality", newInputValue);
            }}
            options={specialities}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Speciality"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </FormControl>

        <FormControl>
          <Autocomplete
            value={lastName}
            onChange={(event, newValue) => {
              handleChange("lastName", newValue);
            }}
            onInputChange={(event, newInputValue) => {
              handleOptionChange("lastName", newInputValue);
            }}
            options={providersOption}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Last Name"
                margin="normal"
                variant="outlined"
              />
            )}
          />
        </FormControl>
        <FormControl>
          <div style={{ marginTop: 14, marginBottom: 8 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                dispatch(
                  searchProvider({
                    city: city,
                    speciality: speciality,
                    lastName: lastName,
                    page: 0,
                    limit: 2,
                  })
                );
              }}
            >
              Search
            </Button>
          </div>
        </FormControl>
      </form>
    </div>
  );
}
// disabled={!city && !speciality && !lastName}
