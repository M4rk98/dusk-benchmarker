import {createMuiTheme} from "@material-ui/core";
import {IndigoPalette} from "./palette/IndigoPalette";
import {typography} from "./typography/Typography";

export const MainTheme = createMuiTheme({
    palette: IndigoPalette,
    typography: typography
});