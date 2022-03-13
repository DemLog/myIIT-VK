import React from "react";

import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
    Badge,
    Divider
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {deepOrange} from "@mui/material/colors";
import logo from "./image/header_logo.png";

export const Header = (props) => {
    const {tabs} = props;

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar>
                    <Box component="div" sx={{display: "flex"}}>
                        <img src={logo} style={{width: "45px", height: "45px"}} alt="Logo myIIT"/>
                        <Typography variant="h5" sx={{display: {xs: 'none', md: 'block'}, pt: 1}}>myIIT</Typography>
                    </Box>
                    <Typography variant="h5" sx={{m: {xs: 1, md: 'auto'}}}>
                        {props.title}
                    </Typography>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Avatar sx={{bgcolor: deepOrange[500]}}>DL</Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
                {tabs && <><Divider/>{tabs}</>}
            </Container>
        </AppBar>
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