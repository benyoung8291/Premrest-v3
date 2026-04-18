import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Links",
  openGraph: {
    title: "Links"
  },
  twitter: {
    title: "Links"
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
      <div class="global-section-header background-color-primary">
        <div class="padding-global padding-section-large padding-section-header">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div id="w-node-_72e953fe-94dd-e312-5568-ceb388417d66-8734a448" class="grid-column">
                  <h1 id="w-node-_72e953fe-94dd-e312-5568-ceb388417d67-8734a448" class="heading-style-h2 header-heading">Links</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-section-resource">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper resources-grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2 id="w-node-d60ec300-754f-a828-411e-232679b75b16-fcaa6bf4">Latest resources</h2>
                </div>
              </div>
              <div class="resources-wrapper w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <div class="grid-wrapper grid-column-2-resources">
                      <div class="grid-column home-resources-column-1">
                        <div class="home-resources-image-container"><img loading="lazy" src="/images/Hot-Black-Kraft-Heinz_6299-1000x1500.webp" alt="" class="global-resources-image w-dyn-bind-empty"><img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" class="home-resources-scribbles"><img loading="lazy" src="/images/Premrest_Patch_Cream.svg" alt="" class="home-resources-patch"></div>
                      </div>
                      <div class="grid-column home-resources-column-2">
                        <div class="home-resources-container">
                          <div class="content-badges-container-section">
                            <div class="content-badge-service">
                              <h6 fs-cmsfilter-field="*" class="content-service-heading w-dyn-bind-empty"></h6>
                            </div>
                            <div class="content-badge-type">
                              <h6 fs-cmsfilter-field="contents" class="content-type-heading w-dyn-bind-empty"></h6>
                            </div>
                          </div>
                          <h3 class="home-resources-title w-dyn-bind-empty"></h3>
                          <a id="w-node-_1beb1296-d203-6ba3-01bd-9305fcaa6c05-fcaa6bf4" href="#" class="button is-secondary w-button">Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
              <div class="grid-1-column">
                <div class="grid-column">
                  <a id="w-node-_192880c3-b256-a8ea-2ecd-bcc0f3c05ff4-fcaa6bf4" href="/resources" class="button w-button">View more resources</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="links_section_services">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-column">
                <h2 id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f78-8734a448" class="home-solution-headline">Secure the masterpiece underneath your feet.</h2>
              </div>
              <div class="grid-3-columns grid-services">
                <a data-w-id="7d9314d5-ad94-7f81-5091-ab8b5bad3f80" style="opacity:0" href="/cleaning" class="services-links w-inline-block">
                  <div class="grid-column">
                    <div id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f82-8734a448" class="services-content grid-column grid-column-services-cards">
                      <h3 class="services-headline">Revived floors, flawless facilities.</h3>
                      <p class="services-subheadline">Give your commercial floors a new lease on life, with no problems swept under the carpet.</p>
                    </div>
                    <div id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f87-8734a448" class="services-badge-block">
                      <h3 id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f88-8734a448" class="services-badge">Cleaning</h3>
                    </div>
                    <div class="services-cards">
                      <div class="services-images">
                        <div class="services-overlay"></div><img src="/images/DSC03156.webp" loading="lazy" sizes="(max-width: 1800px) 100vw, 1800px" height="Auto" alt="" srcset="/images/DSC03156-p-500.webp 500w, images/DSC03156-p-800.webp 800w, images/DSC03156-p-1080.webp 1080w, images/DSC03156-p-1600.webp 1600w, images/DSC03156.webp 1800w" class="services-image">
                      </div>
                    </div>
                  </div>
                </a>
                <a data-w-id="7d9314d5-ad94-7f81-5091-ab8b5bad3f8e" style="opacity:0" href="/installs" class="services-links w-inline-block">
                  <div class="grid-column">
                    <div id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f90-8734a448" class="services-content grid-column grid-column-services-cards">
                      <h3 class="services-headline">Crafted floor installs you can stand on.</h3>
                      <p class="services-subheadline">Level up your commercial space with floors that stun with every step.</p>
                    </div>
                    <div id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f95-8734a448" class="services-badge-block badge-block-inverse">
                      <h3 id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f96-8734a448" class="services-badge services-badge-heading-inverse">Installs</h3>
                    </div>
                    <div class="services-cards">
                      <div class="services-images">
                        <div class="services-overlay"></div><img src="/images/JLL_Melbourne_HighRes-40.webp" loading="lazy" sizes="(max-width: 1170px) 100vw, 1170px" height="Auto" alt="" srcset="/images/JLL_Melbourne_HighRes-40-p-500.webp 500w, images/JLL_Melbourne_HighRes-40-p-800.webp 800w, images/JLL_Melbourne_HighRes-40-p-1080.webp 1080w, images/JLL_Melbourne_HighRes-40.webp 1170w" class="services-image">
                      </div>
                    </div>
                  </div>
                </a>
                <a data-w-id="7d9314d5-ad94-7f81-5091-ab8b5bad3f9c" style="opacity:0" href="/special-projects" class="services-links w-inline-block">
                  <div class="grid-column">
                    <div id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3f9e-8734a448" class="services-content grid-column grid-column-services-cards">
                      <h3 class="services-headline">The 'not-quite flooring' conundrums.</h3>
                      <p class="services-subheadline">From complex restorations, graffiti removal to areas of high compliance, we’ve got your back.</p>
                    </div>
                    <div id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3fa3-8734a448" class="services-badge-block">
                      <h3 id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3fa4-8734a448" class="services-badge">Special Projects</h3>
                    </div>
                    <div class="services-cards">
                      <div class="services-images">
                        <div class="services-overlay"></div><img src="/images/office-tour-kraft-heinz-1000x677-2020-Kitchen-2.webp" loading="lazy" sizes="(max-width: 1000px) 100vw, 1000px" height="Auto" alt="" srcset="/images/office-tour-kraft-heinz-1000x677-2020-Kitchen-2-p-500.webp 500w, images/office-tour-kraft-heinz-1000x677-2020-Kitchen-2-p-800.webp 800w, images/office-tour-kraft-heinz-1000x677-2020-Kitchen-2.webp 1000w" class="services-image">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="grid-column padding-medium-top">
              <a id="w-node-_7d9314d5-ad94-7f81-5091-ab8b5bad3fab-8734a448" href="/contact" class="button w-button">Let's chat</a>
            </div>
          </div>
        </div>
      </div>
      <div class="global-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-_2112c323-03fe-8b68-410e-4ec99fa3e67b-8734a448" class="grid-column grid-column-1">
                <h2 id="w-node-_2112c323-03fe-8b68-410e-4ec99fa3e67c-8734a448" class="text-light home-final-headline">Let’s create floors that sweep you off your feet.</h2>
                <a id="w-node-_2112c323-03fe-8b68-410e-4ec99fa3e67e-8734a448" href="/contact" class="button home-final-button w-button">Let's chat</a>
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
