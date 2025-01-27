const express = require('express');
const authProduct = require('../middlewares/authProduct');
const router = express.Router();

router.get('/', authProduct, (req, res)=>{
    return res.status(201).json([
        {
            name : 'tv',
            price : 9000
        },
        {
            name : 'grige',
            price : 91000
        },
        {
            name : 'cup',
            price : 9000
        },
        {
            name : 'watch',
            price : 900000
        },

    ])

})

module.exports = router;