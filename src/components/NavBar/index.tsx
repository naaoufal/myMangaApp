import { Container, Navbar } from "react-bootstrap";
import './style.css';
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavbarComp = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography component="h5" variant="h5">
                    LOGO
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavbarComp;