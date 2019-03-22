export interface IFluxStandardAction {
  type: string;
  payload?: any;
  meta?: any;
  error?: boolean;
}

export type ReduxDispatch = (action: IFluxStandardAction) => void;
