const crudSche=require("mongoose")



const getCrud=get('/getdata', (req, res) => {
    crudSche.find({}, (err, resul) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(resul)
        }
    })
})