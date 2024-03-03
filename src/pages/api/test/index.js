import { get } from "@/lib/api";
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const response = await get('/user');
        const users = response;
        res.status(200).json(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users from Laravel API' });
      }
      break;
    // Implement other methods (POST for creating a new user, etc.) as needed
    default:
      res.setHeader('Allow', ['GET']); // Adjust this based on the methods you implement
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
