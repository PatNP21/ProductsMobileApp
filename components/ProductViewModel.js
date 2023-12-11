import axios from 'axios'

export default class ProductViewModel {
    constructor() {}

    getAllProducts() {
        //return axios.get(serverURL/products)
    }

    getProduct(name) {
        //return axios.get(serverURL/products/${name})
    }

    addProduct(data) {
        //return axios.post(serverURL/products)
    }

    editProduct(data) {
        //return axios.put(serverURL/products/${name})
    }

    deleteProduct(name) {
        //return axios.delete(serverURL/products/${name})
    }
}