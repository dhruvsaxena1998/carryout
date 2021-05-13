export interface File {
  fieldname: string;
  originalname?: string;
  encoding: string;
  mimetype: string;
  destination?: string;
  filename: string;
  size: number;
  path: string;
}

export interface IFile extends File {
  url?: string;
  location?: string;
  etag: string;
}
