import { ISignalProps, useSignalBrain } from "../../hooks/useSignalBrain";

type IUseSignalBrainProps = ReturnType<typeof useSignalBrain>;

export interface ISignalInfoContext extends IUseSignalBrainProps {
  activeSignalIndex: number;
  signals: ISignalProps[];
}
