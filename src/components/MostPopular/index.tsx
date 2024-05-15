import { Box, Grid, Rating } from "@mui/material";

import ImageManga from '../../assets/images/manga.png';

const DATA = [
    {id: 1, name: "The Greatest Estate Developer", image: ImageManga},
    {id: 2, name: "The Greatest Estate Developer", image: ImageManga},
    {id: 3, name: "The Greatest Estate Developer", image: ImageManga},
    {id: 4, name: "The Greatest Estate Developer", image: ImageManga},
    {id: 5, name: "The Greatest Estate Developer", image: ImageManga},
    {id: 6, name: "The Greatest Estate Developer", image: ImageManga},
    {id: 7, name: "The Greatest Estate Developer", image: ImageManga},
];

const MostPopular = () => {
    return (
        <Box
            // height={200}
            // width="90%"
            // my={14}
            display="flex"
            flexDirection="column"
            borderRadius={2}
            // justifyItems="center"
            // alignItems="center"
            // gap={2}
            p={2}
            sx={{ backgroundColor: "#16151d" }}
        >
            <text style={{ color: "#fff" }}>Popular Today</text>
            <Box my={2}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {DATA.map((item) => (
                        <Grid item xs={1.6}>
                            <Box display="flex" flexDirection="column">
                                <img width="90%" height="auto" src={ImageManga} style={{ borderRadius: 6 }} />
                                <Box sx={{ marginTop: 1, }}>
                                    <text style={{ color: "#fff", fontSize: 12, width: "80%", fontWeight: "bold" }}>
                                        {item?.name}
                                    </text>
                                </Box>
                                <Box>
                                    <text style={{ color: "gray", fontSize: 11, fontWeight: "bold" }}>Chapter 115</text>
                                </Box>
                                <Box sx={{ marginTop: 1, }}>
                                    <Rating name="read-only" value={5} readOnly size="small" />
                                    <text>9.0</text>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default MostPopular;