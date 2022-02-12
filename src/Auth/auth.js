import {useState} from "react";

import {Alert, Container, Snackbar, Stack} from "@mui/material";

import {Login} from "./login/login";
import {View} from "../Components/View";

const Auth = (props) => {
    const [activePanel, setActivePanel] = useState('login')

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

    return (
        <Container component="main" maxWidth="xs">
                <View activeView={activePanel}>
                    <Login id="login" showAlert={showSnackBar} userData={props.userData}/>

                    <Stack spacing={2} sx={{width: '100%'}}>
                        <Snackbar open={alert.show} autoHideDuration={5000} onClose={closeSnackBar}>
                            {alert.msg}
                        </Snackbar>
                    </Stack>
                </View>
        </Container>
    );
};

export default Auth;