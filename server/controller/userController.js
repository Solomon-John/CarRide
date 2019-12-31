const user = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config =require('../config/config')



exports.userReg = async (req, res) => {
    const emailExist = await user.findOne({email:req.body.email});
    const numberExist =await user.findOne({number:req.body.number});


        if(!req.body.firstname || !req.body.lastname || !req.body.password || !req.body.number || !req.body.email) {
            return res.json({
                message: 'please enter the required fields'
            })
        }else if(emailExist){

            res.json({message:'The entered email exists'});
            

        }else if(numberExist){

            res.json({message:'the entered number already exists'});
            
            
        }else {
            const hash = bcrypt.hashSync(req.body.password, 10)
            const body = req.body
                await user.create({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                password: hash,
                number: body.number

            })
                res.json({
                    message:'registration successful',
                    
                })

            }
        }



    // login controller

    exports.userLogin = async (req, res) => {
        try {

            if (!req.body.email || !req.body.password) {
                // alert('enter credentials')
                // console.log('fill up')
                return res.json({
                    message: 'Please enter your credentials'
                })
            } else {
                await user.findOne({
                    email: req.body.email
                }, (err, user) => {
                    if (!user) {
                        return res.json({
                            message: 'No user with such email'
                        })
                    }

                    const isPassword = bcrypt.compareSync(req.body.password, user.password)
                    if (!isPassword) {
                        res.json({
                            message: 'incorrect password'
                        })

                    } else {
                        const token = jwt.sign({id: user._id, firstname: user.firstname, lastname: user.lastname,
                            email: user.email}, config.user_secret,{expiresIn:86400})



                        //   console.log(user.firstname)
                        res.json({
                            message: 'Login successful',
                            firstname: user.firstname,
                            token: token
                        })

                    }

                })
            }
        } catch (error) {
            return console.log(error)
        }
    }


    //find one user 
    exports.getSingleUser = async (req, res) => {
        const info = await user.findOne({
            _id: req.params.id
        })
        return (res.json({
            info: info
        }))

    }

    // get all user
    exports.getAllUser = async (req, res) => {
        const info = await user.find().sort({
            "_id": -1
        });
        return (res.json({
            info: info
        }))
    }

    //delete single user
    exports.deleteUser = async (req, res) => {
        const info = await user.findOneAndRemove({
            _id: req.params.id
        })
        res.json({
            info: info,
            message: "User has been deleted"
        })
    }

    //update a single user information
    exports.updateUser = async (req, res) => {
        const info = await user.find({
            id: req.params.id
        })
        if (info) {
            return res.json({
                message: 'user does not exist'
            })
        } else {
            const body = req.body;
            info.firstname = body.firstname || info.firstname
            info.lastname = body.lastname || info.lastname
            info.email = body.email || info.email
            info.password = body.password || info.password
            await info.save();
            res.json({
                message: 'user info updated successfully'
            })
        }
    }