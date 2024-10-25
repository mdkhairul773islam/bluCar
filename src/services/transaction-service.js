/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

class TransactionService {
  /**
   * Get all transactions
   * @returns
   */
  async getAllTransactions() {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/partytransactions`
    )

    return data
  }

  /**
   * Get transaction by Id
   * @returns
   */
  async getByTransactionId(transactionId) {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/partytransactions/${transactionId}`
    )
  }

  /**
   *To Add a transaction
   * @returns
   */
  async addTransaction(newTransaction) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/partytransactions`,
      newTransaction
    )

    return res
  }

  /**
   *To Update a Transaction
   * @returns
   */
  async updateTransaction(transactionId, updateTransactionData) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/partytransactions/${transactionId}`,
      updateTransactionData
    )

    return res
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteTransaction(transactionId) {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/partytransactions/${transactionId}`
    )

    return res
  }
}

export default new TransactionService()
