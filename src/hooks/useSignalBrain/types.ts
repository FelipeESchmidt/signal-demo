import { SignalColorsType, IDefaultSignalProps } from "../../types";

export interface ISignalProps extends IDefaultSignalProps {
  litColor: SignalColorsType;
  nOfCars: number;
}
