import axios from 'axios';
import { BACKEND_URL } from '../config';


export async function deleteContent(contentId) {
  try {
    const response = await axios.delete(
      `${BACKEND_URL}/api/v1/content`, 
      {
        headers: {
          'authorization': `${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
        },
        data: { contentId }, // Sending contentId in the request body
      }
    );

    // Handle successful response
    console.log(response.data.message); // "Item Deleted"
  } catch (error) {
    console.error('Error deleting content:', error);
  }
}
