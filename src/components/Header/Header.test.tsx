import { render, screen } from "@testing-library/react";
import GlobalStyle from "../../style/GlobalStyle";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a header", () => {
      render(
        <>
          <GlobalStyle />
          <Header />
        </>
      );

      const expectHeader = screen.getByRole("banner");
      expect(expectHeader).toBeInTheDocument();
    });
  });
});
