import GoogleAuth from "components/GoogleAuth";
import HomePage from "components/Home";
import NotFound from "components/NotFound";
import Spinner from "components/Spinner";
import Photo from "features/Photo";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos/*" element={<Photo />} />
            <Route path="/sign-in" element={<GoogleAuth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
