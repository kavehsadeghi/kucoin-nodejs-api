const api = require('./kucoin');
const config = {
    apiKey: '638cb546fdfee40001fced50',
    secretKey: 'd418fe02-611e-4a93-9f95-47cfa286b930',
    passphrase: 'Kaveh@123',
    environment: 'live',
  };
  api.init(config);
/*
(async () => {
    params = {
        topic: "allTicker",
        // symbols: "BTC,",
    }
    api.initSocket(params, (data) => {
        console.log(data);
    })
})();

(async () => {
    const params = {
        base: 'EUR'
    };
    console.log(await api.getFiatPrice(params));
})();

(async () => {
    console.log(await api.getCurrencies());
})();

(async () => {
    const data = await api.getCurrency('BTC');
    console.log(data.data);
})();

(async () => {
    console.log(await api.getAllTickers());
})();

(async () => {
    console.log(await api.getTicker('BTC-USDT'));
})();

(async () => {
    console.log(await api.getSymbols());
})();

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

(async () => {
    // market buy request
    const params = {
        clientOid: 'AF-1',
        side: 'buy',
        symbol: 'XRP-USDT',
        type: 'market',
        remark: 'test',
        size: "35",
        tradeType: "TRADE"
    }
    console.log(await api.placeOrder(params));
})();

(async () => {
    // market sell request
    const params = {
        clientOid: 'AF-1',
        side: 'sell',
        symbol: 'XRP-USDT',
        type: 'market',
        remark: 'test',
        size: "35",
        tradeType: "TRADE"
    }
    console.log(await api.placeOrder(params));
})();*/