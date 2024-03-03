
export default function handler(req, res) {
    const {
      query: { id },
      method,
    } = req;
  
    switch (method) {
      case 'GET':
        // Handle GET request for user with specified ID
        // For demonstration, we're just returning the user ID
        res.status(200).json({ userId: id, name: "John Doe", message: "This is a sample user." });
        break;
      case 'PUT':
        // Handle PUT request (e.g., to update user information)
        res.status(200).json({ message: `User ${id} has been updated.` });
        break;
      // Add more cases for other HTTP methods here (POST, DELETE, etc.)
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  