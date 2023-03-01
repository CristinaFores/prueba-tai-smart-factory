import { AppStyled } from "./AppStyled";
import ListMachines from "../ListMachines/ListMachines";
import Header from "../Header/Header";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <Header />
      <main>
        <ListMachines />
      </main>
    </AppStyled>
  );
};

export default App;
