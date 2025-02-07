import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../utils/db'; // Adjust the path to your database instance

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch data from the database
    const history = await db.execute('SELECT * FROM "aiOutput"'); // Use your actual table name
    // console.log(history);

    // Ensure the response has the structure expected by the client

    res?.status(200).json(history); // Respond with the wrapped data
  } catch (error: any) {
    console.error('Error fetching data:', error.message); // Log the error
    res?.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}
