
import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        padding: 4,
        borderRadius: 5,
        width: 'fit-content',
        background: '#DBD9D6',
    },
    withColor: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
    }
}));