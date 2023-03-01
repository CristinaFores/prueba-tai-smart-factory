import { render, screen } from "@testing-library/react";
import ListMachines from "./ListMachines";

describe("Given a ListMachines component", () => {
  describe("When  it receives a list of machines", () => {
    test("Then it should render a list of machines", () => {
      render(<ListMachines />);

      const expectList = screen.getByRole("list");
      expect(expectList).toBeInTheDocument();
    });
  });
});
