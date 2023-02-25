// http://localhost:3000/api/getAllBlog

import * as fs from 'fs';

export default async function handler(req, res) {
  let blogs = await fs.promises.readdir('blogdata')
  let allBlogs = [];
  for (let index = 0; index < blogs.length; index++) {
    let blogItem = await fs.promises.readFile((`blogdata/${blogs[index]}`), 'utf-8')
    allBlogs.push(JSON.parse(blogItem));
  }
    res.status(200).json(allBlogs)
}
