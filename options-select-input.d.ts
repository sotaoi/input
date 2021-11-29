import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

type OptionsSelectValue = { [key: string]: boolean };
declare class OptionsSelectInput extends BaseInput<OptionsSelectValue, string> {
  public value: OptionsSelectValue;
  constructor(value: OptionsSelectValue);

  public input(field: typeof OmniBaseField): { input: OptionsSelectInput; field: typeof OmniBaseField };

  public getValue(): OptionsSelectValue;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): string;

  public convert(value: OptionsSelectValue | OptionsSelectInput): OptionsSelectInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string): OptionsSelectInput;

  public static convert(value: string | OptionsSelectValue | OptionsSelectInput): OptionsSelectInput;
}

export { OptionsSelectInput };
export type { OptionsSelectValue };
