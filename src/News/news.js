import {Header} from "../Components/Header";
import React, {useState} from "react";
import {AppBar, Box, Button, Card, CardActions, CardContent, Container, Tab, Tabs, Typography} from "@mui/material";
import {HideOnScroll} from "../Components/HideOnScroll";


const News = (props) => {
    const [valueTab, setValueTab] = useState(0);
    const handleChangeTab = (e, value) => {
        setValueTab(value);
    };

    const showTabs = () => {
        return (
            <HideOnScroll direction="down">
                <Tabs value={valueTab} onChange={handleChangeTab} aria-label="News tabs category" variant="fullWidth">
                    <Tab label="Лента" id="myiit"/>
                    <Tab label="ИИТ ЧелГУ" id="iit_csu"/>
                </Tabs>
            </HideOnScroll>
        );
    }

    return (
        <Container sx={{pb: {xs: 7, md: 0}, mt: 15}}>
            <Header title="Новости" tabs={showTabs()}/>
            <Box>
                <Card sx={{minWidth: 275, mb: 1}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            well meaning and kindly.
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{minWidth: 275, mb: 1}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            well meaning and kindly.
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{minWidth: 275, mb: 1}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            well meaning and kindly.
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{minWidth: 275, mb: 1}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            well meaning and kindly.
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{minWidth: 275, mb: 1}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            well meaning and kindly.
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
};

export default News;