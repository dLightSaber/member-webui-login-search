import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import PaginationControl from "../PaginationControl";
import Provider from "./Provider";
import { searchProvider } from "../../store/features/provider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Providers(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const { providerWrapper } = useSelector((state) => state.provider);
  const dispatch = useDispatch();
  const handlePageChange = (event, value) => {
    setPage(value);
    dispatch(
      searchProvider({
        city: props.city,
        speciality: props.speciality,
        lastName: props.lastName,
        page: page,
        limit: 2,
      })
    );
  };

  return (
    <>
      {providerWrapper.providers && (
        <>
          <div
            style={{ width: "100%", marginBottom: 20 }}
            className={classes.root}
          >
            {providerWrapper.providers.map((provider) => (
              <Provider key={provider.id} provider={provider} />
            ))}
          </div>

          <div style={{ width: "100%", marginBottom: 20 }}>
            <PaginationControl
              page={page}
              totalPages={providerWrapper.totalPages}
              handlePageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </>
  );
}
