import type { OmniBaseField } from './omni-base-field';
import { BaseInput } from './base-input';

interface CollectionInputType {
  min: number;
  max: number;
  fields: any[];
}
declare class CollectionInput extends BaseInput<CollectionInputType, null> {
  constructor(value: CollectionInputType);

  public input(field: typeof OmniBaseField): { input: CollectionInput; field: typeof OmniBaseField };
  public getValue(): CollectionInputType;
  public isEmpty(): boolean;
  public serialize(forStorage: boolean): null | string;
  public convert(value: CollectionInputType | null): CollectionInput;
  public deserializeCondition(fieldPayload: string, payloadJson: { [key: string]: any }): boolean;
  public deserialize(value: CollectionInputType): CollectionInput;
  public static deserialize(value: CollectionInputType): CollectionInput;
}

export { CollectionInput };
