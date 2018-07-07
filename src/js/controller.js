'use strict';
// import jQuery from 'jquery';
import bootstrap from 'bootstrap';

import UIController from './ui.js';

let itemsIncarousel = 3;

let controller = (() => {

    let displayItems =()=> {
        UIController.displayCarousel(itemsIncarousel);
        UIController.buildItemList();
    };

    return {
        init: function(){
            console.log('Init');
            displayItems();
        }
    };

})();

controller.init();
















