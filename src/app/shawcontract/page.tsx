import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "ShawContract",
  openGraph: {
    title: "ShawContract"
  },
  twitter: {
    title: "ShawContract"
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
      <section class="shawcontract_hero_section">
        <div class="padding-global padding-section-large">
          <div class="container-xlarge">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div id="w-node-fa4ccfdf-47d1-a605-2171-54946351db72-e3fc84e0" class="grid-column"><img src="/images/Artboard1.png" loading="lazy" sizes="(max-width: 1920px) 100vw, 1920px" srcset="/images/Artboard1-p-500.png 500w, images/Artboard1-p-800.png 800w, images/Artboard1-p-1080.png 1080w, images/Artboard1-p-1600.png 1600w, images/Artboard1.png 1920w" alt="" class="shawcontract_premrest_logo">
                  <h1>Maintain your carpet investment</h1>
                  <p id="w-node-fa4ccfdf-47d1-a605-2171-54946351db7b-e3fc84e0" class="text-size-large home-hero-subheadline">ShawContract have partnered with Premrest, a national service provider, specialising in floor cleaning, to deliver a maintenance plan that ensures the longevity, care and warranty of your ShawContract carpets.</p>
                  <p>Premrest specialises in Encapsulation Cleaning Technology, ideal for commercial carpets. Using an eco-friendly cleaning agent, this system encapsulates and crystallises soils, spills, oils and bacteria in the carpet fibres, allowing for easy removal with routine vacuuming.<br><br>Premrest Encapsulation features AFT (Active Film Technology) to help block oily binders that cause rapid resoiling, protecting your carpet. This process is both effective and sustainable, using up to <strong>76% less water</strong> and leaving carpets dry within minutes, ready for immediate use.<br><br>To book in an encapsulation carpet clean, please fill out our contact form.</p>
                  <a href="#shawcontract-form" class="button w-button">Get in touch</a>
                </div>
                <div id="w-node-fa4ccfdf-47d1-a605-2171-54946351db83-e3fc84e0" class="grid-column">
                  <div class="column-image-block"><img src="/images/shawcontract_blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/shawcontract_blob-p-500.webp 500w, images/shawcontract_blob-p-800.webp 800w, images/shawcontract_blob-p-1080.webp 1080w, images/shawcontract_blob-p-1600.webp 1600w, images/shawcontract_blob.webp 2000w" alt="people inside a common workspace" class="section-image section-image-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="shawcontract_streetsahead_section">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-fa4ccfdf-47d1-a605-2171-54946351db8e-e3fc84e0" class="column-image-block"><img src="/images/Premrest_ShawContract_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_ShawContract_Blob-p-500.webp 500w, images/Premrest_ShawContract_Blob-p-800.webp 800w, images/Premrest_ShawContract_Blob-p-1080.webp 1080w, images/Premrest_ShawContract_Blob-p-1600.webp 1600w, images/Premrest_ShawContract_Blob.webp 2000w" alt="" class="section-image"><img src="/images/Tagline_Spinning.gif" loading="lazy" alt="" class="shawcontract_spotthedifference"></div>
                </div>
                <div class="grid-column">
                  <h2>Streets ahead in cleaning office floors.</h2>
                  <p>Don’t put up with carpets that aren’t clean. Deal direct with the company general cleaners and manufacturers turn to when issues arise with commercial floor cleaning. <br><br>When it comes to cleaning floors, we work in the art of the possible.</p>
                  <h4>Our core services</h4>
                  <ul role="list">
                    <li>
                      <p>Carpet Cleaning</p>
                    </li>
                    <li>
                      <p>Hard Floor Cleaning</p>
                    </li>
                    <li>
                      <p>Furniture Cleaning</p>
                    </li>
                  </ul>
                  <p>Additional services:</p>
                  <ul role="list">
                    <li>
                      <p>Floor covering supply &amp; install (VIC)</p>
                    </li>
                    <li>
                      <p>Special Projects (Consulting, Slip test rectifications, Fit-for-purpose flooring selection)</p>
                    </li>
                  </ul>
                  <a id="w-node-fa4ccfdf-47d1-a605-2171-54946351db9f-e3fc84e0" href="#shawcontract-form" class="button w-button">Get in touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shawcontract_benefits_section">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-3-columns">
                <div id="w-node-_84da62af-3059-bd4a-6ff1-fb2fa31f3a78-e3fc84e0" class="grid-column grid-column-top">
                  <div id="w-node-_0c4dba09-98b2-4e1e-7db6-36dcd1768916-e3fc84e0" class="benefits-images"><img src="/images/image-asset.webp" loading="lazy" sizes="(max-width: 1000px) 100vw, 1000px" srcset="/images/image-asset-p-500.webp 500w, images/image-asset-p-800.webp 800w, images/image-asset.webp 1000w" alt="" class="shawcontract_benefits_images"></div>
                  <h4>Sustainability + Net Zero<br></h4>
                  <div class="accordion-container">
                    <div data-delay="0" data-hover="false" data-w-id="dd5be03b-db62-909a-d4a1-de179b518df7" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Our net zero commitment</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Our business operations are third party measured and certified as carbon neutral.<br><br>‍<strong>We have partnered with Trace to measure and offset our carbon footprint.</strong> <br><br>While this may be a small step, it is our first and one of many as we make the changes necessary to reduce and where possible eliminate our carbon footprint.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="41ec0b67-7a53-2d07-7722-a519b8f2c631" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">100% waste water eradication</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Our carpet cleaning method eliminates all contaminated waste water.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="4b49134e-55f2-63cd-dfa0-ccacf3dcbdfb" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">67% reduction in energy usage</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>When compared to hot water extraction (aka steam cleaning) our method uses 67% less electricity. This is due to our machines being more efficient and the elimination of hot water.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="38767f1d-0249-63ad-295d-02c983b9f0f4" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">76% reduction in water usage</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>We use low moisture cleaning methods that significantly reduce water usage while still ensuring carpets are kept beautiful.</p>
                      </nav>
                    </div>
                  </div>
                </div>
                <div id="w-node-_2b81689c-3e17-522e-0d4c-01e2d1143880-e3fc84e0" class="grid-column grid-column-top">
                  <div class="benefits-images"><img src="/images/ColinInspecting-2.webp" loading="lazy" sizes="(max-width: 1000px) 100vw, 1000px" srcset="/images/ColinInspecting-2-p-500.webp 500w, images/ColinInspecting-2-p-800.webp 800w, images/ColinInspecting-2.webp 1000w" alt="" class="shawcontract_benefits_images"></div>
                  <h4>Floor Consulting<br></h4>
                  <div class="accordion-container">
                    <div data-delay="0" data-hover="false" data-w-id="2b81689c-3e17-522e-0d4c-01e2d1143886" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Special projects</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Your quirky problems are our exciting projects. We dive into the unknown with a zest for creative solutions, tackling the tasks that don’t quite fit the mould of regular trades.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="2b81689c-3e17-522e-0d4c-01e2d1143897" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Slip test retifications</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Safety with a twinkle – that’s our mantra. We swoop in to identify and fix slip hazards, ensuring your floors are as safe as they are snazzy.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="2b81689c-3e17-522e-0d4c-01e2d114389f" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Material selections</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Colin and team are here to whisk you through a world of material choices, ensuring your finishes selection are beautiful and fit-for-purpose.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="2b81689c-3e17-522e-0d4c-01e2d11438a7" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">+ more</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>Heritage cleaning, mould cleaning, graffiti removal, specialist stone repairs, anti-slip treatments.</p>
                      </nav>
                    </div>
                  </div>
                </div>
                <div id="w-node-bed0130c-0113-e03f-20bd-2eb47092b7c2-e3fc84e0" class="grid-column grid-column-top">
                  <div class="benefits-images"><img src="/images/image-asset-1.webp" loading="lazy" sizes="(max-width: 1000px) 100vw, 1000px" srcset="/images/image-asset-1-p-500.webp 500w, images/image-asset-1-p-800.webp 800w, images/image-asset-1.webp 1000w" alt="" class="shawcontract_benefits_images"></div>
                  <h4>National Portfolios<br></h4>
                  <div class="accordion-container">
                    <div data-delay="0" data-hover="false" data-w-id="bed0130c-0113-e03f-20bd-2eb47092b7c8" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Capability</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>We currently service clients with locations across Australia. Including regional and remote locations. We’re talking locations as remote as Alice Springs NT, Kalgoorlie WA, and Mount Isa QLD, to name a few. All this to say that no matter what properties are in your portfolio, we are able to service them.</p>
                      </nav>
                    </div>
                    <div data-delay="0" data-hover="false" data-w-id="bed0130c-0113-e03f-20bd-2eb47092b7d9" style="height:40px" class="accordion-item w-dropdown">
                      <div class="accordion-toggle w-dropdown-toggle">
                        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="accordion-icon w-icon-dropdown-toggle"></div>
                        <div class="accordion-title">Property types</div>
                      </div>
                      <nav class="dropdown-list w-dropdown-list">
                        <p>We service everything from 80,000m2 office buildings through to 100m2 retail locations. We have the capability and capacity to take on any portfolio across Australia.</p>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shawcontract_final_section">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper grid-column-2">
              <div class="grid-2-columns">
                <div id="w-node-fa4ccfdf-47d1-a605-2171-54946351dbe1-e3fc84e0" class="grid-column">
                  <h2 class="text-light">We fix your pain.</h2>
                  <p class="text-size-large text-light">No smell. No noise. No complaints.</p>
                  <div class="contact-details-container">
                    <div class="grid-column"><img src="/images/1694389967234.jpg" loading="lazy" sizes="(max-width: 800px) 100vw, 800px" srcset="/images/1694389967234-p-500.jpg 500w, images/1694389967234.jpg 800w" alt="" class="contact-detail-image"></div>
                    <div class="grid-column contact-details-grid">
                      <h5 class="contact-detail-name text-light">Aaron Kelly</h5>
                      <p class="text-light">General Manager - Cleaning<br>☎️ 0447 888 824<br>📧 aaron.kelly@premrest.com.au</p>
                    </div>
                  </div>
                </div>
                <div id="w-node-d0c5b30c-880b-b5aa-88d6-2c9adef49e73-e3fc84e0" class="grid-column-form">
                  <div class="form-container">
                    <div class="w-form">
                      <form id="shawcontract-form" name="wf-form-ShawContract-Form" data-name="ShawContract Form" redirect="/thanks" data-redirect="/thanks" method="get" data-wf-page-id="676e038af751b731e3fc84e0" data-wf-element-id="d0c5b30c-880b-b5aa-88d6-2c9adef49e76">
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="First-Name-ShawContract" class="form-label">First name</label><input class="form-field w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="" type="text" id="First-Name-ShawContract" required=""></div>
                          <div class="form-block-grid-column"><label for="Last-Name-ShawContract" class="form-label">Last name</label><input class="form-field w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="" type="text" id="Last-Name-ShawContract" required=""></div>
                        </div>
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="Email-Address-ShawContract" class="form-label">Email address</label><input class="form-field w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="" type="email" id="Email-Address-ShawContract" required=""></div>
                          <div class="form-block-grid-column"><label for="Phone-Number-ShawContract" class="form-label">Phone number</label><input class="form-field w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="" type="tel" id="Phone-Number-ShawContract"></div>
                        </div><input type="submit" data-wait="Please wait..." class="button contact-button w-button" value="Submit">
                      </form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
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
      <WebflowHtml html={bodyHtml} />
    </WebflowPage>
  );
}
