import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory} from 'react-router-dom'
import React, { useState } from "react";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorText: { 
   color: "#FF0000",
   fontSize: 12,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleLogin = (e) => {
     e.preventDefault();
    setError(null);
    setLoading(true);
    //axios.post('http://localhost:3000/login', { username: username, password: password }).then(response => {
    //axios.post('/login', { username: username, password: password }).then(response => {
	  xios.post('http://ec2-18-117-92-0.us-east-2.compute.amazonaws.com:8080/login', {username: username, password: password }).then(response => {	  
    setLoading(false);
    alert("User login successful");
      history.push('/providers'); 
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) {
        setError(error.response.data.message);
       }
      else {
      setError(error.response.data.message);}
    });
  }
  return (
    <Container component="main" maxWidth="xs" mt={10}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h3" variant="h6">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="email"
            autoFocus
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            errorText={error}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} 
			      onChange={(e) => setPassword(e.target.value)}
            errorText={error}
           />
            
          <Typography  className={classes.errorText}>
          {error}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            value={loading ? 'Loading...' : 'Login'} 
            onClick={handleLogin} 
            disabled={loading}
            errorText={error}
            className={classes.submit}
          >
            Sign In
          </Button>
        
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={ () => {
              history.push('/register')
            }} >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}
