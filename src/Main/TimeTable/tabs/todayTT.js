import {useEffect} from "react"

import {Container} from "@mui/material";

import {observer} from "mobx-react-lite";
import storeTimeTable from "../../../Store/storeTimeTable";

const TodayTT = observer((props) => {

        useEffect(() => {
            storeTimeTable.getTimeTableToday();
        }, []);

        return (
            <Container>
                Расписание сегодня
            </Container>
        );
    }
);

export default TodayTT;