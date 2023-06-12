export interface Data {
  createdAt: number;
  updatedAt: number;
  id: string;
  email: string;
  link: string;
  token: string;
  forgotStatus: boolean;
}

export interface Response {
  status: number;
  message: string;
  data: any[] | any;
}
