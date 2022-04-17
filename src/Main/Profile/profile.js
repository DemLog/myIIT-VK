import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";

import {
    Box,
    Button,
    Container,
    CssBaseline,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Skeleton,
    Toolbar,
    Typography
} from "@mui/material";
import './style/profile.css'

import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

import {Header} from "../../Components/Header";
import storeUser from "../../Store/storeUser";

const ProfileUser = observer((props) => {

    const vkID = props.vk_id ? props.vk_id : 0;

    const AvatarHeader = () => (<Box className="panel">
        <Box className="cover-photo">
            <Box className="fb-timeline-img">
                <img src="https://s14.pikabu.ru/post_img/big/2021/09/13/8/1631540830155847028.jpg" alt=""/>
            </Box>
        </Box>
        <Box
            className="panel-body"
            sx={{display: 'flex', justifyContent: 'space-between'}}
        >
            <Box className="profile-thumb">
                <img src={storeUser.vkUser.photo_100} alt=""/>
            </Box>
            <Box sx={{mr: 3, mt: 1}}>
                <Button size="small" variant="outlined">Изменить</Button>
            </Box>
        </Box>
    </Box>);

    const displayUserInfo = () => {
        return (<React.Fragment>
            <Box>
                <Typography variant="h5">{storeUser.userInfo.first_name} {storeUser.userInfo.last_name}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{storeUser.userInfo.study_group}</Typography>
            </Box>
            <Box sx={{mt: 2}}>
                <Typography variant="subtitle2">Личные данные:</Typography>
                <Paper elevation={2}>
                    <List disablePadding dense>
                        <ListItem>
                            <ListItemText primary="Отчество" secondary={storeUser.userInfo.patronymic}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="E-Mail" secondary={storeUser.userInfo.email}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Страна" secondary={storeUser.userInfo.country}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Город" secondary={storeUser.userInfo.city}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Статус" secondary={storeUser.userInfo.status}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Направление обучения" secondary={storeUser.userInfo.direction}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Профиль" secondary={storeUser.userInfo.profile}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Форма обучения" secondary={storeUser.userInfo.form_study}/>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
            <Box sx={{mt: 2}}>
                <Typography variant="subtitle2">Привязанные аккаунты:</Typography>
                <Paper elevation={2}>
                    <List disablePadding dense>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PublicIcon/>
                                </ListItemIcon>
                                <ListItemText primary="ВКонтакте" secondary={storeUser.userInfo.vk_id}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GoogleIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Google" secondary="Не привязано"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GitHubIcon/>
                                </ListItemIcon>
                                <ListItemText primary="GitHub" secondary="Не привязано"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </React.Fragment>);
    };

    const DisplaySkeleton = () => (<React.Fragment>
        <Box>
            <Typography variant="h5"><Skeleton width="50%" animation="wave"/></Typography>
            <Typography variant="subtitle2" color="text.secondary"><Skeleton width="15%"
                                                                             animation="wave"/></Typography>
        </Box>
        <Box sx={{mt: 2}}>
            <Typography variant="subtitle2"><Skeleton width="30%"/></Typography>
            <Skeleton variant="rectangular" height={150}/>
        </Box>
    </React.Fragment>);

    useEffect(() => {
        storeUser.getUserInfo(vkID);
    }, []);

    return (<React.Fragment>
        <CssBaseline/>
        <Header title="Мой профиль"/>
        <Toolbar/>
        <AvatarHeader/>
        <Container>
            {storeUser.userInfo !== null ? displayUserInfo() : <DisplaySkeleton/>}
        </Container>
    </React.Fragment>);
});

export default ProfileUser;