import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    details_card: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row'
    },
    details_grid: {
        display: 'flex',
        margin: theme.spacing(2)
    }
}));