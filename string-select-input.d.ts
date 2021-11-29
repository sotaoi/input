import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

type StringSelectValue = null | string;
declare class StringSelectInput extends BaseInput<StringSelectValue, string> {
  public value: StringSelectValue;
  constructor(value: StringSelectValue);

  public input(field: typeof OmniBaseField): { input: StringSelectInput; field: typeof OmniBaseField };

  public getValue(): StringSelectValue;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): null | string;

  public convert(value: StringSelectValue | StringSelectInput): StringSelectInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string): StringSelectInput;

  public static convert(value: StringSelectValue | StringSelectInput): StringSelectInput;
}

export { StringSelectInput };
export type { StringSelectValue };
