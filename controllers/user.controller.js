const cloudinary = require("cloudinary")     
    cloudinary.config({ 
    cloud_name: 'di01u7dxt', 
    api_key: '312857669553195', 
    api_secret: 'gDnRYEmSQ6cZez4DP9ptoynjz6s' 
    });

    const uploadModel = require("../models/user.model")


        const uploadFiles = (req,res)=>{
            let userData = { 
                myfile:req.body.myfile,
                email:req.body.email,
         }  
            let savefile = new uploadModel(userData)
           //result.secure_url
            let myfile = req.body.myfile
            // cloudinary.v2.uploader.upload(myfile, (err, result)=>{
            //     if (err){console.log("failed");}
            //     else{console.log(result); res.send({status:true, message:"successful", result})}
            // });

            savefile.save()
                .then(()=>{console.log("file uploaded succesfully" + req.body.myfile + req.body.email ); res.send({status:true, message:"upload successful"})})
                .catch((err)=>{console.log('upload failed' + err); res.send({status:false, message:"upload failed"})})                
        } 

        const getimgURL = (req,res)=>{
            // console.log("iz workign")
                    uploadModel.find()
                    .then((result)=>{console.log(result); res.send({status:true, message:result, result}  )})
                    .catch((err)=>{console.log("could not fetch data" + err); res.send({status:false})})
           }

module.exports = {uploadFiles, getimgURL}