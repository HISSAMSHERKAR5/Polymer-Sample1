/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../assets/my-icons.js';
import './isbn-view.js';
import './my-view1.js';
import './my-view2.js';
import './my-view3.js';
import './my-view404.js';
import {getISBN_URL} from '../utils/Constants';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        .row{
          margin: 0 1.0833333333333333333333333333333333333333%;
        }
        .row:after {
          content: '.';
          display: block;
          clear: both;
          height: 0;
          font-size: 0;
          visibility: hidden;
          overflow: hidden;
      }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <iron-ajax
      id="isbnService2"
      url = "{{isbnURL}}"
      method="get"
      content-type="application/json"
      handle-as="json"      
      on-response="_handleResponse"
      on-error="_handleError">
  </iron-ajax>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="view1" href="[[rootPath]]view1">View One</a>
            <a name="view2" href="[[rootPath]]view2">View Two</a>
            <a name="view3" href="[[rootPath]]view3">View Three</a>
            <a name="B1" href="[[rootPath]]isbnView/pg1017">isbn:pg1017</a>
            <a name="B2" href="[[rootPath]]isbnView/pg1018">isbn:pg1018</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">My App</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="view1" ></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>            
            <isbn-view isbn={{isbn}} name="isbnView" data={{isbnData}} route="{{subroute}}"></isbn-view>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      isbn:{
        type: String,
        reflectToAttribute: true
      },
      isbnData:{
          type:Object,
          reflectToAttribute: true,
          observer: '_isbnDataUpdated'
      }
    };
  }

  
  static get observers() {
    return [
      '_routePageChanged(routeData,routeData.page,subroute)'
    ];
  }

  _routePageChanged(routeData,page,subroute) {
     // console.log("page",routeData,page,subroute);
    if (!page) {
      this.page = 'view1';
    } else if (['view1', 'view2', 'view3'].indexOf(page) !== -1) {
      this.page = page;
    } else if (['isbnView'].indexOf(page) !== -1) { 
     if(subroute && subroute.path){
        this.page = 'isbnView';
        //here we call the ajax service to get the ISBN data 
        console.log(subroute.path,this.$);
        this.isbn=subroute.path;
        this.$.isbnService2.url=getISBN_URL(subroute.path);
        this.$.isbnService2.generateRequest();
      }else{
        this.page = 'view404';
      }
     } else {
      this.page = 'view1';
    }
    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }
  ready(){
    super.ready();    
}

_handleResponse(event,data) {
    console.log("_handleResponse",data.response);  
    this.isbnData=data.response;
   }
   _handleError(error) {
    console.log("_handleError",error); 
    this.isbnData=null; 
   }
  _pageChanged(page) {
   console.log("_pageChanged",page);    
  }
}

window.customElements.define('my-app', MyApp);
