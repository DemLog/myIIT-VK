import {Backdrop, CircularProgress} from "@mui/material";

export const ScreenSpinner = (props) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};