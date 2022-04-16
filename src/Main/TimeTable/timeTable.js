import {observer} from "mobx-react-lite";
import React, {useState} from "react";

import {
    AppBar,
    Box,
    CssBaseline,
    Fade,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Header} from "../../Components/Header";
import {View} from "../../Components/View";

import storeTimeTable from "../../Store/storeTimeTable";
import TodayTT from "./tabs/todayTT";
import WeekTT from "./tabs/weekTT";

const TimeTable = observer((props) => {

    const [tabIndex, setTabIndex] = useState(0);
    const handlerChangeTab = (e, value) => {
        setTabIndex(value);
    };
    const changeMenuTab = (e) => {
        handlerChangeTab(e, 1);
        storeTimeTable.changeTab(e);
        handleClose();
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const displayTab = () => {
        return (
            <Box sx={{bgcolor: 'background.paper'}}>
                <AppBar position="static">
                    <Tabs
                        value={tabIndex}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                    >
                        <Tab onClick={(e) => {
                            handlerChangeTab(e, 0);
                            storeTimeTable.changeTab(e, "today");
                        }}
                             label="Сегодня"
                        />
                        <Tab
                            id="menu-tab-button"
                            aria-controls={Boolean(anchorEl) ? 'menu-tab' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                            onClick={handleClick}
                            icon={<KeyboardArrowDownIcon />}
                            iconPosition="end"
                            sx={{minHeight: 0}}
                            label="Неделя"
                        />
                    </Tabs>
                    <Menu
                        id="menu-tab"
                        MenuListProps={{
                            'aria-labelledby': 'menu-tab-button',
                        }}
                        PaperProps={{
                            sx: {width: "50vw"},
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                        marginThreshold={0}
                    >
                        <MenuItem tabName="currentWeek" onClick={changeMenuTab}>Текущая неделя</MenuItem>
                        <MenuItem tabName="nextWeek" onClick={changeMenuTab}>Следующая неделя</MenuItem>
                    </Menu>
                </AppBar>
            </Box>
        );
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Header title="Расписание"/>
            <Toolbar/>
            {displayTab()}
            <View activeView={storeTimeTable.activeTab}>
                <TodayTT id="today" />
                <WeekTT id="currentWeek"/>
                <WeekTT id="nextWeek"/>
            </View>
        </React.Fragment>
    );
});

export default TimeTable;