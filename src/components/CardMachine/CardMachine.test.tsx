import { render, screen } from "@testing-library/react";
import CardMachine from "./CardMachine";

describe("Given a CardMachine component", () => {
  describe("When  it  rendered and it receives a machine", () => {
    test("Then it should render a li with the machine data", () => {
      const machine = {
        wohnumber: 1,
        wkuname: "maquine 1",
        sitcolor: "red",
        sitname: "PRODUCCION",
        speed: 1,
        matcode: "MATCODE1",
        matname: "PRODUCT NAME 1",
        quantityrequired: 1,
        quantityproduced: 1,
      };

      render(
        <CardMachine
          wohnumber={machine.wohnumber}
          wkuname={machine.wkuname}
          sitcolor={machine.sitcolor}
          sitname={machine.sitname}
          speed={machine.speed}
          matcode={machine.matcode}
          matname={machine.matname}
          quantityrequired={machine.quantityrequired}
          quantityproduced={machine.quantityproduced}
        />
      );

      const expectList = screen.getByRole("listitem");
      const headingNameMachine = screen.getByRole("heading", {
        level: 4,
        name: machine.wkuname,
      });
      const headingNameStateMachine = screen.getByRole("heading", {
        level: 5,
        name: machine.sitname,
      });
      const headingSpeedMachine = screen.getByRole("heading", {
        level: 5,
        name: `Speed: ${machine.speed}`,
      });
      const headingActiveWorkOrder = screen.getByRole("heading", {
        level: 4,
        name: "Active work order:",
      });
      const headingProduct = screen.getByRole("heading", {
        level: 4,
        name: "Product:",
      });
      const headingProductNumber = screen.getByRole("heading", {
        level: 5,
        name: machine.matcode,
      });
      const headingProductName = screen.getByRole("heading", {
        level: 4,
        name: "Product name:",
      });
      const headingProductNameNumber = screen.getByRole("heading", {
        level: 5,
        name: machine.matname,
      });
      const headingQuantityRequired = screen.getByRole("heading", {
        level: 4,
        name: "Quantity required:",
      });
      const headingQuantityProduced = screen.getByRole("heading", {
        level: 4,
        name: "Quantity produced:",
      });

      expect(expectList).toBeInTheDocument();
      expect(headingNameMachine).toBeInTheDocument();
      expect(headingNameStateMachine).toBeInTheDocument();
      expect(headingSpeedMachine).toBeInTheDocument();
      expect(headingActiveWorkOrder).toBeInTheDocument();
      expect(headingProduct).toBeInTheDocument();
      expect(headingProductNumber).toBeInTheDocument();
      expect(headingProductName).toBeInTheDocument();
      expect(headingProductNameNumber).toBeInTheDocument();
      expect(headingQuantityRequired).toBeInTheDocument();
      expect(headingQuantityProduced).toBeInTheDocument();
    });
  });
});
