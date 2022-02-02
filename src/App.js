import React, {useState} from "react";
import Auth from "./Auth/auth";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {View} from "./Components/View";

const App = () => {
    const [activeView, setActiveView] = useState('auth');
    const [themeUI, setThemeUI] = useState(null);
    const tempTheme = createTheme({palette: {mode: 'dark',},});

    const [user, setUser] = useState(null);

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
        <ThemeProvider theme={tempTheme}>
            <View activeView={activeView}>
                <Auth id="auth" userData={setUser}/>
            </View>
        </ThemeProvider>
    );
}

export default App;