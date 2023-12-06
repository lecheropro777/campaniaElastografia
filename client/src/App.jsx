import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/elastografia/home";
import { ElastografiaProvider } from "./context/elastografiacontext";
import { Confirmar } from "./pages/elastografia/Codigo";
import { Notfound } from "./pages/Notfound";
import { PantallaAviso } from "./pages/elastografia/PantallaAviso";

function App() {
  const Path=localStorage.getItem("Path")
  //4245424
  return (
    <>
      <ElastografiaProvider>
        <Routes>
          <Route path="/elastografia/:origen" element={<Home/>} />
          Path ? <Route path={`/elastografia/confirmar/${Path}`} element={<Confirmar/>} /> : <Route element={<Notfound/>} />
          <Route path="/anuncio" element={<PantallaAviso/>}/>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </ElastografiaProvider>
    </>
  );
}

export default App;
