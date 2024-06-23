import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Actors,
  Movies,
  MovieInformation,
  Navbar,
  Profile,
} from "@/components";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Movies />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/movies/:id" element={<MovieInformation />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
