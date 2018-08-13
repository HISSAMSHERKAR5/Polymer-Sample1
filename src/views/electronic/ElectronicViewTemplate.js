import { html } from '@polymer/polymer/polymer-element.js';
export const TEMPLATE=html`<div class="purchase-option-content">
<div class="options-left-wrapper">
<div class="purchase-option-block">
   <div class="purchase-option multi C-common-form" id="eggshell-17">
      <div class="buy-options">
         <div class="buy-option-block">
            <input type="radio" name="purchase-option" data-option-type="buy_used" data-label="Buy used: " data-price="166.49" data-catalogitemid="LBP-53235317" data-pricingid="ddde1c50-e430-4afa-b4ec-d63313e92991" data-catitemsource="" data-selected="1" checked="" id="eggshell-17-0" wtx-context="83457E31-481D-4A25-ACE9-2F686897D07D"><label for="eggshell-17-0" class="form-radio" tabindex="0">&nbsp;</label><label for="eggshell-17-0">Electronic used: </label>
            <div class="buy-option-price">$166.49</div>
         </div>
         <div class="buy-option-block">
            <input type="radio" name="purchase-option" data-option-type="buy_new" data-label="Buy new: " data-price="251.99" data-catalogitemid="LBP-53235317" data-pricingid="ade52729-d15d-42e3-9169-920a29deeb33" data-catitemsource="" data-selected="0" id="eggshell-17-1" wtx-context="1830109D-8949-4158-85FC-85DB1B04E427"><label for="eggshell-17-1" class="form-radio" tabindex="0">&nbsp;</label><label for="eggshell-17-1">Electronic new: </label>
            <div class="buy-option-price">$251.99</div>
         </div>
      </div>
      <div class="purchase-option-price">$166.49</div>
   </div>
</div>
<div class="purchase-option-list">
</div>
<div class="included-items-wrapper">
   <h2>Included with your book</h2>
   <ul class="included-items">
      <li>
         <din class="item">21-day Refund Guarantee</din>
         <a role="link" tabindex="0" class="helper-link">
            Learn More
            <span class="helper-tooltip">
            <div class="header" title="" role="button" aria-label="close">{{title}}</div>
            <div class="header">FIRST:{{first}}</div>
            <div class="header">Num:{{num}}</div>
            <div class="header">
            <a class="textbook-solution-link" href="{{file}}" target="_blank">File</a>
            </div>
         </span>
         </a>
      </li>
   </ul>
</div>
</div>
</div>`;