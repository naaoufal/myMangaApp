import { Button, Card, Container, Navbar, Placeholder } from "react-bootstrap";
import NavbarComp from "../../components/NavBar";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import SampleCard from "../../components/SampleCard";
import MostPopular from "../../components/MostPopular";
import RightSidePopular from "../../components/RightSidePopular";
import MangaCard from "../../components/MangaCard";

const HomeScreen = () => {
    return(
        <Box margin={2} padding={2}>
            <MostPopular />
            <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={9.5}>
                        <MangaCard />
                    </Grid>
                    <Grid item xs={2.5}>
                        <RightSidePopular />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeScreen;