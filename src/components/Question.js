import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Question = ({ question, options, onAnswer }) => {
    return (
        <Box
            sx={{
                textAlign:'center',
                height: "50vh",
                p: "5px",
                margin:'auto'
            }}
        >
            <Typography variant="h5" style={{alignItems:'center'}}>{question}</Typography>
            {options.map((option, index) => (
                <Button
                    key={index}
                    variant="contained"
                    onClick={() => onAnswer(option)}
                    sx={{ margin: 1}}
                >
                    {option}
                </Button>
            ))}
        </Box>
    );
};

export default Question;
