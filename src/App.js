import "./App.css";
import Header from "./components/Header/Header";
import "flowbite";
import AllMeals from "./components/AllMeals/AllMeals";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllMeals></AllMeals>
    </div>
  );
}
export default App;
