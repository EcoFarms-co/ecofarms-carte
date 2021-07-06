const express = require('express');
const router = new express.Router();
const authService = require('../../service/auth-service');
const userService = require('../../service/user-service');

router.get('/back/users', (req, res) => {
    userService.getAll(req.cookies.token, (results) => {
        res.render('back-users', {
            users: results
        })
    });
})

router.get('/back/users/create', (req, res) => {
    res.render('back-users-create',
        { errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp ' }
    )
});

router.get('/back/users/update/:id', (req, res) => {
    userService.get(req.params.id, req.cookies.token, (result) => {
        res.render('back-users-update', {
            user: result
        })
    })
})

router.post('/back/users/update/:id', (req, res) => {
    try {
        userService.update(req.params.id, req.body, req.cookies.token, (error) => {
            if (error) {
                res.render('back-users-update', {
                    errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp '
                })
            }
            return res.redirect('/back/users')
        })
    } catch (e) {
        throw new Error(e)
    }
})

router.post('/back/users/create', (req, res) => {
    try {
        userService.create(req.body, req.cookies.token, (error) => {
            if (error) {
                return res.redirect('/back/users')
            }
            return res.render('back-users-create', {
                errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp! '
            })
        })
    } catch (e) {
        throw new Error(e)
    }
})

router.get('/back/users/:id/delete', (req, res) => {
    userService.delete(req.params.id, req.cookies.token, (error) => {
        if (error) {
            return res.redirect('back/users', {
                errorMessage: 'Une erreur est survenue. Veuillez rééssayer svp! '
            })
        }
        return res.redirect('/back/users')
    })
})

// router.post('/back/login', (req, res) => {

//     authService.login(req.body, req.cookies.token, (error, token) => {
//         if (error) {
//             return res.redirect('/back/login', { errorMessage: error })
//         }
//         res.cookie('token', token);
//         return res.redirect('/back/farms')
//     })
// })

// router.get('/back/logout', (req, res) => {
//     res.clearCookie('token');
//     return res.redirect("/back/login")
// })

module.exports = router