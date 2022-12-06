const api = require('./kucoin');
const config = {
    apiKey: '638cb546fdfee40001fced50',
    secretKey: 'd418fe02-611e-4a93-9f95-47cfa286b930',
    passphrase: 'Kaveh@123',
    environment: 'live',
  };
  api.init(config);
(async () => {
    console.log(await api.balance());
})();

(async () => {
    // console.log(await api.getTradeBaseFee(''));
    console.log(await api.getBaseFee(1));
})();

(async () => {
    const params = {
        symbols: 'BTC-USDT'
    }
    console.log(await api.getActualTradeFee(params));
})();