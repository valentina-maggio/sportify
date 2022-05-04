import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarLogin from "./components/NavBarLogin";
import FormLogin from "./components/FormLogin";
import SubBar from "./components/SubBar";
import FormSignUp from "./components/FormSignUp";
import SignInRedirection from "./components/SignInRedirection";
import CalendarDetails from "./components/CalendarDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={[<NavBarLogin />, <SubBar />, <FormLogin />]}
        />
        <Route
          path="/signup"
          element={[
            <NavBarLogin />,
            <SubBar />,
            <FormSignUp />,
            <SignInRedirection />,
          ]}
        />
        <Route path="username/calendar" element={<CalendarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
