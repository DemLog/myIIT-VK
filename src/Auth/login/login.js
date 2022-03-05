import {useEffect, useState} from "react";
import {AuthUser, User} from "myiit-api-lib";

import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import logo from "../image/logo.png";

import {observer} from "mobx-react-lite";
import storeUser from "../../Store/storeUser";
import storeView from "../../Store/storeView";

const Login = observer((props) => {

    const showAlert = props.showAlert;
    const vkURL = window.location.search;

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
    const displayErrorInput = (name, msg, status = true) => {
        setErrInput(prevState => ({
            ...prevState,
            [name]: status
        }));
        setErrMessage(prevState => ({
            ...prevState,
            [name]: msg
        }));
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        if (errInput[name])
            displayErrorInput(name, '', false)

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
        if (!inputData.login)
            return displayErrorInput('login', 'Вы не ввели в поле логин!');
        if (!inputData.password)
            return displayErrorInput('password', 'Вы не ввели в поле пароль!');

        props.spinner(true);
        const authUser = new AuthUser(inputData.login, inputData.password);
        authUser.loginUser()
            .then(response => {
                if (!response.data) {
                    authUser.regUser(storeUser.vkUser.id)
                        .then(response => {
                            if (!response.data) {
                                return showAlert('Невозможно авторизоваться. Проверьте свои данные', 'error');
                            }
                            showAlert('Вход выполнен успешно!', 'success');
                            storeUser.addMyUser(new User(authUser));
                            return storeView.changeView("app", "main");
                        })
                } else {
                    showAlert('Вход выполнен успешно!', 'success');
                    storeUser.addMyUser(new User(authUser));
                    return storeView.changeView("app", "main");
                }

            })
        props.spinner(false);
    };

    useEffect(() => {
        async function loginVKUrl() {
            props.spinner(true);
            const authUser = new AuthUser();
            await authUser.loginVK(vkURL)
                .then(response => {
                    if (response.data) {
                        showAlert('Вход выполнен успешно!', 'success');
                        storeUser.addMyUser(new User(authUser));
                        return storeView.changeView("app", "main");
                    }
                });
            props.spinner(false);
        };
        loginVKUrl();
    }, []);

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
            <Link href="#" underline="hover">Сбросить пароль</Link>
        </Box>
    );
});

export default Login;