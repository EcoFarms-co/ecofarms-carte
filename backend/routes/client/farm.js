const express = require('express')
const router = new express.Router()
const farmService = require('../../service/farm-service')
const reseauService = require('../../service/reseau-service')
const multer = require('multer')
const Farm = require('../../models/farm')
const uploadController = require('./upload-controller')
const store = require('../../middleware/multer')
const fs = require('fs')

router.get('', (req, res) => {
    res.redirect('/back/login')
})

// Get all farms
router.get('/back/farms', (req, res) => {
    farmService.getAll((results) => {
        res.render('back-farms', {
            farms: results
        })
    });
})

// Return farm form
router.get('/back/farms/create', (req, res) => {
    reseauService.getAll((results) => {
        res.render('back-farms-create', {
            reseaux: results
        })

    })
});



// Handle farm form post action
router.post('/back/farms/create', store.single('images'), (req, res) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return error
    }
    //TODO: trouver une gestion d'encodage plus rapide 
    // convert images into base64 encoding
    // var bitmap = fs.readFileSync(file);
    let imgBase64 =  Buffer.from(file.buffer).toString('base64');

    let finalImg = {
        filename: file.originalname,
        contentType: file.mimetype,
        imageBase64: imgBase64
    }

    let newUpload = new UploadModel(finalImg);
    const body = {
        fields: req.body,
        uploads: newUpload
    }
    try {
        farmService.create(body, (error) => {
            if (error) {
                return res.redirect('/back/farms')
            }
            return res.render('back-farms-create', {
                errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp! '
            })
        })
    } catch (e) {
        throw new Error(e)
    }
})

router.post('/uploadmultiple', store.single('images'), uploadController.uploads)

// render farm form for update
router.get('/back/farms/:id/upload', (req, res) => {

    farmService.get(req.params.id, (result) => {
        res.render('back-farms-upload', {
            farm: result
        })
    })
})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

// router.post('/back/farms/:id/upload', upload.single('photo'), (req, res) => {
//     console.log("uploading...")
//     farmService.upload(req.params.id, req.file.buffer, (error) => {
//         if (!error){
//             console.log(error)
//             return res.redirect('/back/farms')
//         }
//         farmService.get(req.params.id, (result) => {
//             res.render('back-farms-upload', {
//                 farm: result
//             })
//         })
//     })
// })

// upload photo
router.post('/back/farms/:id/upload', upload.single('photo'), async (req, res) => {
    try {
        var farm = Farm.findById(req.params.id)
        if (farm) {
            farm.photo = req.file.buffer
        }
        await farm.save()
        res.redirect('/back/farms')
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/back/farms/:id/farm-picture', (req, res) => {
    farmService.getPhoto(req.params.id, (result) => {
        res.set('Content-Type', 'image/png')
        res.send(result)
    })
})

// Handle farm update
router.post('/back/farms/:id/update', (req, res) => {
    try {
        farmService.update(req.params.id, req.body, (error) => {
            if (error) {
                res.render('back-farms-update', {
                    errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp! '
                })
            }
            return res.redirect('/back/farms')
        })
    } catch (e) {
        throw new Error(e)
    }

})

router.get('/back/farms/:id', (req, res) => {
    try {
        reseauService.getAll((reseaux) => {
            farmService.get(req.params.id, (result) => {
                res.render('back-farms-update', {
                    farm: result,
                    reseaux: reseaux
                })
            })
        })
    } catch (e) {
        throw new Error(e)
    }

})


// render farm form for update
router.get('/back/farms/:id/delete', (req, res) => {
    farmService.delete(req.params.id, (error) => {
        if (error) {
            return res.redirect('back/farms', {
                errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp! '
            })
        }
        return res.redirect('/back/farms')
    })
})

module.exports = router