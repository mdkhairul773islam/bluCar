import axios from 'axios'

class CategoryService {
  /**
   * Get all category
   * @returns
   */
  async getAllCategories() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`
    )

    return data
  }

  /**
   * Get category by Id
   * @returns
   */
  async getByBrandId(categoryId) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`
    )
  }

  /**
   *To Add a category
   * @returns
   */
  async addCategory(newCategory) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`,
      newCategory
    )

    return res
  }

  /**
   *To Update a Category
   * @returns
   */
  async updateCategory(categoryId, updateCategoryData) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`,
      updateCategoryData
    )

    return res
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteCategory(categoryId) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`
    )

    return res
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoryService()
