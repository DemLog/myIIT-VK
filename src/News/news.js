import React, {useState} from "react";

import {CssBaseline, Toolbar} from "@mui/material";

import {View} from "../Components/View";
import {Header} from "../Components/Header";
import SystemNews from "./system/sysNews";

import {observer} from "mobx-react-lite";
import {ScreenSpinner} from "../Components/ScreenSpinner";
import storeView from "../Store/storeView";
import {TabBar} from "../Components/TabBar";

const News = observer((props) => {
    const [spinner, openSpinner] = useState(false);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Header title="Новости"/>
            <Toolbar/>
            <View activeView={storeView.activeView.news}>
                <SystemNews id="system"/>
            </View>
        </React.Fragment>
    );
});

export default News;