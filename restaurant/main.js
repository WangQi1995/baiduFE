
Array.prototype.remove = function(val) {
    for(i=0; i<this.length; i++) {
        if(this[i] == val) {
            this.splice(i, 1)
            break
        }
    }
}

function restaurant(o) {
    this.cash = o.cash
    this.seats = o.seats 
    this.staff = o.staff
}
restaurant.prototype.hire = function(s) {
    this.staff.push(s)
}
restaurant.prototype.fire = function(s) {
    this.staff.remove(s)
}

function staff(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
}
staff.prototype.finishJob = function(j) {
}

function waiter(id, name, salary) {
    staff.call(this, id, name, salary)
}

waiter.prototype = new staff
waiter.prototype.constructor = waiter

waiter.prototype.finishJob = function(o) {
    if(o instanceof Array) {
//记录客人点菜
    }else {
//上菜
    }
}

function chief(id, name, salary) {
    staff.call(this, id, name, salary)
}
chief.prototype = new staff
chief.prototype.constructor = chief
chief.prototype.finishJob = function (o) {
    //做菜
}

function customer(){}
//点菜
customer.prototype.order = function (o) {
}
//吃
customer.prototype.eat = function (o) {

}

function dish(name, cost, price) {
    this.name = name
    this.cost = cost
    this.price = price
}


