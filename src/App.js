import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import Navbar from "./components/vidly/navbar";
import MainVidlyApp from "./components/vidly/mainVidlyApp";
import Customers from "./components/vidly/customers";
import Rentals from "./components/vidly/rentals";
import NotFound from "./components/vidly/notFound";
import EditMovie from "./components/vidly/editMovie";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/movies" element={<MainVidlyApp />} />
              <Route path='movies/:id' element={<EditMovie />} />
              <Route path="customers" element={<Customers />} />
              <Route path="rentals" element={<Rentals />} />
              <Route path="not-found" element={<NotFound />} />
              <Route path="/" element={<Navigate replace to="movies" />} />
              <Route path="*" element={<Navigate replace to="not-found" />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;