import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Privacy Policy",
  openGraph: {
    title: "Privacy Policy"
  },
  twitter: {
    title: "Privacy Policy"
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
                <div id="w-node-_071bd308-436a-1c12-6724-59d6ef5ca7c7-1a9a5b43" class="grid-column">
                  <h1 id="w-node-_071bd308-436a-1c12-6724-59d6ef5ca7c8-1a9a5b43" class="heading-style-h2 header-heading">Privacy Policy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="privacy-section-policy">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column w-richtext">
                  <p>Effective Date: 01/07/2023</p>
                  <p>At Premrest, we respect the privacy of our business clients and are committed to protecting the personal information we collect and use in the course of providing commercial flooring services. This Privacy Policy outlines our practices regarding the collection, use, and protection of your data.</p>
                  <h4>Information Collection</h4>
                  <p>We collect information from our business clients that may include:</p>
                  <ul role="list">
                    <li>Business contact information (e.g., business name, contact name, address, email, and phone number).</li>
                    <li>Billing and transaction information related to the services we provide.</li>
                  </ul>
                  <h4>Use of Information</h4>
                  <p>The information we collect is used exclusively for the purpose of fulfilling our business engagements. This includes:</p>
                  <ul role="list">
                    <li>Providing commercial flooring services as requested.</li>
                    <li>Processing payments and managing accounts.</li>
                    <li>Communicating with clients regarding our services.</li>
                  </ul>
                  <h4>Data Protection</h4>
                  <p>To safeguard your personal information, we implement robust security measures, including:</p>
                  <ul role="list">
                    <li>Secure storage and handling of client data.</li>
                    <li>Restricting access to personal information to authorized personnel only.</li>
                    <li>Regularly reviewing and updating our security practices.</li>
                  </ul>
                  <h4>Information Sharing</h4>
                  <ul role="list">
                    <li>We do not sell, rent, or trade our clients' personal information.</li>
                    <li>We only share client data with third parties when it is directly related to the delivery of services that the client has engaged us for. Such third parties are bound by confidentiality agreements to protect this information.</li>
                    <li>We may disclose information if required by law or if it's necessary to protect our rights, property, or safety.</li>
                  </ul>
                  <h4>Third-Party Links</h4>
                  <p>Our website may include links to third-party sites. These sites have independent privacy policies, and we hold no responsibility or liability for their content and activities.</p>
                  <h4>Consent</h4>
                  <p>By engaging with our services, you consent to our privacy policy.</p>
                  <h4>Changes to Our Privacy Policy</h4>
                  <p>We reserve the right to modify this privacy policy at any time. Changes will be effective immediately upon posting on our website.</p>
                  <h4>Contact Us</h4>
                  <p>For any questions or concerns regarding this privacy policy, please contact us <a href="/contact">here</a>.</p>
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
