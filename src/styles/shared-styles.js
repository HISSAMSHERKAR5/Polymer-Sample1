/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      .paper-tabs-class {
        height: 60px;                
              border-bottom: 0;
              padding: 0 0;                
              cursor: pointer;
              vertical-align: middle;                
              display: table-cell;
              text-align: center;
     }

     .paper-tab-class{
        border: 1px solid rgb(235, 113, 0);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        height: 100%;
       width:135px;
     }
     .iron-selected{
      background:rgb(235, 113, 0);
      border: 1px solid rgb(235, 113, 0);
     }
     .tab-page-class  .iron-selected{
      background:#ff00ff;
      border: 11px solid rgb(235, 113, 0);
     }

     .tab-pages-class{
       
      border: 1px solid rgb(235, 113, 0);
  padding-top: 0;
  min-height: 315px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;

    }

      .right{
        float: left;
        width:70%;
        margin:10px;
      }
      .left{
        float: left;
        width:17%
      }
      .clearfix{
        clear:both
    }
    .pdp-details-row{
      width: initial;
      padding: 5px 0;
      overflow: hidden;
      float:left;
      font-family:""Aspira-Bold","Helvetica","Arial",Sans-serif";
    }
    .pdp-details-value{
      disply:block;
      
    }
    .pdp-details-label{
      disply:block;
      font-weight: bold;
    }

    .tab-label{
      color: #000000;
    }
.tab-subtext{
  color: #000000;
}

.purchase-options-content .purchase-option-block .purchase-option h1,.purchase-options-content .purchase-option-block .purchase-option .purchase-option-price{
  display:inline-block;
  position:relative;
  top:1.2em;
  padding:5px 0;
  font-size:24px;
  font-weight:bold
}
.purchase-options-content .options-left-wrapper,.purchase-options-content .options-right-wrapper{
  float:left;
  width:50%;
  padding:30px;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box
} 

.purchase-options-content .purchase-option-block{
  position:relative
}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
