//create
use('exam')
db.musics.insertOne({
    name: "music",
    credits: {
        author: {
            name: "author",
            birthDay: new Date(),
        },
        features: [{
            name: "feat1",
            birthDay: "05/09/2023"
        },
        {
            name: "feat2",
            birthDay: "05/09/2023"
        }],
        producers: [{
            name: "prod1",
            birthDay: "05/09/2023"
        },
        {
            name: "prod2",
            birthDay: "05/09/2023"
        }]
    },
    label: {
        name: "label",
        address: "address",
        cnpj: "59.563.041/0001-39"
    },
    duration: 120,
    released: new Date(),
    genre: ["genre1", "genre2"]
})

//read
use('exam')
db.musics.find()
db.musics.find({
    _id: ObjectId("64f71e0dac1b975baa9164e0")
}, { "credits": 1, "_id": 0 });

//update
use('exam')
const id = "64f71e0dac1b975baa9164e0"
db.musics.updateOne(
    { _id: ObjectId(id) },
    {
        $push: {
            "credits.features": "feat3"
        }
    }
)

//delete
use('exam')
db.musics.deleteOne({
    "name": "music"
})
use('exam')
db.musics.drop()
db.dropDatabase()