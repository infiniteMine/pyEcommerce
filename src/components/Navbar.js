import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/logo.jpg";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
      backgroundColor: "whitesmoke",
      boxShadow: "none",
  },
  grow: {
      flexGrow: 1,
  },
  button: {
      marginLeft: theme.spacing(2),
  },
  image: {
      height: "3rem",
      marginRight: "10px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const[{basket, user}, dispatch] = useStateValue();
  const history = useHistory()

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={logo} className={classes.image}/>
            </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenido {user ? user.email : ""}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin">
              <Button variant="outlined" onClick = {handleAuth}>
                <strong>{user ? "Sign Out" : "Sign In"}</strong>
              </Button>
            </Link>
            <Link to="/checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCartIcon fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
