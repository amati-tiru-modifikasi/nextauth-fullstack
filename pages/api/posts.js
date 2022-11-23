import { getSession } from "next-auth/react"

export default async function handler(req, res) {

    const session = await getSession({ req })

    console.log(session);

    if (req.method === 'POST') {
      // Process a POST request
    } else {
      // Handle any other HTTP method
    }
  }