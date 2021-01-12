"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.firstName = function () {
        if (this.nickname != undefined)
            return this.nickname;
        else
            return this.forenames.substr(0, this.forenames.indexOf(' '));
    };
    Customer.prototype.fullName = function () {
        return this.firstName() + " " + this.surname;
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map