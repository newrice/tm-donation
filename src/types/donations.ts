export interface DonationsModelBase {
  name: string;
  amount: number;
  comment: string;
}
export interface DonationsModel extends DonationsModelBase {
  email: string;
}
