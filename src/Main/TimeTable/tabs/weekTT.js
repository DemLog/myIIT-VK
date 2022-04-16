import {observer} from "mobx-react-lite";

import {Box} from "@mui/material";
import {useEffect} from "react";
import storeTimeTable from "../../../Store/storeTimeTable";

const WeekTT = observer((props) => {

        useEffect(() => {
            storeTimeTable.getTimeTableWeek();
        }, []);

        return (
            <Box>
                {props.id === "currentWeek" ? "Расписание на текущую неделю" : "Расписание на следующую неделю"}
            </Box>
        );
    }
);

export default WeekTT;