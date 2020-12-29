const products = require('./products.json')

const getProducts = (req, res) => {
    if(req.query.price){
        const product = products.filter(
            (val) => val.price >= +req.query.price
        )
        return res.status(200).send(product)
    }
    res.status(200).send(products)
}

module.exports = getProducts;