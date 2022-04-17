import "./style/main.css";

import {View} from "../Components/View";
import News from "./News/news";

import {observer} from "mobx-react-lite";
import storeTabs from "../Store/storeTabs";
import storeView from "../Store/storeView";
import {TabBar} from "../Components/TabBar";
import React from "react";
import {Toolbar} from "@mui/material";
import TimeTable from "./TimeTable/timeTable";
import ProfileUser from "./Profile/profile";


const Main = observer((props) => {

    return (
        <View activeView={storeView.activeView.main}>
            <View id="main" activeView={storeTabs.activeTab}>
                <News id="news"/>
                <TimeTable id="timetable" />
                <ProfileUser id="profile" />
            </View>
            <Toolbar/>
            <TabBar/>
        </View>
    );
});

export default Main;