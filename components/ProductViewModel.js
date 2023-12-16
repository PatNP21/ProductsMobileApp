import ProductModel from "./models/ProductModel"

export default class ProductViewModel {

    constructor () {
        this.product = new ProductModel("", "", "", 0, 0, false)
    }

    provideDataForTheProduct(name, revision, class_, availableAmount, price, isAvailable) {
        this.product.name = name
        this.product.revision = revision
        this.product.class = class_
        this.product.availableAmount = availableAmount
        this.product.price = price
        this.product.isAvailable = isAvailable
    }

    getProductData() {
        return this.product
    }
}