import type { OmniBaseField } from '@sotaoi/input/omni-base-field';

declare abstract class BaseInput<InputType, FieldValueType> {
  abstract input(field: typeof OmniBaseField): {
    input: BaseInput<InputType, FieldValueType>;
    field: typeof OmniBaseField;
  };
  abstract getValue(): InputType;
  abstract isEmpty(): boolean;
  abstract serialize(forStorage: boolean): null | string | Blob | (string | Blob)[];
  abstract convert(
    value: BaseInput<InputType, FieldValueType> | InputType | FieldValueType
  ): BaseInput<InputType, FieldValueType>;
  abstract deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;
  abstract deserialize(value: any): BaseInput<InputType, FieldValueType>;

  public value: InputType;

  constructor(value: InputType);

  public asset(item: null | string, role?: string): null | string;

  public assets(items: null | string, role?: string): null | string[];

  public getKey(index: number): string;

  public static deserialize(value: any): BaseInput<any, any>;
}

interface FieldValidation {
  method: string;
  args?: { [key: string]: any };
}
interface CollectionValidations {
  min: number;
  max: number;
  fields: { [key: string]: FieldValidation[] | CollectionValidations | SingleCollectionValidations };
}
interface SingleCollectionValidations {
  fields: { [key: string]: FieldValidation[] | CollectionValidations | SingleCollectionValidations };
}

declare class FormValidations {
  [key: string]: FieldValidation[] | CollectionValidations | SingleCollectionValidations;

  constructor(formValidations: {
    [key: string]: FieldValidation[] | CollectionValidations | SingleCollectionValidations;
  });
}

export { BaseInput, FormValidations };
export type { FieldValidation, CollectionValidations, SingleCollectionValidations };
