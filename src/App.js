import "./App.css";
import Header from "./components/Header/Header";
import "flowbite";
import AllMeals from "./components/AllMeals/AllMeals";
import { Route, Routes } from "react-router-dom";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<AllMeals></AllMeals>}></Route>
        <Route path="/home" element={<AllMeals></AllMeals>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/category" element={<AllMeals></AllMeals>}></Route>
      </Routes>
    </div>
  );
}
export default App;
