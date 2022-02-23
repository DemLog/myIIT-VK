import React, {useState} from "react";
import Auth from "./Auth/auth";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {View} from "./Components/View";
import {CssBaseline} from "@mui/material";

import Main from "./Main/main";

const App = () => {
    const [activeView, setActiveView] = useState('auth');
    const [themeUI, setThemeUI] = useState(createTheme({palette: {mode: 'dark',},}));

    const [user, setUser] = useState(null);
    const [vkUser, setVKUser] = useState(null);

    const changeTheme = (theme) => {
        setThemeUI(createTheme({
            palette: {
                mode: theme,
            },
        }));
    }

    const goView = (e) => {
        if (typeof e != 'string')
            setActiveView(e.currentTarget.dataset.to);
        setActiveView(e);
    }


    return (
        <ThemeProvider theme={themeUI}>
            <CssBaseline>
                <View activeView={activeView}>
                    <Auth id="auth" userData={setUser} goView={goView} vkUser={vkUser} setVKUser={setVKUser}/>
                    <Main id="main" user={user}/>
                </View>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;