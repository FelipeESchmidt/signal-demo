import { ISignalProps } from "../../hooks/useSignalBrain";

export interface ISignalInfoContext {
  activeSignalIndex: number;
  signals: ISignalProps[];
}
