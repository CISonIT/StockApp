import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { StockDetailPage } from "./pages/StackDetailPage";
import { StockOverviewPage } from "./pages/StockOverviewPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route  path='/'
                  element={<StockOverviewPage/>}/>
          <Route  path='/detail/:symbol' 
                  element={<StockDetailPage/>}/>
          <Route  path='*'
                  element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
