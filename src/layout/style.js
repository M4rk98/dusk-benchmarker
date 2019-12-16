import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    logo: {
        marginRight: theme.spacing(2)
    },
    headerText: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    breadcrumb: {
        marginBottom: theme.spacing(3)
    },
    layoutWrapper: {
        height:'100%',
        display: 'flex',
        flexDirection: 'column'
    },
    mainWrapper: {
        display: 'flex',
        flex: 1
    },
    heroContent: {
        padding: theme.spacing(4, 0, 6),
        width: '100%'

    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
    },
}));