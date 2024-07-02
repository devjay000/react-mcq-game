import React from "react";
import { Box, Typography } from "@mui/material";

const Score = ({ score, total }) => {
    return (
        <Box>
            <Typography variant="h4">
                Your Score: {score} / {total}
            </Typography>
        </Box>
    );
};

export default Score;
