import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Careers",
  openGraph: {
    title: "Careers"
  },
  twitter: {
    title: "Careers"
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
                <div id="w-node-_2e78a571-6f3e-618a-6cad-bc556f2e191a-b59c828b" class="grid-column">
                  <h1 id="w-node-_2e78a571-6f3e-618a-6cad-bc556f2e191b-b59c828b" class="heading-style-h2 header-heading">Careers</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="careers-section-workfaces">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-_2e78a571-6f3e-618a-6cad-bc556f2e1923-b59c828b" class="column-image-block"><img src="/images/Premrest_floor_traffic.webp" loading="lazy" sizes="(max-width: 937px) 100vw, 937px" srcset="/images/Premrest_floor_traffic-p-500.webp 500w, images/Premrest_floor_traffic-p-800.webp 800w, images/Premrest_floor_traffic.webp 937w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column">
                  <h2>Creating happy work faces.</h2><img src="/images/Premrest_About_Shake_Hands.svg" loading="lazy" alt="" class="about_problem_hands">
                  <p class="text-size-large careers-testimonial">“I enjoy working as a team to achieve the best results”<br></p>
                  <p class="careers-testimonial-name">- Ruben Geddes<br></p>
                  <p class="text-size-large careers-testimonial">“I enjoy working at Premrest because we value continuous learning and we tackle challenges through teamwork.”<br></p>
                  <p class="careers-testimonial-name">- Perry Sandoval<br></p>
                  <a href="https://au.indeed.com/cmp/Premier-Restorations-1" target="_blank" class="button w-button">Job listings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="careers-section-values">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper grid-wrapper-team">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2>Our values</h2>
                  <h4>1. Floor them</h4>
                  <p>There's the expectation, and then there's us. Way up here (hi 👋). As a team, we're proactive. We step up. Above and beyond is our standard. We look for ways to create 'wow' moments. It's how we turn our customers into raving fans. That's when we know we've done our job.</p>
                  <h4>2. Be a sponge</h4>
                  <p>We're always learning. We choose to grow. No stagnating here. As a team, we're coachable, and teachable. &nbsp;We embrace the tough stuff. We learn from challenges and failure. We ask for feedback and we show up with a growth mindset.</p>
                  <h4>3. Work as one</h4>
                  <p>The real MVP is a team player. We don't tolerate egos. We elevate others. We're humble, collaborative and work as a team. &nbsp;We've got different roles but we're here for the one purpose. Whether you're flooring, sales, cleaning or accounts, we're one team.</p>
                  <h4>4. Be bold &amp; kind</h4>
                  <p>We communicate with equal parts boldness &amp; kindness. We're honest about our problems, kind with the person. &nbsp;We don't tolerate BS. We keep it real, transparent &amp; open.</p>
                  <h4>5. Own it, no shortcuts</h4>
                  <p>We take ownership. We don't sit back and wait for others to make it happen. When we see a problem, we don't look the other way. We jump in and find the solution. We don't take shortcuts. We're all about quality.</p>
                </div>
                <div id="w-node-_07aea4bd-365c-85f5-4713-34ec43f59146-b59c828b" class="grid-column grid-column-inverse-careers"><img src="/images/Premrest_Home_Sustainability_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Home_Sustainability_Blob-p-500.webp 500w, images/Premrest_Home_Sustainability_Blob-p-800.webp 800w, images/Premrest_Home_Sustainability_Blob-p-1080.webp 1080w, images/Premrest_Home_Sustainability_Blob-p-1600.webp 1600w, images/Premrest_Home_Sustainability_Blob.webp 2000w" alt="" class="section-image"></div>
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
