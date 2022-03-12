import {useEffect, useState} from "react";
import bridge from "@vkontakte/vk-bridge";

import {
    Alert,
    Container,
    Snackbar,
    Stack
} from "@mui/material";

import Login from "./login/login";
import {View} from "../Components/View";
import {ScreenSpinner} from "../Components/ScreenSpinner";

import {observer} from "mobx-react-lite";
import storeUser from "../Store/storeUser";
import storeView from "../Store/storeView";

const Auth = observer((props) => {

    const [alert, setAlert] = useState({
        show: false,
        msg: null
    });
    const showSnackBar = (msg, type) => {
        setAlert({
            show: true,
            msg: <Alert onClose={closeSnackBar} severity={type} sx={{width: '100%', p: 1, fontSize: 16}}>{msg}</Alert>
        });
    };
    const closeSnackBar = (e, reason) => {
        if (reason === 'clickaway')
            return;

        setAlert({
            show: false,
            msg: null
        });
    };

    const [spinner, openSpinner] = useState(true);

    useEffect(() => {
        async function getUserVK() {
            openSpinner(true);
            await bridge.send('VKWebAppGetUserInfo')
                .then(data => {
                    storeUser.addVKUser(data);
                })
                .catch(error => {
                    showSnackBar(error.error_data.error_reason, 'error');
                });
            openSpinner(false);
        }

        getUserVK();
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <View activeView={storeView.activeView.auth}>
                <ScreenSpinner open={spinner}/>
                <Login id="login" showAlert={showSnackBar} spinner={openSpinner}/>

                <Stack spacing={2} sx={{width: '100%'}}>
                    <Snackbar open={alert.show} autoHideDuration={5000} onClose={closeSnackBar}>
                        {alert.msg}
                    </Snackbar>
                </Stack>
            </View>
        </Container>
    );
});

export default Auth;