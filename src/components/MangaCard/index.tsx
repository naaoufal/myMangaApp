import { Box } from "@mui/material";

const MangaCard = () => {
    return (
        <Box
            p={2}
            sx={{ backgroundColor: "#16151d" }}
            display="flex"
            flexDirection="column"
            borderRadius={2}
            // gap={2}
            width="100%"
        >
            <text>this is manga card</text>
        </Box>
    );
};

export default MangaCard;