import {useState} from "react";

import {
    Alert,
    Container,
    CssBaseline,
    Snackbar,
    Stack,
} from "@mui/material";

import Login from "./login/login";

const Auth = (props) => {
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
            <CssBaseline>
                <Login showAlert={showSnackBar}/>

                <Stack spacing={2} sx={{width: '100%'}}>
                    <Snackbar open={alert.show} autoHideDuration={5000} onClose={closeSnackBar}>
                        {alert.msg}
                    </Snackbar>
                </Stack>
            </CssBaseline>
        </Container>
    );
};

export default Auth;