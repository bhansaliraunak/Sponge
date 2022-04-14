export interface User {
  id: string;
  name: string;
  address: string;
  mobile: string;
  carName: string;
  carType: string;
  plan: Array<string>;
  feedback: string;
  scheduledDate: string;
  scheduledTime: string;
  adminStatus: string;
  userStatus: string;
}
