//create
use('revisao')
db.carteira.insertOne({
    name: "carteira", creationDate: new Date(), description: "description", currentBalance: 1000, transactionList: [], month: []
})

//read
use('revisao')
db.carteira.find()

//update
use('revisao')
const valueTransac = 100
const balance = db.carteira.find({
    _id: ObjectId('64f5cff3f6d214fd6c810753')
}, {"currentBalance":1,"_id":0}).toArray();
db.carteira.updateOne(
    { _id: ObjectId('64f5cff3f6d214fd6c810753') },
    {
        $set: {
            currentBalance: balance[0].currentBalance - valueTransac
        },
        $push: {
            transactionList: {
                creationDate: new Date(), value: valueTransac, currentBalance: balance[0].currentBalance - valueTransac
            }
        }
    }
)

//delete
use('revisao')
db.carteira.deleteOne({
    name: p12
})
use('revisao')
db.carteira.drop()
db.dropDatabase()