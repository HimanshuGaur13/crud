var userService = require('../service/userServices');
const userModel = require('../Models/userModel');

var getDataConntrollerfn = async (req, res) => {
    try {
        {
            var empolyee = await userService.getDataFromDBService();
            res.send({ "status": true, "data": empolyee });
        }
    } catch (err) {
        console.log(err)
    }
}

var createUserControllerFn = async (req, res) => {
    try {
        let data = new userModel(req.body);
        const new_Data = await data.save()
        res.status(201).send({success:true, new_Data})
        
        
    } catch (error) {
        console.log(error)
    }
    
}

var updateUserController = async (req, res) => {
    try{
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id, req.body);

    if (result) {
        res.send({ "status": true, "message": "User Updateeeedddddd" });
    } else {
        res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
    }
}catch(err){
    console.log(err)
}
}

var deleteUserController = async (req, res) => {
    try {
        console.log(req.params.id);
    var result = await userService.removeUserDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "User Deleteddd" });
    } else {
        res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
    }
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = { getDataConntrollerfn, createUserControllerFn, updateUserController, deleteUserController };