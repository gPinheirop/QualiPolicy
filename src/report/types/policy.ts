import {Vehicle} from './vehicle';

export interface Policy {
  id: string;
  dealDate: Date;
  companyName: string;
  policyNumber: string;
  name: string;
  identifier: string;
  address: string;
  phoneNumber: string;
  email: string;
  segment: string;
  liquidPrize: number;
  TotalPrize: number;
  IOF: number;
  commissionPercentage: number;
  paymentType: string;
  installment: string;
  isVehicle: boolean;
  vehicle?: Vehicle;
}
