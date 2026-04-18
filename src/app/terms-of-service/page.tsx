import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Terms of Service",
  openGraph: {
    title: "Terms of Service"
  },
  twitter: {
    title: "Terms of Service"
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
                <div id="w-node-_3355821f-9873-f8c7-30ca-8b009fcecf00-3c938569" class="grid-column">
                  <h1 id="w-node-_3355821f-9873-f8c7-30ca-8b009fcecf01-3c938569" class="heading-style-h2 header-heading">Terms of Service</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="terms-section-service">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column w-richtext">
                  <p>Revised Date: 05/08/2025</p>
                  <p>Welcome to Premrest. These Terms of Service ("Terms") govern your use of our services and are entered into by you and Premrest ("we", "us", or "our"). By using our services, you agree to these Terms.</p>
                  <h4>1. Services</h4>
                  <p>We offer floor cleaning and commercial floor supply and installation services across Australia, with a special projects team handling bespoke projects. Our services are provided in accordance with the specifications and scope of works agreed upon with our clients.</p>
                  <h4>2. User Obligations</h4>
                  <p>Clients must provide a clear scope of works and ensure a safe working environment for our team. We do not tolerate any form of abuse towards our staff. By using our services, you agree to these standards of conduct.</p>
                  <h4>3. Payment and Billing</h4>
                  <p>Payment terms are 30 days from the invoice date. For new clients or specific projects, a 30-50% deposit may be required before commencement of work. In case of late payments, we reserve the right to take appropriate actions including, but not limited to, debt collection, legal proceedings, and reporting to credit agencies.</p>
                  <h4>4. Intellectual Property</h4>
                  <p>Clients may use Premrest’s content and branding with proper credit and a link back to our original content. No intellectual property rights are transferred through the use of our services.</p>
                  <h4>5. Warranties and Disclaimers</h4>
                  <p>We offer a 12-month defect warranty on all installation works unless otherwise specified. Products sold are subject to the manufacturer's warranty. Our cleaning services include a guarantee to re-clean if necessary, with the understanding that some flooring may be beyond restoration due to damage.</p>
                  <h4>6. Service Modification and Termination</h4>
                  <p>We reserve the right to modify or terminate services if a client violates these Terms. Clients may also modify or terminate their engagement with us under these Terms.</p>
                  <h4>7. Governing Law</h4>
                  <p>These Terms are governed by the laws of Victoria, Australia, or the equivalent laws of the state or territory where the service is provided.</p>
                  <h4>8. Privacy and Data Usage</h4>
                  <p>Client data is used solely for the purposes of quoting and delivering services. Access to client data is restricted to authorised employees, and all our platforms are secured with two-factor authentication.</p>
                  <h4>9. Carpet 'Spot Cleaning' (Spotting) Service Definition</h4>
                  <p>In our carpet cleaning service, 'Spotting' is a targeted maintenance process that addresses only a few visible stains in high-traffic passages. This service is not designed for deep cleaning heavily soiled carpets but focuses on treating isolated stains to maintain the carpet's appearance between comprehensive cleanings.</p>
                  <h4>10. Amendments</h4>
                  <p>We may update these Terms from time to time. Such updates will be posted on our website.</p>
                  <h4>11. Contact Information</h4>
                  <p>For enquiries related to these Terms, please contact us <a href="/contact" class="link-2">here</a>.</p>
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
