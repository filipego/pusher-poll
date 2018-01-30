const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: '465430',
  key: 'd34835ee6fc766307396',
  secret: 'e9ace7a6070455bca92e',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) =>{
  res.send('POLL');
})

router.post('/', (req, res) =>{
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });
  return res.json({ success: true, message: 'Thanks you for voting.' })
});

module.exports = router;
