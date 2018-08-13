import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-ajax/iron-ajax.js';


import {TEMPLATE} from './SolutionsViewTemplate';

class SolutionsView extends PolymerElement {       
  static get template() {
    return TEMPLATE;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        reflectToAttribute: true,
        observer: 'dataChanged'
      },
      file:{type: String,reflectToAttribute: true,value:""},
      first:{type: String,reflectToAttribute: true,value:""},
      num:{type: String,reflectToAttribute: true,value:""},
      title:{type: String,reflectToAttribute: true,value:""},
    };
}

dataChanged(response) {
  console.log("dataChanged",response);  
  if(response.file)  this.file=response.file; else this.file="";
  if(response.first)  this.first=response.first; else this.first="";
  if(response.num)  this.num=response.num; else this.num="";
  if(response.title)  this.title=response.title; else this.title="";
}

   ready() {
       super.ready();    
  }  
}

window.customElements.define('solutions-view', SolutionsView);
