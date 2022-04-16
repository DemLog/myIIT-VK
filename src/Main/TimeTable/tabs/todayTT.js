import {useEffect, useState} from "react"

import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader, Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
    Skeleton, TextField,
    Typography
} from "@mui/material";
import React from "react";
import {observer} from "mobx-react-lite";
import storeTimeTable from "../../../Store/storeTimeTable";
import {Label} from "@mui/icons-material";

const TodayTT = observer((props) => {

    const weekDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    const displaySkeleton = () => {
        console.log(storeTimeTable.todayTT);
        return (
            <Box>
                <Card sx={{mt: 3}}>
                    <CardHeader
                        title={<Skeleton
                            animation="wave"
                            height={50}
                            width="55%"
                        />}
                    />
                    <CardContent>
                        {["60%", "70%", "50%", "75%"].map(x =>
                            <Skeleton animation="wave"
                                      height={40}
                                      width={x}
                                      style={{marginBottom: 6}}/>
                        )}
                    </CardContent>
                </Card>
            </Box>
        );
    };
    useState(() => {
        storeTimeTable.getTimeTableToday();
    });
    return (
        storeTimeTable.todayTT.length !== 0 ?
            <Card>
                <CardHeader title={weekDay[storeTimeTable.todayTT[0]["day_week"] - 1]}
                            style={{paddingBottom: '5px'}}/>
                <CardContent style={{paddingTop: '5px'}}>
                    <Divider/>
                    <List>
                        {storeTimeTable.todayTT.map(lesson =>
                            <div>
                                <Grid container direction={'row'}>

                                    <Grid item xs={2} direction={'column'}>
                                        <Typography alignContent={'start'} textAlign={'left'}
                                                    variant={'subtitle1'}>{lesson.time.start_time}</Typography>
                                        <Typography variant={'subtitle1'}>{lesson.time.end_time}</Typography>
                                    </Grid>

                                    <Grid xs={8} direction={'column'}>
                                        <Typography variant={'subtitle1'}>{lesson.subject}</Typography>
                                        <Typography variant={'caption'}>{lesson.lecture}</Typography>
                                    </Grid>

                                    <Grid xs={2} textAlign={'end'}>
                                        {lesson.cabinet}
                                    </Grid>
                                </Grid>

                                <Divider/>
                            </div>
                        )}
                    </List>
                </CardContent>
            </Card>
            :
            displaySkeleton()
    )
});

export default TodayTT;