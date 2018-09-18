let restaurant = new restaurant({
    cash: 10000,
    seats: 1,
    staff: []
})

let waiter = new singletonWaiter(1, "57", 100)
restaurant.hire(waiter)

let cooker = new singletonChief(1, "57chief", 100)
restaurant.hire(cooker)

let custom = []
let c1 = new custom()
let c2 = new custom()
custom.push(c1)
custom.push(c2)

let menu = []
menu.push(new dish("干煸57", 10, 20))
menu.push(new dish("清蒸57", 10, 20))
menu.push(new dish("爆炒57", 10, 20))
menu.push(new dish("红焖57", 10, 20))

for(let i=0; i<custom.length; i++) {
    let random = Math.floor(Math.random() * dishList.length)
    let dish = menu[random]
    custom[i].order(dish.name)
}