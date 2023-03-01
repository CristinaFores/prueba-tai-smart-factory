import {
  CardMachineStyled,
  ContainerStateStyled,
  CotinerActiveWorkProductStyled,
  MachinePropertiesStyled,
} from "./CardMachineStyled";

interface CardMachineProps {
  wohnumber: number;
  wkuname: string;
  sitcolor: string;
  sitname: string;
  speed: number;
  matcode: string;
  matname: string;
  quantityrequired: number;
  quantityproduced: number;
  children?: JSX.Element | JSX.Element[];
}

const CardMachine = ({
  wohnumber,
  wkuname,
  sitcolor,
  sitname,
  speed,
  matcode,
  matname,
  quantityrequired,
  quantityproduced,
  children,
}: CardMachineProps): JSX.Element => {
  return (
    <CardMachineStyled key={wohnumber}>
      <h4>{wkuname}</h4>
      <ContainerStateStyled>
        <h5 className="state" style={{ background: sitcolor }}>
          {sitname}
        </h5>
        <h5>Speed: {speed}</h5>
      </ContainerStateStyled>

      <CotinerActiveWorkProductStyled>
        <MachinePropertiesStyled>
          <h4>Active work order:</h4>
          <h5>{wohnumber}</h5>
        </MachinePropertiesStyled>

        <MachinePropertiesStyled>
          <h4>Product:</h4>
          <h5> {matcode}</h5>
        </MachinePropertiesStyled>
      </CotinerActiveWorkProductStyled>

      <MachinePropertiesStyled>
        <h4>Product name:</h4>
        <h5>{matname}</h5>
      </MachinePropertiesStyled>

      <CotinerActiveWorkProductStyled>
        <MachinePropertiesStyled>
          <h4>Quantity required:</h4>
          <h5>{quantityrequired}</h5>
        </MachinePropertiesStyled>

        <MachinePropertiesStyled>
          <h4>Quantity produced:</h4>
          <h5>{quantityproduced}</h5>
        </MachinePropertiesStyled>
      </CotinerActiveWorkProductStyled>

      {children}
    </CardMachineStyled>
  );
};

export default CardMachine;
