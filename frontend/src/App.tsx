import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import InputPage from './pages/InputPage';
import VaultPage from "./pages/VaultPage"
import EssayPage from "./pages/EssayPage"
import QuickNotesPage from './pages/QuickNotesPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/quick-notes"
            element={
              <QuickNotesPage />
            }
          />
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/essays"
            element={
              <EssayPage />
            }
          />
          <Route
            path="/vault"
            element={
              <VaultPage />
            }
          />
          <Route
            path="/input"
            element={
              <InputPage />
            }
          />

        </Routes>
        </BrowserRouter>
     
    </>
  )
}

export default App
