// Start model.js

let itemController = (() => {

    let arrItems = [
        {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
        {"pair":"GBP USD", "buy":1.28495, "sell":1.2836},
        {"pair":"GBP CHF", "buy":1.27378, "sell":1.27147},
        {"pair":"EUR SEK", "buy":9.632, "sell":9.6055},
        {"pair":"USD JPY", "buy":110.467, "sell":110.417},
        {"pair":"EUR JPY", "buy":120.589, "sell":120.491}
    ];

    // Course dynamic states
    let storage = {

        dynamic: [],

        setDynamicData: function(i, randomBuy, randomSell) {
            // Init storage.dynamic
            if(this.dynamic.length != arrItems.length){
                for(let c=0; c<arrItems.length; c++ ){
                    this.dynamic.push({indexBuy: 1, indexSell: 1, buy: 0, sell: 0});
                }
            }

            // Check increase/decrease index comparing to current one
            this.dynamic[i].buy < randomBuy ? this.dynamic[i].indexBuy = 1 : this.dynamic[i].indexBuy = 0;
            this.dynamic[i].sell < randomSell ? this.dynamic[i].indexSell = 1 : this.dynamic[i].indexSell = 0;
            this.dynamic[i].buy = randomBuy;
            this.dynamic[i].sell = randomSell;
        },

        getDynamicData: function(i){
            if(this.dynamic[i]){
                return this.dynamic[i].indexBuy;
            }
        }
    };
                                                        // ------- Get Random percent
    function getRandom(e){
        let num = Math.floor(Math.random() * 10) + 1;           // 1 - 10
        let upDown = Math.round((Math.random() * 1) + 0) === 0; // up/down
        let percent = e * (num / 100);
        if(upDown){
            return e + percent;
        }else {
            return e - percent;
        }
    }
                                                        // ------- Get Random Buy/Sell amount
    function getRandomBuySell(i){
        let random = {};
        random.buy = getRandom(arrItems[i].buy);
        random.sell = getRandom(arrItems[i].sell);
        return random;
    }

    function storeCourseDymanic(i){
        let randomData = getRandomBuySell(i);
        storage.setDynamicData(i, randomData.buy, randomData.sell);
    }

    return {
        arrItems: arrItems,
        getRandom: getRandom,
        storage: storage,
        getRandomBuySell: getRandomBuySell,
        storeCourseDymanic: storeCourseDymanic
    };

})();

export default itemController;
