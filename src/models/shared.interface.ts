import { EAlert } from './alert.enum';
import { ECriterion } from './criterion.enum';
import { ESignalType } from './signal-type.enum';

export interface ICriteria {
  criterion: ECriterion;
  signals: IPitSignal[];
}

export interface IPitSignal {
  priority: number;
  type: ESignalType | null;
  status: EAlert;
  count: number;
}
