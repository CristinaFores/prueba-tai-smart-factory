import { AppStyled } from "./AppStyled";
import ListMachines from "../ListMachines/ListMachines";
import Header from "../Header/Header";
import useMachines from "../../hooks/useMachine";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const {
    uiState: { isLoading },
    getMachines,
  } = useMachines();

  useEffect(() => {
    getMachines();
  }, [getMachines]);

  return (
    <AppStyled>
      <Header />
      <main>
        {isLoading ? <span className="loader"></span> : <ListMachines />}
      </main>
    </AppStyled>
  );
};

export default App;
