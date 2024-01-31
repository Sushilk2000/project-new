import "./App.css";
import Header from "./Components/Header/header";
import Main from "./Components/main/main";
import MovieDetails from "./Components/MovieDetails/posterData";
import CastDetails from "./Components/MovieDetails/Castdetails";
import FullCast from "./Components/MovieDetails/fullCast";
import Footer from "./Components/Footer/Footer";
import SearchResults from "./Components/Main_Search/searchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonData from "./Components/MovieDetails/PersonDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:type/:id" element={<MovieDetails />} />
          <Route path="/:type/:id/credits" element={<FullCast />} />
          <Route path="/:search" element={<SearchResults />}></Route>
          <Route path="/person/:id" element={<PersonData />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
