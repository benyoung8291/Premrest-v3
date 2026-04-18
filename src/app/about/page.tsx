import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';
import { TeamGrid } from '@/components/cms/TeamGrid';

export const metadata: Metadata = {
  title: "About",
  description: "Talk to the experts who are floors ahead.",
  openGraph: {
    title: "About",
    description: "Talk to the experts who are floors ahead.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/677f093e9d86c890a1e3d97d_FeaturedImage_About.jpg"]
  },
  twitter: {
    title: "About",
    description: "Talk to the experts who are floors ahead.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/677f093e9d86c890a1e3d97d_FeaturedImage_About.jpg"]
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
                <div id="w-node-_6ab3358b-0890-5ea2-aaf1-c9212c22bf4e-c09522a7" class="grid-column">
                  <h1 id="w-node-_6ab3358b-0890-5ea2-aaf1-c9212c22bf4f-c09522a7" class="heading-style-h2 header-heading">About</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-section-problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-_6bdd1030-85a6-64d5-6f31-f646dfc66d86-c09522a7" class="column-image-block"><img src="/images/Premrest_About_Problem_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_About_Problem_Blob-p-500.webp 500w, images/Premrest_About_Problem_Blob-p-800.webp 800w, images/Premrest_About_Problem_Blob-p-1080.webp 1080w, images/Premrest_About_Problem_Blob-p-1600.webp 1600w, images/Premrest_About_Problem_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column">
                  <h2>Talk to the flooring experts who are floors ahead.</h2><img src="/images/Premrest_About_Shake_Hands.svg" loading="lazy" alt="" class="about_problem_hands">
                  <p>We are the friends of facilities managers, corporate clients, and general cleaning companies across Australia.<br><br>We believe in a little bit of “wow!” as you walk in, because your floor is the biggest canvas your office will ever have.<br><br>We install and clean commercial floors, across all floor types and finishes, from small spaces to multi-level projects, with quality that floors even the harshest critics.<br><br>Now that’s an approach that saves you time, provides value for money, and ensures all your future flooring questions will be answered. Our floors are so good, you’ll want to share the before and after shots.<br><br>Secure the masterpiece underneath your feet, and don’t deal with incompetent operators or settle for counterfeits. Finish the job right the first time, every time, and streamline your flooring contracts.<br><br>Our work motto is to “make it happen, and make it fun”. We take our work seriously, but that doesn’t mean we take ourselves too seriously. This means you can ask us any question, no matter how basic, and we’ll find an answer.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-section-team">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper grid-wrapper-team">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2>Meet the team</h2>
                </div>
              </div>
              <!--SANITY:team-->
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
  const slots = {
    team: <TeamGrid />,
  };

  return (
    <WebflowPage bodyClass="" >
      <WebflowHtml html={bodyHtml} slots={slots} />
    </WebflowPage>
  );
}
