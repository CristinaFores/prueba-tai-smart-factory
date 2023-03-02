import { HeaderStyled } from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="./.././images/TAI_smartfactory.png"
        alt="logo TAI smartfactory"
        height={60}
      />
    </HeaderStyled>
  );
};
export default Header;
