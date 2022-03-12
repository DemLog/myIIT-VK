import {Container} from "@mui/material";
import "./style/main.css";

import {View} from "../Components/View";
import {TabBar} from "../Components/TabBar";
import News from "../News/news";

import {observer} from "mobx-react-lite";
import storeTabs from "../Store/storeTabs";
import storeView from "../Store/storeView";


const Main = observer((props) => {
    // document.getElementById('root').className='root'

    return (
        <View activeView={storeView.activeView.main}>
            <Container id="main">
                <View activeView={storeTabs.activeTab}>
                    <News id="news"/>
                    <TabBar/>
                </View>
            </Container>
        </View>
    );
});

export default Main;