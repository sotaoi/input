import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

declare class RecordRef {
  repository: string;
  uuid: string;
  constructor(repository: string, uuid: string);
  isEmpty(): boolean;
  deserialize(value: string | RecordRef): RecordRef;
  serialize(): string;
  static deserialize(value: string | object | RecordRef): RecordRef;
  static fromRecordEntry(recordEntry: any): RecordRef;
}

type RefSelectValue = null | RecordRef;
declare class RefSelectInput extends BaseInput<RefSelectValue, string> {
  public value: RefSelectValue;
  constructor(value: RefSelectValue);

  public input(field: typeof OmniBaseField): { input: RefSelectInput; field: typeof OmniBaseField };

  public getValue<RecordRefType extends RecordRef = any>(): null | RecordRefType;

  public isEmpty(): boolean;

  public serialize(): null | string;

  public convert(value: RefSelectInput | string): RefSelectInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any });

  public deserialize(value: string): RefSelectInput;
}

export { RefSelectInput };
export type { RefSelectValue };
