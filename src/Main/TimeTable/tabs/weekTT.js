import {observer} from "mobx-react-lite";

import {Box} from "@mui/material";

const WeekTT = observer((props) => {
        return (
            <Box>
                {props.id === "currentWeek" ? "Расписание на текущую неделю" : "Расписание на следующую неделю"}
            </Box>
        );
    }
);

export default WeekTT;