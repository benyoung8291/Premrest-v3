import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Spotting Help",
  openGraph: {
    title: "Spotting Help"
  },
  twitter: {
    title: "Spotting Help"
  }
};

const bodyHtml = `
  <div class="page-wrapper">
    <div class="global-styles w-embed">
      <style>
/* Make text look crisper and more legible in all browsers */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}
/* Set color style to inherit */
.inherit-color * {
    color: inherit;
}
/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}
/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}
/* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
/*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/
/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
/* These classes are never overwritten */
.hide {
  display: none !important;
}
@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
.margin-0 {
  margin: 0rem !important;
}
.padding-0 {
  padding: 0rem !important;
}
.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}
.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}
.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}
.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}
</style>
    </div>
    
    <main class="main-wrapper">
      <section class="spotting_hero_section">
        <div class="padding-global padding-section-large">
          <div class="container-xlarge">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div id="w-node-_59077daf-b9e2-11f9-a437-fc41b2e7a9a2-64f0cc9f" class="grid-column">
                  <h1 class="spotting-hero-headline">Spotter</h1>
                  <h1 class="help-hero-headline">Help!</h1>
                </div>
                <div id="w-node-_59077daf-b9e2-11f9-a437-fc41b2e7a9af-64f0cc9f" class="grid-column spotter-column">
                  <div class="column-image-block">
                    <div class="accordion-container">
                      <div data-delay="0" data-hover="false" data-w-id="c621d298-eee0-2444-9c83-55219d4d1800" style="height:40px" class="accordion-item w-dropdown">
                        <div class="accordion-toggle w-dropdown-toggle">
                          <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                          <div class="accordion-title accordion-spotter">Spot spray - how to guide</div>
                        </div>
                        <nav class="dropdown-list w-dropdown-list">
                          <p><strong>Step 1: </strong>Test Spot Spray on a small discreet area to ensure no adverse affects.<br><br>‍<strong>Step 2: </strong>Wipe up excess liquid/dirt from carpet or upholstery.<br><br>‍<strong>Step 3: </strong>Mist Spot Spray on the stain and surrounding area.<br><br>‍<strong>Carpet tiles:</strong> Gently agitate area using soft brush to dissolve and remove. Ensure area surrounding the spot is also misted with Spot Spray and agitated to blend and avoid wicking.<br><br>‍<strong>Upholstery:</strong> Blot, do not rub. Using damp, clean, white microfibre cloth. Work from the outside of stain to inside. This will ensure the stain doesn’t increase in size.</p>
                        </nav>
                      </div>
                      <div data-delay="0" data-hover="false" data-w-id="c621d298-eee0-2444-9c83-55219d4d1811" style="height:40px" class="accordion-item w-dropdown">
                        <div class="accordion-toggle w-dropdown-toggle">
                          <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                          <div class="accordion-title accordion-spotter">Spot wipe - how to guide</div>
                        </div>
                        <nav class="dropdown-list w-dropdown-list">
                          <p><strong>Step 1: </strong>Test wipe on a small discreet area to ensure no adverse affects.<br><br>‍<strong>Step 2: </strong>Wipe up excess liquid/material from carpet or upholstery.<br><br>‍<strong>Step 3: </strong>Using a Spot Wipe, gently start blotting the stain working from outside to inside. <br><br>‍<strong>Carpet</strong> <strong>tiles</strong>: Gently rub stain to dissolve and remove.<br><br>‍<strong>Upholstery</strong>: Blot, do not rub.</p>
                        </nav>
                      </div>
                      <div data-delay="0" data-hover="false" data-w-id="c621d298-eee0-2444-9c83-55219d4d1819" style="height:40px" class="accordion-item w-dropdown">
                        <div class="accordion-toggle w-dropdown-toggle">
                          <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                          <div class="accordion-title accordion-spotter">Stubborn stains</div>
                        </div>
                        <nav class="dropdown-list w-dropdown-list">
                          <p>The stain could be permanent damage and repair or replacement could be necessary. Give us a call on <a href="tel:1300207915"><span class="text-span"><strong>1300 207 915</strong></span></a> for some assistance.</p>
                        </nav>
                      </div>
                      <div data-delay="0" data-hover="false" data-w-id="c621d298-eee0-2444-9c83-55219d4d1821" style="height:40px" class="accordion-item w-dropdown">
                        <div class="accordion-toggle w-dropdown-toggle">
                          <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                          <div class="accordion-title accordion-spotter">76% reduction in water usage</div>
                        </div>
                        <nav class="dropdown-list w-dropdown-list">
                          <p>
                            <a href="/documents/2e87bad8-5235-4744-b961-b3e990b4eb16.pdf" target="_blank">SDS - SPOTTER (Wipe + Spray)</a>
                          </p>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="spotting_colin_section">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-_59077daf-b9e2-11f9-a437-fc41b2e7a9b8-64f0cc9f" class="column-image-block"><img src="/images/Premrest_Spotters_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Spotters_Blob-p-500.webp 500w, images/Premrest_Spotters_Blob-p-800.webp 800w, images/Premrest_Spotters_Blob-p-1080.webp 1080w, images/Premrest_Spotters_Blob-p-1600.webp 1600w, images/Premrest_Spotters_Blob.webp 2000w" alt="" class="section-image"><img src="/images/Tagline_Spinning.gif" loading="lazy" alt="" class="shawcontract_spotthedifference"></div>
                </div>
                <div class="grid-column">
                  <h2>Still stuck?</h2>
                  <p>Call Colin Saddington, one of the Premrest business owners. He is our resident guru and loves nothing more than to help our clients with tough problems. <br><br>Call <strong>anytime</strong>. </p>
                  <a id="w-node-_59077daf-b9e2-11f9-a437-fc41b2e7a9d8-64f0cc9f" href="tel:+61430270163" class="button w-button">Call Colin Saddington</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script><!--  Google Tag Manager (noscript)  -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57VKP3XQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!--  End Google Tag Manager (noscript)  -->

`;

export default function Page() {
  return (
    <WebflowPage bodyClass="" >
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </WebflowPage>
  );
}
