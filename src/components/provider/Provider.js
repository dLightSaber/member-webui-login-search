import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
*/
export default function Provider(props) {
  //const classes = useStyles();
  const provider = props.provider;
  console.log(" provider prop >>> " + JSON.stringify(provider));
  return (
    <div style={{ width: "100%", paddingBottom: 40 }}>
      <p>
        {[
          provider.firstname,
          provider.middlename ? provider.middlename : null,
          provider.lastname ? provider.lastname : null,
        ].join(" ")}
      </p>
      <p>{provider.speciality}</p>
      <p>{provider.address_line1}</p>
      <p>{provider.address_line2}</p>
      <p>{provider.city}</p>
      <p>{provider.state}</p>
      <p>{provider.phonenumber}</p>
    </div>
  );
}
