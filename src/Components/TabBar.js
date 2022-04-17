import {
    BottomNavigation,
    BottomNavigationAction,
    Fab,
    Paper
} from "@mui/material";
import {styled} from '@mui/material/styles';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import AppsIcon from '@mui/icons-material/Apps';
import TimerIcon from '@mui/icons-material/Timer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {observer} from "mobx-react-lite";
import storeTabs from "../Store/storeTabs";

export const TabBar = observer((props) => {
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -20,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    const handleChange = (e, value) => {
        storeTabs.changeTab(value);
    };

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation value={storeTabs.activeTab} onChange={handleChange}>
                <BottomNavigationAction
                    value="news"
                    icon={<NewspaperIcon/>}
                />
                <BottomNavigationAction
                    value="event"
                    icon={<EventIcon/>}
                />
                <BottomNavigationAction
                    value="service"
                    icon={<StyledFab color="secondary" aria-label="add"><AppsIcon/></StyledFab>}
                />
                <BottomNavigationAction
                    value="timetable"
                    icon={<TimerIcon/>}
                />
                <BottomNavigationAction
                    value="profile"
                    icon={<AccountCircleIcon/>}
                />
            </BottomNavigation>
        </Paper>
    );
});