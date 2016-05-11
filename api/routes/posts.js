import Express from 'express';
import wrap from 'express-async-wrap'; // can use async, await

const Router = new Express.Router();

export default [

  // See in app/redux/modules/posts/posts
  Router.get('/api/posts', wrap(async function(req, res) {
    console.log(req.query.testParam); // example

    res.json({
      posts: [
        {
          id: '1',
          text: 'example 1',
        },
        {
          id: '2',
          text: 'example 2',
        },
        {
          id: '3',
          text: 'example 3',
        },
      ],
    });
  })),
];
