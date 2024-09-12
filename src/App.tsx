import { BrowserRouter } from "react-router-dom";
import { CssGlobal } from "./styles";
import Rotas from './routes'
import RodaPe from "./componentes/RodaPe";

function App() {
  return (
    <BrowserRouter>
      <CssGlobal />
      <Rotas />
      <RodaPe />
    </BrowserRouter>
  );
}

export default App;