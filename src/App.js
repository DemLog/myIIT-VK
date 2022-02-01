import React, {useState} from "react";
import Auth from "./Auth/auth";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const App = () => {
    const [activeView, setActiveView] = useState('auth');
    const [themeUI, setThemeUI] = useState(null);
    const tempTheme = createTheme({palette: {mode: 'dark',},});

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
            <Auth/>
        </ThemeProvider>
    );
}

export default App;