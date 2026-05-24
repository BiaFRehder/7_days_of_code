import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

export const Pages = () => (
    <Router>
        <Routes>
            <Route exact path="/sign-up" element={<SignUp /> } />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="*" element={<NotFound />} /> 
        </Routes>
    </Router>
)