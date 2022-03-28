import React from "react";

import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "./image/header_logo.png";

import {HideOnScroll} from "./HideOnScroll";

export const Header = (props) => {

    return (
        <HideOnScroll direction="down" {...props}>
            <AppBar>
                <Toolbar>
                    <Box>
                        <img src={logo} style={{width: "45px", height: "45px"}} alt="Logo myIIT"/>
                    </Box>
                    <Box sx={{flexGrow: 1, ml: 2}}>
                        <Typography variant="h5">
                            {props.title}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

export const BackHeader = (props) => {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar sx={{p: 0}}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="back" sx={{mr: 1}}
                                onClick={props.backView}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
};