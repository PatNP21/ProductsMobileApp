export default class ProductModel {

    constructor(name, revision, class_, availableAmount, price, isAvailable) 
    {
        this.name = name,
        this.revision = revision,
        this.class = class_,
        this.availableAmount = availableAmount,
        this.price = price,
        this.isAvailable = isAvailable
    }

    getProductData() {
        return ({
            "name": this.name,
            "revision": this.revision,
            "class": this.class,
            "availableAmount": this.availableAmount,
            "price": this.price,
            "isAvailable": this.isAvailable
        })
    }
}