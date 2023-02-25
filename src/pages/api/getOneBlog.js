// http://localhost:3000/api/getOneBlog?slug=learn-nodejs

import * as fs from 'fs';
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  fs.readFile(`blogdata/${req.query.slug}.json`, (err, data) => {
    try {
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      res.status(404).json({ error: 'Not found' });
    }
  })
}
