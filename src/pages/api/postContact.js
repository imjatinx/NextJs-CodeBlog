import * as fs from 'fs';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request

        fs.writeFile("contactData/contact.json", JSON.stringify(req.body), () => { })
        res.status(200).json({ Post: 'post method' });

    } else {
        // Handle any other HTTP method
        res.status(200).json({ Get: 'get method' });
    }
}