import {useEffect} from "react";

import {Box, Card, CardContent, Typography} from "@mui/material";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

import {observer} from "mobx-react-lite";
import storeNews from "../../Store/storeNews";


const SystemNews = observer((props) => {
    const displayNews = () => {
        if (storeNews.sysNews.length === 0)
            return (
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40%'}}>
                    <DoNotDisturbAltIcon sx={{width: 78, height: 78, mb: 2}}/>
                    <Typography variant="h6">
                        Новостей пока нет:(
                    </Typography>
                </Box>);
        const articles = [];
        storeNews.sysNews.forEach((article) => {
            if (article.is_published) return;
            articles.push(
                <Card sx={{mb: 2}}>
                    <CardContent>
                        {/*<Typography variant="caption" color="text.secondary">#{article.category}</Typography>*/}
                        <Typography gutterBottom variant="h5" component="div">{article.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{article.text}</Typography>
                    </CardContent>
                </Card>
            );
        })
        return (<Box>{articles}</Box>);
    };

    useEffect(() => {
        // props.spinner(true);
        storeNews.autoGetSysNews();
        // props.spinner(false);
    }, []);

    return (displayNews());
});

export default SystemNews;