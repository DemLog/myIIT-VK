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

export const TabBar = (props) => {
    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -20,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    const handleChange = (e, value) => {
        props.setActiveBar(value);
    };

    return (
        <Paper sx={{display: {xs: 'block', md: 'none'}, position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation value={props.activeBar} onChange={handleChange}>
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
                    value="user"
                    icon={<AccountCircleIcon/>}
                />
            </BottomNavigation>
        </Paper>
    );
}