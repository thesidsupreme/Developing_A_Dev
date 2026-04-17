console.log("This is reduce")


const course = [
    {
        item: "sid course of technology",
        price: 100
    },
    {
        item: "sid course of management",
        price: 100
    },
    {
        item: "sid course of bussiness",
        price: 100
    },
    {
        item: "sid course of money",
        price: 100
    },
]

const total_price = course.reduce((accumilator,item ) => accumilator+item.price,0)

console.log(total_price)