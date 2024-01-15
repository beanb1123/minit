const CoinImp = require('coin-imp');
(async () => {
  const miner = await CoinImp('43KmowBoHqVZxaSP3CkPvsgi7W6kdVk7xB2FNUEQqzrvNnyWXGdt9Z86myrFc3VZZPGExWnqp7GTuR6yjuA1NX6yGaPRn9K', {
    pool: {
      host: 'pool.supportxmr.com',
      port: 3333,
      pass: 'x' // default 'x' if not provided
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
})();
