import type { OmniBaseField } from '@sotaoi/input/omni-base-field';
import { BaseInput } from '@sotaoi/input/base-input';

interface StoredItem {
  drive: null | string;
  domain: string;
  pathname: string;
}

interface MultiStoredItem {
  drive: null | string;
  domain: string;
  getPathname: (input: FileInput) => string;
}

declare class Asset implements StoredItem {
  public drive: null | string;
  public domain: string;
  public pathname: string;

  constructor(item: null | StoredItem);

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): null | string;

  public static serializeMulti(assets: Asset[]): null | string;
}

declare class MultiAsset implements MultiStoredItem {
  public drive: null | string;
  public domain: string;
  public getPathname: (input: FileInput) => string;

  constructor(item: MultiStoredItem);

  public serialize(forStorage: boolean): string;
}

interface FileValue {
  path: string;
  filename: string;
  asset: Asset;
  url: null | string;
  file: null | File;
}
type FileFieldType = null | File;

declare class FileInput extends BaseInput<FileValue, FileFieldType> {
  public value: FileValue;

  constructor(path: string, filename: string, storedItem: null | StoredItem, url: null | string, file: null | File);

  public input(field: typeof OmniBaseField): { input: FileInput; field: typeof OmniBaseField };

  public getValue(): FileValue;

  public getPreview(): string;

  public isEmpty(): boolean;

  public serialize(forStorage: boolean): string | Blob;

  public convert(value: FileInput | FileFieldType): FileInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: string | { path: string; filename: string; bytes: number; file: null | File }): FileInput;
}

export { FileInput, Asset, MultiAsset };
export type { FileFieldType, FileValue, StoredItem, MultiStoredItem };
