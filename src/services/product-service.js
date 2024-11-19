import axios from 'axios'

class ProductService {
  /**
   * Get all products
   * @returns
   */
  async getAllProducts() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    )

    return data
  }

  /**
   * Get product by Id
   * @returns
   */
  async getByProductId(productId) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    )
  }

  /**
   *To Add a product
   * @returns
   */
  async addProduct(newProduct) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
      newProduct
    )

    return res
  }

  /**
   *To Update a Product
   * @returns
   */
  async updateProduct(productId, updateProductData) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
      updateProductData
    )

    return res
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteProduct(productId) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    )

    return res
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService()
