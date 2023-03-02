export interface Machine {
  machine: [];
  wohnumber: number;
  wkuname: string;
  sitcolor: string;
  sitname: string;
  speed: number;
  matcode: string;
  matname: string;
  quantityrequired: number;
  quantityproduced: number;
}

export interface UiState {
  modal: {
    text: string;
    showModal: boolean;
    isError: boolean;
  };
  isLoading: boolean;
}
