use('aula03')
db.products.insertMany([
    {name: "p1", description: 'd1', price: 10250, Category: "c1", Units: 100},
    {name: "p2", description: 'd2', price: 20250, Category: "c2", Units: 200},
    {name: "p3", description: 'd3', price: 30250, Category: "c3", Units: 300},
    {name: "p4", description: 'd4', price: 40250, Category: "c4", Units: 400},
    {name: "p5", description: 'd5', price: 50250, Category: "c5", Units: 500},
])

use('aula03')
db.products.find()

//adiicionar

use('aula03')
db.products.insertOne({name: "p6", description: 'd6', price: 60260, Category: "c6", Units: 600})

//atualizar

use('aula03')
db.products.updateOne(
    { _id: ObjectId('64db7fbf70cd7fe96cd662ee') },
    { $set: { name: "p12" } }
)

//excluir

use('aula03')
db.products.deleteOne({
    name: p12
})

use('aula03')
db.dropDatabase()
db.products.drop()