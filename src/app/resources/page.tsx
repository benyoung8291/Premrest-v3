import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Resources",
  description: "A content powerhouse of resources and tips from our experts to elevate your commercial floors.",
  openGraph: {
    title: "Resources",
    description: "A content powerhouse of resources and tips from our experts to elevate your commercial floors.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6760b47d010ccbad0fa2fcb6_150624_Medibank_ArchDaily_Medibank_720BourkeSt_EarlCarter_(12).webp"]
  },
  twitter: {
    title: "Resources",
    description: "A content powerhouse of resources and tips from our experts to elevate your commercial floors.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6760b47d010ccbad0fa2fcb6_150624_Medibank_ArchDaily_Medibank_720BourkeSt_EarlCarter_(12).webp"]
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
                <div id="w-node-a5fdb1aa-9cb9-12b4-94dd-ec1d141efa5d-8298004c" class="grid-column">
                  <h1 id="w-node-a5fdb1aa-9cb9-12b4-94dd-ec1d141efa5e-8298004c" class="heading-style-h2 header-heading">Resources</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resources-section-content">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="filters1_component">
                <div class="filters1_layout">
                  <div id="w-node-e052a4c1-827c-7e36-c0f6-99063d6d42f4-8298004c" class="filters1_filters-wrapper">
                    <div fs-cmsfilter-field="*" class="filters1_form-block w-form">
                      <form id="wf-form-Filter-1" name="wf-form-Filter-1" data-name="Filter 1" method="get" fs-cmsfilter-element="filters" class="filters1_form" data-wf-page-id="678855b7eb1929a98298004c" data-wf-element-id="e052a4c1-827c-7e36-c0f6-99063d6d42f6">
                        <div id="w-node-e052a4c1-827c-7e36-c0f6-99063d6d42f7-8298004c" class="filters1_form-header">
                          <div class="filters1_heading">Search</div>
                          <a fs-cmsfilter-element="reset" href="#" class="button-3 is-link hide-tablet w-inline-block"></a>
                        </div><input class="fs-search_field-2 w-input" maxlength="256" name="field-2" fs-cmsfilter-field="*" data-name="Field 2" placeholder="Search here" type="text" id="field-2" required="">
                        <div class="input-css w-embed">
                          <style>
