/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

class SupplierService {
  /**
   * Get all suppliers
   * @returns
   */
  async getAllSuppliers() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/suppliers`
    )

    return data
  }

  /**
   * Get supplier by Id
   * @returns
   */
  async getBySupplierId(supplierId) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/suppliers/${supplierId}`
    )
  }

  /**
   *To Add a supplier
   * @returns
   */
  async addSupplier(newSupplier) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/suppliers`,
      newSupplier
    )

    return res
  }

  /**
   *To Update a Supplier
   * @returns
   */
  async updateSupplier(supplierId, updateSupplierData) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/suppliers/${supplierId}`,
      updateSupplierData
    )

    return res
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteSupplier(supplierId) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/suppliers/${supplierId}`
    )

    return res
  }
}

export default new SupplierService()
