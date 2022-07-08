import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    media: {
        height: 260
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardActions: {
        justifyContent: 'space-between'
    },
    button: {
        display: 'flex',
        alignItems: 'center'
    }
}));