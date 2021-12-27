import type { OmniBaseField } from '@sotaoi/input/omni-base-field';
import { BaseInput } from '@sotaoi/input/base-input';

declare class BooleanInput extends BaseInput<boolean, boolean> {
  public value: boolean;
  constructor(value: boolean);

  public input(field: typeof OmniBaseField): { input: BooleanInput; field: typeof OmniBaseField };

  public getValue(): boolean;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean);

  public convert(value: boolean | BooleanInput): BooleanInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string): BooleanInput;

  public static convert(value: boolean | number | string | BooleanInput): BooleanInput;
}

export { BooleanInput };
