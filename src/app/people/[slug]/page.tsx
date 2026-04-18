import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "- at Premrest",
  openGraph: {
    title: "-  at Premrest"
  },
  twitter: {
    title: "-  at Premrest"
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
      <div class="people-section-profile padding-top">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/Premrest_About_Problem_Blob.webp" loading="lazy" alt="" class="profile-image w-dyn-bind-empty"></div>
                <div class="grid-column">
                  <h2 class="profile-headline w-dyn-bind-empty"></h2>
                  <p class="text-size-large profile-subheadline w-dyn-bind-empty"></p>
                  <div class="grid-column w-dyn-bind-empty w-richtext"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="people-section-resources">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper grid-wrapper-team">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2>Resources</h2>
                </div>
              </div>
              <div fs-cmsfilter-element="list" class="collection-list-wrapper w-dyn-list">
                <div fs-cmsfilter-field="contents" role="list" class="people-resources-collection w-dyn-items">
                  <div role="listitem" class="collection-item w-dyn-item">
                    <a href="#" class="link-block-4 w-inline-block">
                      <div class="content-badges-container">
                        <div class="content-badge-service">
                          <h6 fs-cmsfilter-field="*" class="content-service-heading w-dyn-bind-empty"></h6>
                        </div>
                        <div class="content-badge-type">
                          <h6 fs-cmsfilter-field="contents" class="content-type-heading w-dyn-bind-empty"></h6>
                        </div>
                      </div>
                      <div class="image-container"><img src="/images/play-button.png" loading="lazy" alt="" class="video-play-button-podcasts"><img src="/images/play-button.png" loading="lazy" alt="" class="video-play-button-webinars"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="people-resources-featured-image w-dyn-bind-empty"></div>
                      <div class="resources-container padding-medium">
                        <h3 fs-cmsfilter-field="*" class="podcasts-heading w-dyn-bind-empty"></h3>
                        <p fs-cmsfilter-field="*" class="podcasts-summary w-dyn-bind-empty"></p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="w-dyn-empty">
                  <div>No items found.</div>
                </div>
                <div role="navigation" aria-label="List" class="w-pagination-wrapper resources-pagination">
                  <a href="#" aria-label="Previous Page" class="w-pagination-previous button is-secondary"><svg class="w-pagination-previous-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                      <path fill="none" stroke="currentColor" fill-rule="evenodd" d="M8 10L4 6l4-4"></path>
                    </svg>
                    <div class="w-inline-block">Previous</div>
                  </a>
                  <a href="#" aria-label="Next Page" class="w-pagination-next button is-secondary">
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
      <WebflowHtml html={bodyHtml} />
    </WebflowPage>
  );
}
