import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

declare class StringInput extends BaseInput<null | string, null | string> {
  constructor(value: null | string);

  public input(field: typeof OmniBaseField): { input: StringInput; field: typeof OmniBaseField };

  public getValue(): null | string;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): null | string;

  public convert(value: StringInput | null | string): StringInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string): StringInput;
}

export { StringInput };
