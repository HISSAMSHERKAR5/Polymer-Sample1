import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-ajax/iron-ajax.js';


import {TEMPLATE} from './BuyTemplate';

class BuyView extends PolymerElement {       
  static get template() {
    return TEMPLATE;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        reflectToAttribute: true,
        observer: 'dataChanged'
      }
    };
}

  dataChanged(response) {
    console.log("dataChanged",response);    
  }

   ready() {
       super.ready();    
  }  
}

window.customElements.define('buy-view', BuyView);
