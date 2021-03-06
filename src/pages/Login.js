import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import axios from 'axios';
import qs from 'qs';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import logo from '../logo.png';
import theme from '../styles/Theme';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    maxWidth: 250,
    marginBottom: theme.spacing(4)
  },
}));

export default function SignIn(initialState) {
  const [username, setUsername] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const classes = useStyles();
  const history = useHistory();


  const submit = e => {
    e.preventDefault();
    const url = process.env.REACT_APP_TOKEN_URL;
    const data = { 'username': username, 'password': password };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url,
    };
    axios(options).then(res => {
      localStorage.setItem('jwt', res.data.access);
      history.push('/');
    });
  }


  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.logo} src={logo}></img>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} onSubmit={e => submit(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de Usuario"
              name="Nombre de Usuario"
              autoComplete="username"
              onChange={e => setUsername(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              color="primary">
              Ingresar
            </Button>
          </form>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}