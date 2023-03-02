import { useCallback, useState } from "react";
import { Machine, UiState } from "../types/types";

const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};
const showLoading = { ...initialUiState, isLoading: true };
const hiddeLoading = { ...initialUiState, isLoading: false };

const apiUrl = "http://intranet.taionline.net:14036/api/loadtfunction";

const credencials = {
  FuncName: "Tai.Backend.Qplant",
  ActiveActor: "WKULL",
  FuncParam01: "OEEMONITOR2",
  FuncParam02: "SPAIN",
  FuncParam03: "",
  FuncParam04: "",
  FuncParam05: "",
  TraceLog: "Y",
};

const useMachines = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [uiState, setuiState] = useState<UiState>(initialUiState);

  const getMachines = useCallback(async () => {
    try {
      setuiState(showLoading);
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(credencials),
      });
      const newMachines = await response.json();

      setMachines(newMachines.Payload[3].workunits);
    } catch (err: unknown) {
      setuiState({
        modal: {
          showModal: false,
          isError: true,
          text: "No hay ningun dato disponible",
        },
        isLoading: false,
      });
    } finally {
      setuiState(hiddeLoading);
    }
  }, []);

  return { getMachines, machines, uiState };
};
export default useMachines;
