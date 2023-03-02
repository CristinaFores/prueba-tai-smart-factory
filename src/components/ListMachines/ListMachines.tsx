import { useEffect } from "react";
import CardMachine from "../CardMachine/CardMachine";

import {
  Chart,
  CommonSeriesSettings,
  Format,
  Label,
  Legend,
  Series,
} from "devextreme-react/chart";
import useMachines from "../../hooks/useMachine";
import { ListMachinesStyled } from "./ListMachinesStyled";

const ListMachines = (): JSX.Element => {
  const { machines, getMachines } = useMachines();

  useEffect(() => {
    getMachines();
  }, [getMachines]);

  return (
    <ListMachinesStyled>
      {machines.map((machine) => (
        <CardMachine
          key={machine.wohnumber}
          wohnumber={machine.wohnumber}
          sitcolor={machine.sitcolor}
          sitname={machine.sitname}
          speed={machine.speed}
          matcode={machine.matcode}
          matname={machine.matname}
          quantityrequired={machine.quantityrequired}
          quantityproduced={machine.quantityproduced}
          wkuname={machine.wkuname}
          children={
            <Chart
              id="chart"
              rotated={true}
              barGroupPadding={0.4}
              width={"100%"}
              height={150}
              dataSource={[machine]}
            >
              <Label visible={true}>
                <Format type="fixedPoint" precision={0} />
              </Label>
              <CommonSeriesSettings
                argumentField="state"
                type="bar"
                minBarSize={2}
                barPadding={0.5}
              >
                <Label visible={true}>
                  <Format type="fixedPoint" precision={0} />
                </Label>
              </CommonSeriesSettings>
              <Series
                color="green"
                argumentField="serie"
                valueField="tprod"
                name="Produccion"
              />

              <Series
                color="orange"
                argumentField="serie"
                valueField="tprep"
                name="Preparada"
              />
              <Series
                color="red"
                argumentField="serie"
                valueField="tpar"
                name="Paros"
              />
              <Legend
                verticalAlignment="top"
                horizontalAlignment="center"
              ></Legend>
            </Chart>
          }
        />
      ))}
    </ListMachinesStyled>
  );
};

export default ListMachines;
