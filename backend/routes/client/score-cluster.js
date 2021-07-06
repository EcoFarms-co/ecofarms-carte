const express = require('express')
const router = new express.Router()
const scoreClusterService = require('../../service/score-cluster-service')
const clusterService = require('../../service/cluster-service')
const farmService = require('../../service/farm-service')

// Get all clusters 
router.get('/back/score-clusters', (req, res) => {
    scoreClusterService.getAll(req.cookies.token, (results) => {
        res.render('back-score-clusters', {
            scoreClusters: results
        })
    });
})

// Return cluster form
router.get('/back/score-clusters/create', (req, res) => {
    clusterService.getAll(req.cookies.token, clusters => {
        farmService.getAll(req.cookies.token, farms => {
            res.render('back-score-clusters-create', {
                clusters: clusters,
                farms: farms
            })
        })
    })
})

// Handle cluster form post action 
router.post('/back/score-clusters/create', (req, res) => {
    try{
        scoreClusterService.create( req.body, req.cookies.token,(error) => {
            if (!error){
                return  res.redirect('/back/score-clusters')
            }
            return res.render('back-score-clusters-create', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        })
    }catch(e){
        throw new Error(e)
    }
})

// render cluster form for update 
router.get('/back/score-clusters/:id/update', (req, res) => {
    scoreClusterService.get(req.params.id, req.cookies.token, (result) => {
        clusterService.getAll(req.cookies.token, clusters => {
            for(let cluster of clusters){
                if (cluster._id === result.clusterRef){
                    cluster.selected = true
                }
            }
            farmService.getAll(req.cookies.token, farms => {
                for(let farm of farms){
                    if (farm._id === result.farmRef){
                        farm.selected = true
                    }
                }
                res.render('back-score-clusters-update', {
                    scoreCluster: result,
                    clusters: clusters,
                    farms: farms
                })
            })
          
        })
  

    })
})

// Handle cluster update 
router.post('/back/score-clusters/:id/update', (req, res) => {
    try{
        scoreClusterService.update(req.params.id, req.body, req.cookies.token, (error) => {
            if (error){
                res.render('back-score-clusters-update', {
                    errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
                })
            }
            return  res.redirect('/back/score-clusters')
        })
    }catch(e){
        throw new Error(e)
    }

})

// render cluster form for update 
router.get('/back/score-clusters/:id/delete', (req, res) => {
    scoreClusterService.delete(req.params.id, req.cookies.token, (error) => {
        if (error){
            console.log(error)
            res.render('back-score-clusters', {
                errorMessage: 'Une erreur est survenue. Veillez rééssayer svp! '
            })
        }
        return  res.redirect('/back/score-clusters')
    })
})

module.exports = router