export class CurrentUser {
  _id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: string;
  role: string;
  phoneNumber: string;
  newPassword?: any;
  confNewPassword?: any;
}
