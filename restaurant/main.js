
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
    console.log("建造一个餐厅")
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

var waiter = function(id, name, salary) {
    staff.call(this, id, name, salary)
}

waiter.prototype = new staff
waiter.prototype.constructor = waiter

waiter.prototype.order= function(o) {
    if(o instanceof Array) {
        console.log("点菜")
        //记录客人点菜
    }else {
        //上菜
        console.log("上菜")
    }
}

var singletonWaiter = (function() {
    var instance
    return function(id, name, salary) {
        if(!instance) {
            console.log("新建了一个服务员"+name)
            instance = new waiter(id, name, salary)
        }
        return instance
    }
})



var chief = function(id, name, salary) {
    staff.call(this, id, name, salary)
}
chief.prototype = new staff
chief.prototype.constructor = chief
chief.prototype.cook = function (o) {
    //做菜
}
var singletonChief = (function() {
    var instance
    return function(id, name, salary) {
        if(!instance) {
            console.log("新建了一个厨师"+name)
            instance = new chief(id, name, salary)
        }
        return instance
    }
})

function customer(){
    console.log("新建了一个顾客")
}

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


