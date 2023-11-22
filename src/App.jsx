// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/IndexPage";
import New from "./Pages/New";
import Show from "./Pages/Show";
import DimSumsFourOFour from './Pages/DimSumsFourofFour';
import DimSum from './Components/DimSums';
import Footer from './Pages/Footer';
// Components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Navbar/>
          <Routes>
            <Route path="/dimsum" element={<DimSum/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/dimsums" element={<Index />} />
            <Route path="/dimsums/new" element={<New />} />
            <Route exact path="/dimsums/:id" element={<Show />} />
            <Route path="/dimsums/:id/edit" element={<Edit />} />
            <Route path="*" element={<DimSumsFourOFour />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
