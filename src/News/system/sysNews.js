import {useEffect, useState} from "react";

import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Container, Divider,
    Skeleton,
    Tab,
    Tabs,
    tabsClasses,
    Typography
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import {observer} from "mobx-react-lite";
import storeNews from "../../Store/storeNews";
import storeTabs from "../../Store/storeTabs";


const SystemNews = observer((props) => {

    const displayCategories = () => {
        if (storeNews.sysCategories.length === 0) return;
        return (
            <Box sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
            }}>
                <Tabs
                    value={storeNews.sysTab}
                    onChange={storeNews.handleChangeTab}
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label="Лента" onClick={(e) => storeNews.handleChangeCategory(e, 0)}/>
                    {storeNews.sysCategories.map(
                        (tab) => <Tab onClick={(e) => storeNews.handleChangeCategory(e, tab.id)} label={tab.name}/>
                    )}
                </Tabs>
                <Divider/>
            </Box>
        );
    };

    const displayNews = () => {
        if (storeNews.sysNews.length === 0) {
            return (
                <Box sx={{
                    height: "30em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'column'
                }}>
                    <SentimentVeryDissatisfiedIcon sx={{fontSize: 90}}/>
                    <Typography variant="h5">Новостей пока что нет</Typography>
                </Box>
            );
        }

        const response = [];
        storeNews.sysNews.forEach(article => {
            if (article.is_published) return;
            if (storeNews.sysCategory !== 0 && article.category !== storeNews.sysCategory) return;
            response.push(
                <Card sx={{mt: 3}}>
                    <CardHeader
                        title={article.title}
                        subheader="28.02.2019 12:00"
                    />
                    <CardContent>
                        {article.text}
                    </CardContent>
                </Card>
            )
        })
        return (<Box>{response}</Box>);

    };

    const displaySkeleton = () => {
        return (
            <Box>
                {[...new Array(6)]
                    .map(() => <Card sx={{mt: 3}}>
                            <CardHeader
                                title={<Skeleton
                                    animation="wave"
                                    height={30}
                                    width="80%"
                                    style={{marginBottom: 6}}
                                />}
                                subheader={<Skeleton animation="wave" height={15} width="40%"/>}
                            />
                            <CardContent>
                                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                <Skeleton animation="wave" height={10}/>
                            </CardContent>
                        </Card>
                    )
                }
            </Box>
        );
    };

    useEffect(() => {
        storeNews.autoGetSysCategories();
        storeNews.autoGetSysNews();
    }, []);

    return (
        <Container>
            {storeNews.sysState ? displayCategories() : null}
            {storeNews.sysState ? displayNews() : displaySkeleton()}
        </Container>
    );
});

export default SystemNews;