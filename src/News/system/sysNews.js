import {useEffect} from "react";

import {Box, Card, CardContent, CardHeader, Container, Skeleton, Typography} from "@mui/material";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

import {observer} from "mobx-react-lite";
import storeNews from "../../Store/storeNews";


const SystemNews = observer((props) => {

    const displaySkelet = () => {

        return (
            <Box sx={{my: 2}}>
                <Card>
                    <CardHeader avatar={<Skeleton animation="wave" variant="circular" width={40} height={40}/>}
                                title={<Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                    style={{marginBottom: 6}}
                                />}
                                subheader={<Skeleton animation="wave" height={10} width="40%"/>}
                    />
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    <CardContent>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </CardContent>
                </Card>
                <Card sx={{mt: 3}}>
                    <CardHeader avatar={<Skeleton animation="wave" variant="circular" width={40} height={40}/>}
                                title={<Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                    style={{marginBottom: 6}}
                                />}
                                subheader={<Skeleton animation="wave" height={10} width="40%"/>}
                    />
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    <CardContent>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </CardContent>
                </Card>
                <Card sx={{mt: 3}}>
                    <CardHeader avatar={<Skeleton animation="wave" variant="circular" width={40} height={40}/>}
                                title={<Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                    style={{marginBottom: 6}}
                                />}
                                subheader={<Skeleton animation="wave" height={10} width="40%"/>}
                    />
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    <CardContent>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </CardContent>
                </Card>
            </Box>
        );
    };

    return (
        <Container>
            {displaySkelet()}
        </Container>
    );
});

export default SystemNews;