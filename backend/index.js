/*
par: ETHUSDT
min: 4,059.62
max: 4,385.59
*/
const {Telegraf} = require('telegraf');
const bot = new Telegraf();
const WebSocket = require('ws');
const connect = 'wss://stream.binance.com:9443/ws/';
const pair = "ethusdt";
const param1 = "@kline_";
const param2 = "1h";

const vMax =  parseFloat('4,385.59');
const vMin =  parseFloat('4,059.62');
const ws = new WebSocket(connect + pair + param1+param2);
//"id": 1517234767,

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
const valor = parseFloat(data.k.c);
    console.log('Last Quote: '+data.k.c);
let status = data.k.x?'Candle Close':'Candle Open';
    console.log( data.k.x?'Candle Close':'Candle Open')  ;
   // data.k.x?console.log(data):'';



   if(valor >= vMax){
     console.log('Vender!');
   }else if (valor < vMin){
    console.log('Comprar!');
   }



}
// https://binance-docs.github.io/apidocs/voptions/en/#push-websocket-account-info
const result={          //https://binance-docs.github.io/apidocs/voptions/en/#payload-candle
    e: 'kline',                 // event type
    E: 1637713967939,           // event time
    s: 'ETHUSDT',               // Option trading pair
    k: {                
      t: 1637712000000,          // Kline start time
      T: 1637715599999,          // Kline close time
      s: 'ETHUSDT',             // Option trading pair
      i: '1h',                  // candle period
      f: 682927569,             // first trade ID
      L: 682948460,             // last trade ID
      o: '4339.45000000',       // open
      c: '4363.66000000',       // close
      h: '4373.94000000',       // high
      l: '4338.56000000',       // low
      v: '13750.74100000',      // volume
      n: 20892,                 // number of trades
      x: false,                 // current candle has been completed Y/N
      q: '59918380.08609400',   // completed trade amount
      V: '6637.72690000',       // taker completed trade volume
      Q: '28921136.64816200',    // taker trade amount
      B: '0'                        
    }
  };


  /* 
  {
  e: 'kline',
  E: 1637715840002,
  s: 'ETHUSDT',
  k: {
    t: 1637715780000,
    T: 1637715839999,
    s: 'ETHUSDT',
    i: '1m',
    f: 682965953,
    L: 682966346,
    o: '4358.04000000',
    c: '4355.75000000',
    h: '4358.87000000',
    l: '4355.68000000',
    v: '228.57920000',
    n: 394,
    x: true,
    q: '995981.25248000',
    V: '40.91280000',
    Q: '178278.21014800',
    B: '0'
  }
}
 */