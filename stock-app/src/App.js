import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { StockDetailPage } from "./pages/StackDetailPage";
import { StockOverviewPage } from "./pages/StockOverviewPage";
import { NotFound } from "./pages/NotFound";
import { WatchListContextProvider } from "./context/watchListContext"
import "./styles/App.css"

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
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
      </WatchListContextProvider>
    </main>
  );
}

export default App;
