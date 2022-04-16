import {useEffect} from "react"

import {Box} from "@mui/material";

import {observer} from "mobx-react-lite";
import storeTimeTable from "../../../Store/storeTimeTable";

const TodayTT = observer((props) => {

        useEffect(() => {
            storeTimeTable.getTimeTableToday();
        }, []);

        return (
            <Box>
                Расписание сегодня
            </Box>
        );
    }
);

export default TodayTT;