import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

declare class FormInput extends BaseInput<any, any> {
  constructor(value: any);

  public input(field: typeof OmniBaseField): { input: FormInput; field: typeof OmniBaseField };

  public getValue(): any;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): any;

  public convert(value: FormInput | any): FormInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string): FormInput;
}

export { FormInput };
