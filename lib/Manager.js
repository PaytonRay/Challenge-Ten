const Employee = require('./Employee');


class Engineer extends Employee {
    constructor({name, id, email, officeNumber,startDate}){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.startDate = startDate
    }
    getofficeNumber(){
        return this.officeNumber
    }
    getstartDate(){
        return this.startDate
    }
    getRole(){
        return `Manager`
    }
}

module.exports = Manager