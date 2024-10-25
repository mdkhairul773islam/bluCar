import axios from 'axios'

class BrandService {
  /**
   * Get all brands
   * @returns
   */
  async getAllBrands() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/brands`
    )

    return data
  }

  /**
   * Get brand by Id
   * @returns
   */
  async getByBrandId(brandId) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/brands/${brandId}`
    )
  }

  /**
   *To Add a brand
   * @returns
   */
  async addBrand(newBrand) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/brands`,
      newBrand
    )

    return res
  }

  /**
   *To Update a Brand
   * @returns
   */
  async updateBrand(brandId, updateBrandData) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/brands/${brandId}`,
      updateBrandData
    )

    return res
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteBrand(brandId) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/brands/${brandId}`
    )

    return res
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BrandService()