input {
  border-radius: 0; /* Remove rounded corners */
  appearance: none; /* Disable browser-specific styling */
  -webkit-appearance: none; /* For Safari */
}
</style>
                        </div>
                        <div aria-label="add description here" role="group" class="fs-checkbox_group">
                          <div class="fs-checkbox_row"><label class="w-checkbox fs-checkbox_field-4">
                              <div class="w-checkbox-input w-checkbox-input--inputType-custom fs-checkbox_button-4"></div><input type="checkbox" name="Checkbox-4-A-2" id="Checkbox-4-A-2" data-name="Checkbox 4 A 2" style="opacity:0;position:absolute;z-index:-1"><span fs-cmsfilter-field="contents" fs-cmsfilter-active="is-active" class="fs-checkbox_label-4 w-form-label" for="Checkbox-4-A-2">Article</span>
                            </label><label class="w-checkbox fs-checkbox_field-4 is-active">
                              <div class="w-checkbox-input w-checkbox-input--inputType-custom fs-checkbox_button-4"></div><input type="checkbox" name="Checkbox-4-B-2" id="Checkbox-4-B-2" data-name="Checkbox 4 B 2" style="opacity:0;position:absolute;z-index:-1"><span fs-cmsfilter-field="contents" fs-cmsfilter-active="is-active" class="fs-checkbox_label-4 w-form-label" for="Checkbox-4-B-2">Case Study</span>
                            </label><label class="w-checkbox fs-checkbox_field-4">
                              <div class="w-checkbox-input w-checkbox-input--inputType-custom fs-checkbox_button-4"></div><input type="checkbox" name="Checkbox-4-A-2" id="Checkbox-4-A-2" data-name="Checkbox 4 A 2" style="opacity:0;position:absolute;z-index:-1"><span fs-cmsfilter-field="contents" fs-cmsfilter-active="is-active" class="fs-checkbox_label-4 w-form-label" for="Checkbox-4-A-2">Podcast</span>
                            </label><label class="w-checkbox fs-checkbox_field-4">
                              <div class="w-checkbox-input w-checkbox-input--inputType-custom fs-checkbox_button-4"></div><input type="checkbox" name="Checkbox-4-A-2" id="Checkbox-4-A-2" data-name="Checkbox 4 A 2" style="opacity:0;position:absolute;z-index:-1"><span fs-cmsfilter-field="contents" fs-cmsfilter-active="is-active" class="fs-checkbox_label-4 w-form-label" for="Checkbox-4-A-2">Webinar</span>
                            </label></div>
                        </div>
                        <div class="filters1_results-wrapper">
                          <div class="filters1_results-text">Showing <span fs-cmsfilter-element="results-count">0</span> of <span fs-cmsfilter-element="items-count">100</span></div>
                        </div>
                      </form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-e052a4c1-827c-7e36-c0f6-99063d6d4323-8298004c" class="filters1_feed">
                    <div class="filters1_feed-header">
                      <div class="filters1_tags-wrapper">
                        <div fs-cmsfilter-element="tag-template" class="filters1_tag">
                          <div fs-cmsfilter-element="tag-text">Tag</div>
                          <div class="filters1_close-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.1266 16.773L16.7729 17.1266C16.5777 17.3218 16.2611 17.3218 16.0658 17.1266L12 13.0607L7.9341 17.1265C7.73888 17.3218 7.42229 17.3218 7.22702 17.1265L6.87347 16.773C6.6782 16.5777 6.6782 16.2612 6.87347 16.0659L10.9394 12L6.87347 7.93413C6.6782 7.73891 6.6782 7.42232 6.87347 7.22705L7.22702 6.8735C7.42228 6.67824 7.73888 6.67824 7.9341 6.8735L12 10.9394L16.0658 6.8735C16.2611 6.67824 16.5777 6.67824 16.7729 6.8735L17.1266 7.22705C17.3218 7.42231 17.3218 7.73891 17.1266 7.93413L13.0607 12L17.1266 16.0659C17.3218 16.2612 17.3218 16.5777 17.1266 16.773Z" fill="currentColor"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div class="grid-wrapper">
                      <div fs-cmsload-mode="pagination" fs-cmsfilter-element="list" fs-cmsload-element="list" class="w-dyn-list">
                        <div fs-cmsfilter-field="contents" role="list" class="resources-collection w-dyn-items">
                          <div role="listitem" class="collection-item w-dyn-item">
                            <div class="content-badges-container">
                              <div class="content-badge-service">
                                <h6 fs-cmsfilter-field="*" class="content-service-heading w-dyn-bind-empty"></h6>
                              </div>
                              <div class="content-badge-type">
                                <h6 fs-cmsfilter-field="contents" class="content-type-heading w-dyn-bind-empty"></h6>
                              </div>
                            </div>
                            <div class="image-container"><img src="/images/play-button.png" loading="lazy" alt="" class="webinars-play-button"><img src="/images/play-button.png" loading="lazy" alt="" class="video-play-button"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="resources-featured-image w-dyn-bind-empty"></div>
                            <div class="resources-container padding-medium">
                              <h3 fs-cmsfilter-field="*" class="resources-heading w-dyn-bind-empty"></h3>
                              <p fs-cmsfilter-field="*" class="resources-summary w-dyn-bind-empty"></p>
                              <a href="#" class="button is-secondary resources-view-button w-button">View resource</a>
                            </div>
                            <div class="resources-container padding-medium">
                              <h3 fs-cmsfilter-field="*" class="resources-heading w-dyn-bind-empty"></h3>
                              <p fs-cmsfilter-field="*" class="resources-summary w-dyn-bind-empty"></p>
                              <div class="w-dyn-list">
                                <div role="list" class="author-resources-wrapper w-dyn-items">
                                  <div role="listitem" class="collection-item-2 w-dyn-item">
                                    <div class="resources-author-container"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="resources-author-image w-dyn-bind-empty">
                                      <div>
                                        <h6 fs-cmsfilter-field="*" class="resources-author-name w-dyn-bind-empty"></h6>
                                        <h6 fs-cmsfilter-field="*" class="resources-author-title w-dyn-bind-empty"></h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a href="#" class="button is-secondary resources-view-button w-button">View resource</a>
                            </div>
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
                    <div fs-cmsfilter-element="empty" class="filters1_empty">
                      <div class="heading-style-h6">Oops! We’ve hit a flat spot.</div>
                      <div class="spacer-xxsmall"></div>
                      <div>Looks like we’ve hit rock bottom. Reset your search to find something solid.</div>
                    </div>
                  </div>
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
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </WebflowPage>
  );
}
