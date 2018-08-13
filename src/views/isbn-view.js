import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../styles/shared-styles.js';
import './buy/buy-view.js';
import './rent/rent-view.js';
import './solutions/solutions-view.js';
import './electronic/electronic-view.js';
import {isbnURL} from '../utils/Constants';
import {TEMPLATE} from './ISBN/ISBNTemplate';

class ISBNView extends PolymerElement {       
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
      selected:{
        type: Number,
        reflectToAttribute: true,
        value:0,
        observer: 'tabChanged'    
      },
      isbn:{
        type: String,
        reflectToAttribute: true
      },
      contributors:{
        type: String,
        reflectToAttribute: true        
      },
      rent:{type: Object,reflectToAttribute: true,value:""},
      buy:{type: Object,reflectToAttribute: true,value:""},
      electronic:{type: Object,reflectToAttribute: true,value:""},
      solutions:{type: Object,reflectToAttribute: true,value:""},

    };
  }

  getISBNAuthors(){
    console.log("getISBNAuthors",this.data); 
    this.contributors= (this.data && this.data.contributors && this.data.contributors.length>0)?this.data.contributors.toString():"";
  }

  tabChanged(change) {
    console.log("tabChanged",change); 
     
   }

  dataChanged(response) {
    console.log("dataChanged",response); 
    if(this.isbn)
    {
      this.coverImage="https://d1re4mvb3lawey.cloudfront.net"+this.isbn+"/cover.jpg"; 
      this.getISBNAuthors();
      this.date=(response && response.date)?response.date:"";
      if(response && response.toc && response.toc.length>0){
        this.rent=response.toc[0]?response.toc[0]:"";
        this.buy=response.toc[2]?response.toc[2]:"";
        this.electronic=response.toc[1]?response.toc[1]:"";
        this.solutions=response.toc[3]?response.toc[3]:"";
      }else{
        this.rent="";
        this.buy="";
        this.electronic="";
        this.solutions="";
      }
   }
  }

   ready() {
       super.ready();    
  }
   _handleResponse(response) {
    console.log("_handleResponse",response);  
   }
   _handleError(error) {
    console.log("_handleError",error);  
   }
}

window.customElements.define('isbn-view', ISBNView);
