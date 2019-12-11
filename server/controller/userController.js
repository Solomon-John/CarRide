const user = require('../model/user');
const bcr = require('bcryptjs')


exports.userReg = async (req, res) => {

            if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.number || !req.body.password){
                       return res.json({
                           message:"enter the required fields"
                       })
                    } else {

                        const hash = bcr.hashSync(req.body.password, 10)
                        const body = req.body;
                         await user.create({
                            firstname:body.firstname,
                            lastname:body.lastname,
                            email:body.email,
                            number:body.number,
                            password:hash

                        })
                        res.json({
                            message:'success'
                        })
                    }


            }