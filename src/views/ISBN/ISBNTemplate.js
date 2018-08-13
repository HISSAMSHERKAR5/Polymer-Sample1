import { html } from '@polymer/polymer/polymer-element.js';
export const TEMPLATE=html`
<style include="shared-styles">
  :host {
    display: block;
    padding: 10px;
  }

  :root {
    /* Set custom property (variables) */
    --paper-tabs-selection-bar-color: red;
    /* Set mixin */
    --paper-tabs: {   
      
    };
  }
</style>

<div class="card">
  <div class="left">
  <div class="col-3 col-first pdp-details">
  <div class="pdp-details-row pdp-book-cover">
      <div class="book-img-7">
          <img class="book-cover" itemprop="image" src="{{coverImage}}"
              alt="Chemistry 4th edition 9780134112831 0134112830" onerror="this.src='//cs.cheggcdn.com/covers2/imagenalarge.gif'">
      </div>                
  </div>   
          
  <span class="textbook-solution-icon">
      <a class="textbook-solution-link" href="{{data.pathTo}}" target="_blank">{{data.title}}</a>
  </span>
  <div class="pdp-details-row clearfix">
      <span class="pdp-details-label">Contributors:</span>
      {{contributors}}
  </div>
  <div class="pdp-details-row clearfix">
      <span class="pdp-details-label">ISBN:</span>
      {{data.isbn}}
  </div>
  <div class="pdp-details-row clearfix">            
     <span class="pdp-details-label">Year:</span>
      {{date}}            
  </div>
</div>
  </div>
  <div class="right">
      <div >  
              <paper-tabs class="paper-tabs-class" selected="{{selected}}">
                  <paper-tab class="paper-tab-class">
                    <div class="purchase-option-tab-container">
                        <div class="tab-label">Rent</div>
                        <div class="tab-subtext">From $37.49</div>
                    </div>
                  </paper-tab>
                  <paper-tab class="paper-tab-class">
                  <div class="purchase-option-tab-container">
                        <div class="tab-label">eTextBook</div>
                        <div class="tab-subtext">From $66.49</div>
                    </div>
                  </paper-tab>
                  <paper-tab class="paper-tab-class">
                  <div class="purchase-option-tab-container">
                        <div class="tab-label">Buy</div>
                        <div class="tab-subtext">From $166.49</div>
                    </div>
                  </paper-tab>
                  <paper-tab class="paper-tab-class">
                  <div class="purchase-option-tab-container">
                        <div class="tab-label">Textbook Solutions Only</div>
                        <div class="tab-subtext">$37.49/mo</div>
                    </div>
                  </paper-tab>
              </paper-tabs>
              <iron-pages class="tab-pages-class" selected="{{selected}}">
                  <div class="tab-page-class">
                    <div id="mainrent" class="clearfix">
                            <div  id="rentright" class="right">
                                 <rent-view data="{{rent}}"></rent-view>
                            </div>
                            <div  id="rentleft" class="left">
                                <div>
                                    
                                 </div>
                            </div>
                    </div>
                  </div>
                  <div class="tab-page-class">
                        <div id="electronicmain" class="clearfix">
                                    <div  id="electronicright" class="right">
                                        <electronic-view data="{{electronic}}"></electronic-view>
                                    </div>
                                    <div  id="left" class="left">
                                        <div>
                                            
                                        </div>
                                    </div>
                            </div>
                  </div>
                  <div class="tab-page-class">
                    <div id="buymain" class="clearfix">
                            <div  id="buyright" class="right">
                                <buy-view data="{{buy}}"></buy-view>
                            </div>
                            <div  id="buyleft" class="left">
                                <div>
                                    
                                </div>
                            </div>
                    </div>                  
                  </div>
                  <div class="tab-page-class">
                    <div id="solutionsmain" class="clearfix">
                            <div  id="solutionsviewright" class="right">
                                <solutions-view data="{{solutions}}"></solutions-view>
                            </div>
                            <div  id="solutionsleft" class="left">
                                <div>
                                    
                                </div>
                            </div>
                    </div> 
                  </div>
              </iron-pages>
      </div>
  </div>
  <div class="clearfix"></div>
</div>
`;