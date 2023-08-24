show databases

use('aula01')
db.people.insertOne({
    name: "Alisson",
    lastname: "Ferro",
    salary: 1234
})


use('aula01')
db.people.insertMany([
    {
        name: 'Queila',
        lastname: 'Lima',
        salary: 1234
    },
    {
        name: 'Donathan',
        lastname: 'Goncalves',
        salary: 1234
    },
])

use('aula01')
const arrpeople = [
    {
        name: 'Luis',
        lastname: 'Balem',
        salary: 1234
    },
    {
        name: 'Leonardo',
        lastname: 'Trevisan',
        salary: 1234
    },
]
db.people.insertMany(arrpeople)

use('aula01')
db.people.find()

use('aula01')
db.people.find({ name: 'Alisson' })

use('aula01') //Contem n
db.people.find({ name: /n/ });

use('aula01')
db.people.find({ $and: [{ name: 'Alisson' }, { lastname: 'Balem' }] })

use('aula01') //Maior que
db.people.find({ salary: { $gt: 123 } })

use('aula01') //Maior/Igual que e campos especificos
db.people.find({ salary: { $gte: 123 } }, { name: 1, lastname: 1 })

use('aula01')
db.people.updateOne(
    { _id: ObjectId('64db66de50cd077a6b40d109') },
    { $set: { name: "Alisson Alterado" } }
);

use('aula01')
db.people.find(
    { _id: ObjectId('64db66de50cd077a6b40d109') }
);

use('aula01')
db.people.updateMany(
    { salary: 1234 },
    { $set: { salary: 12345 } }
);

use('aula01')
db.people.deleteOne({
    name: /Alisson/
})

use('aula01')
db.people.deleteMany({
    name: /n/
})

use('aula01')
db.people.findOneAndDelete( { name: 'Alisson' })

use('aula01')
db.people.drop()

use('aula01')
db.dropDatabase()