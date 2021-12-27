import type { OmniBaseField } from '@sotaoi/input/omni-base-field';
import type { FileInput } from '@sotaoi/input/file-input';
import { BaseInput } from '@sotaoi/input/base-input';

interface FileUpload {
  path: string;
  filename: string;
  bytes: number;
  file: null | File;
}

type MultiFileFieldType = null | File[];
declare class MultiFileInput extends BaseInput<FileInput[], MultiFileFieldType> {
  public value: FileInput[];

  constructor(value: FileInput[]);

  public input(field: typeof OmniBaseField): { input: MultiFileInput; field: typeof OmniBaseField };

  public getValue(): FileInput[];

  public isEmpty(): boolean;

  public append(fileInput: FileInput): void;

  public getFiles(): File[];

  public serialize(forStorage: boolean): (string | Blob)[];

  public convert(value: MultiFileFieldType): MultiFileInput;

  public deserializeCondition(fieldPayload: any, payloadJson: { [key: string]: any }): boolean;

  public deserialize(value: (string | FileUpload)[]): MultiFileInput;
}

export { MultiFileInput };
export type { MultiFileFieldType };
