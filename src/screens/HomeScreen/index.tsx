import { Button, Card, Container, Navbar, Placeholder } from "react-bootstrap";
import NavbarComp from "../../components/NavBar";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import SampleCard from "../../components/SampleCard";
import MostPopular from "../../components/MostPopular";

const HomeScreen = () => {
    return(
        <Box margin={2} padding={2}>
            <MostPopular />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
            {/* {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                <SampleCard />
                </Grid>
            ))} */}
            </Grid>
        </Box>
    );
};

export default HomeScreen;