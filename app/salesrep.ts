import { User } from './user';
import { Customer} from './customer';

export class SalesRep implements User {
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;
    customers: Customer [];
    firstName() {
        return this.forenames.substr(0,this.forenames.indexOf(' '));
    }
    fullName() {
        return `${this.firstName()} ${this.surname}`;
    }
}