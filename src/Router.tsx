import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/timer-project" element={<DefaultLayout />}>
        <Route path="/timer-project" element={<Home />} />
        = <Route path="/timer-project/history" element={<History />} />
      </Route>
    </Routes>
  );
}
