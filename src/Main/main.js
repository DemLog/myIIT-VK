import {useState} from "react";
import {View} from "../Components/View";
import {Container} from "@mui/material";
import {TabBar} from "../Components/TabBar";
import News from "../News/news";

const Main = (props) => {
    const [activePanel, setActivePanel] = useState('main');
    const goPanel = (e) => {
        if (typeof e != 'string')
            setActivePanel(e.currentTarget.dataset.to);
        setActivePanel(e);
    };

    const [activeBar, setActiveBar] = useState('news');

    return(
        <View activeView={activePanel}>
            <Container id="main">
                <View activeView={activeBar}>
                    <News id="news"/>
                    <TabBar activeBar={activeBar} setActiveBar={setActiveBar}/>
                </View>
            </Container>
        </View>
    );
};

export default Main;