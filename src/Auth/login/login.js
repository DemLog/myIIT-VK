import {useEffect, useState} from "react";
import {AuthUser, User} from "myiit-api-lib";

import {
    Box,
    Button, Grid,
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

    const openPanel = (e) => {
        storeView.changeView("auth", e.currentTarget.dataset.name)
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
                            storeUser.addMyUser(new User(authUser));
                            return storeView.changeView("app", "main");
                        })
                    if (typeof response.err.error !== 'undefined') {
                        return showAlert(response.err.error[0], 'error');
                    }
                } else {
                    storeUser.addMyUser(new User(authUser));
                    return storeView.changeView("app", "main");
                }

            })
        props.spinner(false);
    };

    // useEffect(() => {
    //     async function loginVKUrl() {
    //         props.spinner(true);
    //         const authUser = new AuthUser();
    //         await authUser.loginVK(vkURL)
    //             .then(response => {
    //                 if (response.data) {
    //                     showAlert('Вход выполнен успешно!', 'success');
    //                     storeUser.addMyUser(new User(authUser));
    //                     return storeView.changeView("app", "main");
    //                 }
    //             });
    //         props.spinner(false);
    //     };
    //     loginVKUrl();
    // }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
        }}>
            <Box sx={{marginTop: '15%', textAlign: 'center', px: 2}}>
                <img src={logo} style={{maxWidth: "60%"}} alt="Logo myIIT"/>
                <Box sx={{boxShadow: 3, borderRadius: 2, p: 2, my: 1, mx: 2}}>
                    <Typography component="h1" variant="h5" sx={{mb: 1}}>
                        Авторизация
                    </Typography>
                    <TextField margin="normal" fullWidth label="Логин Moodle" name="login" value={inputData.login}
                               onChange={handleChange} error={errInput.login} helperText={errMessage.login}/>
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
                    <Button sx={{mt: 2}} fullWidth variant="contained" onClick={handleSubmit}>
                        Войти
                    </Button>
                </Box>
                <Link href="#" data-name="reset" onClick={openPanel} underline="hover">Сбросить пароль</Link>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', py: 1, px: 4, boxShadow: 3}}>
                <Link data-name="terms" onClick={openPanel} underline="hover">Условия использования</Link>
                <Link data-name="about" onClick={openPanel} underline="hover">О программе</Link>
            </Box>
        </Box>
    );
});

export default Login;