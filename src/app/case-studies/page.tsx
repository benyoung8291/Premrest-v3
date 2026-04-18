import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Success stories, one square metre at a time.",
  openGraph: {
    title: "Case Studies",
    description: "Success stories, one square metre at a time.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6786fe197713e3b01f937385_JLL_Melbourne_HighRes-14.jpg"]
  },
  twitter: {
    title: "Case Studies",
    description: "Success stories, one square metre at a time."
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
    
    <div class="main-wrapper">
      <div class="global-section-header background-color-primary">
        <div class="padding-global padding-section-large padding-section-header">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div id="w-node-_6ab3358b-0890-5ea2-aaf1-c9212c22bf4e-b3355a93" class="grid-column">
                  <h1 id="w-node-_6ab3358b-0890-5ea2-aaf1-c9212c22bf4f-b3355a93" class="heading-style-h2 header-heading">Case Studies</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="casestudies-section-feature">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="w-dyn-list">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <div class="grid-2-columns casestudies-feature">
                      <div class="grid-column">
                        <div id="w-node-_6bdd1030-85a6-64d5-6f31-f646dfc66d86-b3355a93" class="column-image-block"><img src="/images/Premrest_Industries_CommercialOffices.webp" loading="lazy" alt="" class="casestudies-feature-cover-image w-dyn-bind-empty"><img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" class="casestudies-image-scribble"><img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" class="casestudies-image-patch"></div>
                      </div>
                      <div class="grid-column">
                        <div class="content-badge-service">
                          <h6 fs-cmsfilter-field="*" class="casestudies-feature-badge">Latest Case Study</h6>
                        </div>
                        <h2 class="w-dyn-bind-empty"></h2>
                        <p class="w-dyn-bind-empty"></p>
                        <div class="w-dyn-list">
                          <div role="list" class="w-dyn-items">
                            <div role="listitem" class="w-dyn-item">
                              <div class="resources-author-container casestudies-feature"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="resources-author-image w-dyn-bind-empty">
                                <div>
                                  <h6 class="resources-author-name w-dyn-bind-empty"></h6>
                                  <h6 class="resources-author-title w-dyn-bind-empty"></h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a id="file-download" href="#" class="button casestudies-feature-button w-node-_7ddc30f3-4ab5-05e6-b0b3-3c473cac498d-b3355a93 w-button">Download</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="professional-services" class="casestudies-section-other">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <h2 class="heading-5">Other case studies</h2>
              <div class="w-dyn-list">
                <div role="list" class="casestudies-other-columns w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <div class="grid-column">
                      <div id="w-node-_65d86513-cc26-20f3-0864-77bd7040234f-b3355a93" class="column-image-block"><img src="/images/Premrest_Industries_CommercialOffices.webp" loading="lazy" alt="" class="casestudies-other-cover-image w-dyn-bind-empty"></div>
                      <a id="file-download" href="#" class="button casestudies-feature-button w-node-_65d86513-cc26-20f3-0864-77bd7040235e-b3355a93 w-button">Download</a>
                    </div>
                  </div>
                </div>
                <div class="w-dyn-empty">
                  <div>No items found.</div>
                </div>
                <div role="navigation" aria-label="List" class="w-pagination-wrapper">
                  <a href="#" aria-label="Previous Page" class="w-pagination-previous"><svg class="w-pagination-previous-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                      <path fill="none" stroke="currentColor" fill-rule="evenodd" d="M8 10L4 6l4-4"></path>
                    </svg>
                    <div class="w-inline-block">Previous</div>
                  </a>
                  <a href="#" aria-label="Next Page" class="w-pagination-next button">
                    <div class="w-inline-block">Next</div><svg class="w-pagination-next-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                      <path fill="none" stroke="currentColor" fill-rule="evenodd" d="M4 2l4 4-4 4"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="global-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-e5bd0ece-6786-ee84-e886-54350f2698ab-b3355a93" class="grid-column grid-column-1">
                <h2 id="w-node-e5bd0ece-6786-ee84-e886-54350f2698ac-b3355a93" class="text-light home-final-headline">Let’s create floors that sweep you off your feet.</h2>
                <a id="w-node-e5bd0ece-6786-ee84-e886-54350f2698ae-b3355a93" href="/contact" class="button home-final-button w-button">Let's chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
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
