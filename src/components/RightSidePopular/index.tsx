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

const RightSidePopular = () => {
    return (
        <Box
            p={1}
            sx={{ backgroundColor: "#16151d" }}
            display="flex"
            flexDirection="column"
            borderRadius={2}
            // gap={2}
            width="100%"
        >
            <text style={{ color: "#fff", fontSize: 12, fontWeight: "bold", marginTop: 10 }}>Popular</text>
            {/* filter side : */}
            {/* <Box p={1} display="flex" flexDirection="row" justifyItems="center" sx={{ justifyContent: "space-between", backgroundColor: "gray", marginTop: 1, }}>
                <button style={{ backgroundColor: "#8224E3", border: "none", borderRadius: 3, paddingLeft: 20, paddingRight: 20 }}>
                    <text style={{ color: "#fff", fontSize: 11, fontWeight: "bold" }}>Weekly</text>
                </button>
                <button style={{ backgroundColor: "#8224E3", border: "none", borderRadius: 3, paddingLeft: 20, paddingRight: 20 }}>
                    <text style={{ color: "#fff", fontSize: 11, fontWeight: "bold" }}>Monthly</text>
                </button>
                <button style={{ backgroundColor: "#8224E3", border: "none", borderRadius: 3, paddingLeft: 20, paddingRight: 20 }}>
                    <text style={{ color: "#fff", fontSize: 11, fontWeight: "bold" }}>All</text>
                </button>
            </Box> */}
            <Box>
                {DATA.map((item) => (
                    <Grid>
                        <Box p={1} display="flex" flexDirection="row">
                            <img width="45%" height="auto" src={ImageManga} style={{ borderRadius: 6 }} />
                            <Box p={1} display="flex" flexDirection="column">
                                <Box sx={{ marginTop: 1, }}>
                                    <text style={{ color: "#fff", fontSize: 12, width: "80%", fontWeight: "bold" }}>
                                        {item?.name}
                                    </text>
                                </Box>
                                <text style={{ color: "gray", fontSize: 11, fontWeight: "bold" }}>Chapter 115</text>
                                <Box display="flex" flexDirection="row" sx={{ marginTop: 1, justifyItems: "center" }}>
                                    <Rating name="read-only" value={5} readOnly size="small" />
                                    <text style={{ color: "#fff", fontSize: 12, marginLeft: 4 }}>9.0</text>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Box>
        </Box>
    );
};

export default RightSidePopular;