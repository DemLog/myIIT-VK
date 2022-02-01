import logo from "../image/logo.png";
import {Box, Button, IconButton, InputAdornment, Link, TextField, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";

export const Login = (props) => {
    const showAlert = props.showAlert;

    const [inputData, changeInputData] = useState({
        'login': '',
        'password': '',
        'showPassword': false
    });
    const [errInput, setErrInput] = useState({
        'login': false,
        'password': false,
    });
    const [errMessage, setErrMessage] = useState({
        'login': '',
        'password': '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (errInput[name]) {
            setErrInput(prevState => ({
                ...prevState,
                [name]: false
            }));
            setErrMessage(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
        changeInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleClickShowPassword = () => {
        changeInputData(prevState => ({
            ...prevState,
            showPassword: !inputData.showPassword
        }));
    };
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        showAlert("Пока что не подключена библиотека", "warning");
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20%'}}>
            <img src={logo} style={{maxWidth: "60%"}} alt="Logo myIIT"/>
            <Typography component="h1" variant="h5">
                Авторизация
            </Typography>
            <Box component="form" noValidate sx={{mt: 1}}>
                <TextField margin="normal" fullWidth label="Логин Moodle" name="login" value={inputData.login}
                           onChange={handleChange} error={errInput.login} helperText={errMessage.login}
                           autoFocus/>
                <TextField margin="normal" fullWidth label="Пароль" name="password" value={inputData.password}
                           onChange={handleChange} error={errInput.password} helperText={errMessage.password}
                           type={inputData.showPassword ? 'text' : 'password'}
                           InputProps={{
                               endAdornment:
                                   <InputAdornment position="end">
                                       <IconButton aria-label="toggle password visibility"
                                                   onClick={handleClickShowPassword}
                                                   onMouseDown={handleMouseDownPassword}>{inputData.showPassword ?
                                           <VisibilityOff/> : <Visibility/>}
                                       </IconButton>
                                   </InputAdornment>
                           }}
                />
                <Button fullWidth variant="contained" onClick={handleSubmit} sx={{mt: 2, mb: 4, p: 1}}>
                    Войти
                </Button>
            </Box>
            <Link href="#" underline="none">Сбросить пароль</Link>
        </Box>
    );
};

export default Login;