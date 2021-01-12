"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesRep = void 0;
var SalesRep = /** @class */ (function () {
    function SalesRep() {
    }
    SalesRep.prototype.firstName = function () {
        return this.forenames.substr(0, this.forenames.indexOf(' '));
    };
    SalesRep.prototype.fullName = function () {
        return this.firstName() + " " + this.surname;
    };
    return SalesRep;
}());
exports.SalesRep = SalesRep;
//# sourceMappingURL=salesrep.js.map