import Navigation from "./components/Navigation";
import {Routes, Route} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import FavouritePage from "./pages/FavouritesPage";

function App() {
  return (
    <div className="w-screen h-screen bg-[rgb(20,20,20)]">
      <Navigation />
      <Routes >
        <Route path="/" element={<MainPage/>}/>
        <Route path="/favourites" element={<FavouritePage/>}/>
      </Routes>
    </div>
  );
}

export default App;



