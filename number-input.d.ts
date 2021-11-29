import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

declare class NumberInput extends BaseInput<number, number> {
  public value: number;
  constructor(value: number);

  public input(field: typeof OmniBaseField): { input: NumberInput; field: typeof OmniBaseField };

  public getValue(): number;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): string;

  public convert(value: NumberInput | number): NumberInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string): NumberInput;
}

export { NumberInput };
