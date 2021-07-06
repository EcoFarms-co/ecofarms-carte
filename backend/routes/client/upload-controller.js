const UploadModel = require('../../models/uploads');
const fs = require('fs');

exports.home = async (req, res) => {
    const all_images = await UploadModel.find()
    res.render('main', { images: all_images });
}


//REMARQUE: ca n'upload pas l'image dans la ferme mais dans les upload revoir le model
exports.uploads = (req, res, next) => {
    const file = req.file;
    const body = req.body;

    if (!file) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error)
    }

    // convert images into base64 encoding
    // let imgArray = file.map((file) => {
    let img = fs.readFileSync(file.path)
    let imgBase64 = img.toString('base64')
    // })

    // let result = imgArray.map((src, index) => {

    // create object to store data in the collection
    let finalImg = {
        filename: file.originalname,
        contentType: file.mimetype,
        imageBase64: imgBase64
    }

    let newUpload = new UploadModel(finalImg);

    newUpload
        .save()
        .then(() => {
            return { msg: `${file.originalname} Uploaded Successfully...!` }
        })
        .catch(error => {
            if (error) {
                if (error.name === 'MongoError' && error.code === 11000) {
                    console.log("in the error ");
                    return Promise.reject({ error: `Duplicate ${file.originalname}. File Already exists! ` });
                }
                return Promise.reject({ error: error.message || `Cannot Upload ${file.originalname} Something Missing!` })
            }
        })
    // });

    // Promise.all(newUpload)
    //     .then( msg => {
    //             // res.json(msg);
    //         res.redirect('/back/farms')
    //     })
    //     .catch(err =>{
    //         res.json(err);
    //     })

    res.redirect('/back/farms');
}