import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionList from "./components/QuestionList";

const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Container maxWidth="sm">
                <Routes>
                    <Route path="/" element={<QuestionList />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
