const express = require('express');
const router = new express.Router();
const Farm = require('../../models/farm');

router
    .get('/api/recherche/regions/:reg', async (req, res) => {
        var regex = new RegExp(req.query, 'i');
        console.log("req.query region ", req.params.reg)
        //var regex = new RegExp(req.params.reg, 'i');
        try {
            const farms = await Farm.find({ region: req.params.reg }).sort({ "update_at": -1 }).sort({ "created_at": -1 }).limit(20);
            if (!farms) {
                return res.status(404).send();
            }
            return res.send(farms);
        } catch (e) {
            res.status(500).send();
        }
    });

router
    .get('/api/recherche', async (req, res, next) => {
        try {
            let orQuery = { $or: [] }
            let andQuery = { $and: [] }
            let oldVal = 0;

            Object.entries(req.query).forEach(function (keyVal, numEntries) {
                if (Array.isArray(keyVal[1])) {
                    keyVal[1].forEach(function (val) {
                        if (oldVal == numEntries) {
                            orQuery["$or"].push({ [keyVal[0]]: val })
                            andQuery["$and"].push(orQuery);
                        }
                        else {
                            orQuery = { $or: [] };
                            orQuery["$or"].push({ [keyVal[0]]: val });
                            andQuery["$and"].push(orQuery);
                            oldVal = oldVal + 1;
                        }
                    })
                }
                else {
                    console.log("not an array");
                    if (oldVal == numEntries) {
                        orQuery["$or"].push({ [keyVal[0]]: keyVal[1] });
                        andQuery["$and"].push(orQuery);
                    }
                    else {
                        orQuery = { $or: [] };
                        orQuery["$or"].push({ [keyVal[0]]: keyVal[1] });
                        andQuery["$and"].push(orQuery);
                        oldVal = oldVal + 1;
                    }
                }
            });

            let query = Farm.find(andQuery).sort({ "createdOn": -1 });

            // 3) Pagination
            // const page = req.query.page * 1 || 1;
            // const limit = req.query.limit * 1 || 4;
            // const skip = (page - 1) * limit;
            // if (req.query.page) {
            //     const numFarms = await Farm.countDocuments();
            //     if (skip >= numFarms) throw new Error('Page introuvable');
            // }
            //EXECUTE QUERY
            const farms = await query;

            return res.send(farms)
        } catch (e) {
            throw new Error(e)
        }
    })

router
    .get('/api/checkLikeCouterAndIncrement', async (req, res, next) => {
        try {
            const farm = await Farm.findById(req.query.farmId).exec();

            if (farm) {
                const exist = farm.ipAdresses.filter(val =>
                    val.localeCompare(req.query.ipAdress) == 0
                );
                console.log("it lives ", exist.length);
                if (exist.length == 0) {
                    let ipAdresses = farm.ipAdresses;
                    ipAdresses.push(req.query.ipAdress);
                    await Farm.findByIdAndUpdate(req.query.farmId, {
                        $set: {
                            "nbLike": farm.nbLike + 1,
                            "ipAdresses": ipAdresses,
                        }
                    }).exec();
                    let updtLike = farm.nbLike + 1;
                    return res.send(updtLike.toString());
                }
                else {
                    return res.status(200).send(farm.nbLike.toString());
                }
            }
            else return res.sendStatus(404).send();
        } catch (e) {
            res.sendStatus(500).send();
        }
    });

module.exports = router;