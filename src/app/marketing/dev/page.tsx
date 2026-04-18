import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Premrest"
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
      <section class="home_section_hero_new">
        <div class="padding-global padding-section-medium padding-remove-bottom">
          <div class="container-xlarge">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div id="w-node-e3c2c193-9ab3-10e0-4384-2ca711f4c2da-e958de0c" class="hero_content">
                  <div class="hero-heading-block"><img src="../images/Premrest_Scribble_Green.svg" loading="lazy" style="opacity:0" height="60" alt="green scribble" data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2dc" class="scribble hero-heading-scribble"><img src="../images/Premrest_Rays_Blue.svg" loading="lazy" style="opacity:0" height="40" alt="blue rays" data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2dd" class="rays hero-heading-rays"><img src="../images/Premrest_Patch_Tan_home.svg" loading="lazy" style="opacity:0" height="50" alt="tan patch" data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2de" class="patch hero-heading-patch">
                    <h1 data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2df" style="opacity:0" class="heading home-hero-headline home-hero-headline-m home-hero-headline-s home-hero-heading-new">Beautiful</h1>
                    <h1 data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2e1" style="opacity:0" class="heading home-hero-headline home-hero-headline-padding home-hero-headline-m home-hero-headline-s home-hero-heading-new">Flooring</h1>
                  </div>
                  <p id="w-node-e3c2c193-9ab3-10e0-4384-2ca711f4c2e3-e958de0c" data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2e3" style="opacity:0" class="text-size-large home-hero-subheadline-new"><strong>Australia's go-to for commercial floor care</strong>, cleaning and installing floors from small spaces to multi-level projects, with quality that flaws even the harshest critics.</p>
                  <div id="w-node-e3c2c193-9ab3-10e0-4384-2ca711f4c2e7-e958de0c">
                    <a data-w-id="e3c2c193-9ab3-10e0-4384-2ca711f4c2e8" style="opacity:0" href="/../contact" class="button is-tertiary w-button">Let's chat</a>
                  </div>
                </div>
                <div id="w-node-e3c2c193-9ab3-10e0-4384-2ca711f4c2ea-e958de0c" class="home-hero-image-block">
                  <div class="column-image-block-scribbles"><img src="../images/DSC031562.webp" loading="lazy" sizes="(max-width: 1800px) 100vw, 1800px" srcset="../images/DSC031562-p-500.webp 500w, ../images/DSC031562-p-800.webp 800w, ../images/DSC031562-p-1080.webp 1080w, ../images/DSC031562-p-1600.webp 1600w, ../images/DSC031562.webp 1800w" alt="" class="section-image-portrait-hero"><img src="../images/Premrest_Lines_Green.svg" loading="lazy" alt="green lines" class="home-hero-image-lines"><img src="../images/Premrest_Skyline_Tan.svg" loading="lazy" alt="tan skyline" class="home-hero-image-skyline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="cleaning-section-weworkwith">
        <div class="padding-global padding-section-small">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <div class="helpima-block">
                    <h3 class="helpima-heading">Help! I'm a...</h3>
                  </div>
                </div>
              </div>
              <div class="grid-6-columns">
                <div class="grid-column weworkwith-columns">
                  <a href="/../facility-managers" class="weworkwith-links w-inline-block"><img src="../images/building.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Facility Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="../images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/../building-managers" class="weworkwith-links w-inline-block"><img src="../images/apartment.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Building Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="../images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/../procurement-managers" class="weworkwith-links w-inline-block"><img src="../images/flowchart.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Procurement Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="../images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/../sustainability-managers" class="weworkwith-links w-inline-block"><img src="../images/globe.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Sustainability Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="../images/right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/../general-cleaning-managers" class="weworkwith-links w-inline-block"><img src="../images/data-cleaning.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">General Cleaning Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="../images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/../builders-developers" class="weworkwith-links w-inline-block"><img src="../images/drawing.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Builder or Developer</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="../images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_section_problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-b0fda9bf-fc2c-8480-08c2-ecc7c58a86d8-e958de0c" class="column-image-block"><img src="../images/DSC031562.webp" loading="lazy" sizes="(max-width: 1800px) 100vw, 1800px" srcset="../images/DSC031562-p-500.webp 500w, ../images/DSC031562-p-800.webp 800w, ../images/DSC031562-p-1080.webp 1080w, ../images/DSC031562-p-1600.webp 1600w, ../images/DSC031562.webp 1800w" alt="" class="section-image-portrait"></div>
                </div>
                <div class="grid-column"><img src="../images/Premrest_DirtyShoe_Charcoal.svg" loading="lazy" width="Auto" height="200" alt="" class="home-problem-dirtyshoe">
                  <h2>Many commercial facilities are forsaking their largest canvas.</h2>
                  <p>Having been around for decades, time and time again we see floors that become an afterthought. They're left to general cleaners who simply lack expertise and a PhD in floor care. Dirt, grime and wear are left to build up until you’re suddenly facing a bigger mess - and an even bigger bill.<br><br>It all leads to the same narrow path: tired, uninviting floors that wear out faster, skyrocketing restoration costs, even voided warranties. More stress, more downtime, and higher expenses that could have been avoided with a little more foresight.<br><br>What’s worse, subpar installations that don’t stack up to the demands of commercial use only exacerbate the problem. High quality flooring with aesthetic appeal should be a standard, not a luxury. We deliver long-lasting results that make your floors - and your facility shine.<br><br>Don’t let poor maintenance and half-hearted installations define your space. Transform your floors from a constant source of frustration, into the showpiece they were meant to be.</p>
                  <a id="w-node-b0fda9bf-fc2c-8480-08c2-ecc7c58a86e9-e958de0c" href="/../contact" class="button w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="../js/webflow.js" type="text/javascript"></script><!--  Google Tag Manager (noscript)  -->
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
