const Farm = require('../models/farm');

exports.getCheckLikeCounter = async (req, res, next) => {
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
}
