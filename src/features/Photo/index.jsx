import NotFound from "components/NotFound";
import { Route, Routes } from "react-router-dom";
import AddEdit from "./pages/AddEdit";
import MainPage from "./pages/Main";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddEdit />} />
      <Route path="/:photoId" element={<AddEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
