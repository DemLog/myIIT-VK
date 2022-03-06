import React, {useState} from "react";

import {
    Box,
    Tab,
    Tabs
} from "@mui/material";

import {HideOnScroll} from "../Components/HideOnScroll";
import {View} from "../Components/View";
import {Header} from "../Components/Header";
import SystemNews from "./system/sysNews";

import {observer} from "mobx-react-lite";

const News = observer((props) => {
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
        <Box sx={{pb: {xs: 7, md: 0}, mt: 15}}>
            <Header title="Новости" tabs={showTabs()}/>
            <View activeView={valueTab}>
                <SystemNews id={0}/>
            </View>
        </Box>
    );
});

export default News;