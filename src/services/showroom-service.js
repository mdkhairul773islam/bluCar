import axios from 'axios'

class ShowroomService {
  /**
   * Get all showrooms
   * @returns
   */
  async getAllShowrooms() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/showrooms`
    )

    return data
  }

  /**
   * Get showroom by Id
   * @returns
   */
  async getByShowroomId(showroomId) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/showrooms/${showroomId}`
    )
  }

  /**
   *To Add a showroom
   * @returns
   */
  async addShowroom(newShowroom) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/showrooms`,
      newShowroom
    )

    return res
  }

  /**
   *To Update a Showroom
   * @returns
   */
  async updateShowroom(showroomId, updateShowroomData) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/showrooms/${showroomId}`,
      updateShowroomData
    )

    return res
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteShowroom(showroomId) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/showrooms/${showroomId}`
    )

    return res
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ShowroomService()
