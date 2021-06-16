import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  gutter: {
    paddingLeft: 12,
    paddingRight: 10,
  },
}));
export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateAnchorEl = (status) => {
    setAnchorEl(status);
  };

 
 return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.gutter}>
          <Typography variant="h6" className={classes.title}>
           ACME Member Portal
          </Typography>
          <UserProfile />
          {isMobile && (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Navigation  anchorEl={anchorEl} onMenuChange={updateAnchorEl} />
            </div>
          )}
          
        </Toolbar>
      </AppBar>
      {!isMobile && (
       <Navigation className={classes.root} anchorEl={anchorEl} onMenuChange={updateAnchorEl} />
      )}
   
    </div>
  );
}
