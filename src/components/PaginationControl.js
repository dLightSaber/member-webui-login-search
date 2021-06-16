import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControl(props) {
  const classes = useStyles();
  const { page, totalPages, handleChange } = props;
  return (
    <div style={{ width: "100%", marginBottom: 20 }} className={classes.root}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        boundaryCount={2}
      />
    </div>
  );
}
