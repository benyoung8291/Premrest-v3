import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Premrest | Special Projects",
  description: "From complex restorations, graffiti removal to areas of high compliance, we’ve got your back.",
  openGraph: {
    title: "Premrest | Special Projects",
    description: "From complex restorations, graffiti removal to areas of high compliance, we’ve got your back.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cf04285f3ca4ce1a99fd_SpecialProjects_FeaturedImage.jpg"]
  },
  twitter: {
    title: "Premrest | Special Projects",
    description: "From complex restorations, graffiti removal to areas of high compliance, we’ve got your back.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cf04285f3ca4ce1a99fd_SpecialProjects_FeaturedImage.jpg"]
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
      <div class="special-projects-section-hero background-color-primary hero-padding-top">
        <div class="padding-global padding-section-medium">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div class="hero-heading-block">
                    <h1 data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916e982" style="opacity:0" class="hero-headline special-projects-hero-headline">The<br>'not-quite-flooring' conundrums</h1><img src="/images/Premrest_Scribble_Cream.svg" loading="lazy" style="opacity:0" data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916e984" alt="" class="special-projects-hero-scribbles">
                  </div>
                  <p data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916e985" style="opacity:0" class="text-size-large special-projects-hero-subheadline">From complex restorations, fit-for-purpose materials, graffiti removal to areas of high compliance, <strong>we’ve got your back.</strong></p>
                  <a data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916e989" style="opacity:0" href="/contact" class="button is-tertiary installs-hero-button w-button">Let's chat</a>
                </div>
                <div id="w-node-e509cbbe-cd2e-4516-bb5e-2d706916e98b-22582955" class="grid-column grid-column-inverse">
                  <div id="w-node-e509cbbe-cd2e-4516-bb5e-2d706916e98c-22582955" class="column-image-block"><img src="/images/Premrest_SpecialProjects_Hero_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_SpecialProjects_Hero_Blob-p-500.webp 500w, images/Premrest_SpecialProjects_Hero_Blob-p-800.webp 800w, images/Premrest_SpecialProjects_Hero_Blob-p-1080.webp 1080w, images/Premrest_SpecialProjects_Hero_Blob-p-1600.webp 1600w, images/Premrest_SpecialProjects_Hero_Blob.webp 2000w" alt="" class="hero-image hero-image-special-projects"><img src="/images/Premrest_SpecialProjects_Brains.svg" loading="lazy" alt="" class="special-projects-hero-image-brains"><img src="/images/Premrest_Patch_Green.svg" loading="lazy" alt="" class="special-projects-hero-image-patch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="special-projects-section-weworkwith">
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
              <div class="grid-5-columns">
                <div class="grid-column weworkwith-columns">
                  <a href="/facility-managers" class="weworkwith-links w-inline-block"><img src="/images/building.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Facility Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/building-managers" class="weworkwith-links w-inline-block"><img src="/images/apartment.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Building Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/procurement-managers" class="weworkwith-links w-inline-block"><img src="/images/flowchart.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Procurement Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/sustainability-managers" class="weworkwith-links w-inline-block"><img src="/images/globe.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Sustainability Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/general-cleaning-managers" class="weworkwith-links w-inline-block"><img src="/images/data-cleaning.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">General Cleaning Manager</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="special-projects-section-problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-e509cbbe-cd2e-4516-bb5e-2d706916e997-22582955" class="column-image-block"><img src="/images/Premrest_SpecialProjects_Problem_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_SpecialProjects_Problem_Blob-p-500.webp 500w, images/Premrest_SpecialProjects_Problem_Blob-p-800.webp 800w, images/Premrest_SpecialProjects_Problem_Blob-p-1080.webp 1080w, images/Premrest_SpecialProjects_Problem_Blob-p-1600.webp 1600w, images/Premrest_SpecialProjects_Problem_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/Premrest_SpecialProjects_Confused.svg" loading="lazy" alt="" class="special-projects-problem-confused">
                  <h2>Your quirky problems are our exciting projects.</h2>
                  <p>We revel in the unusual and thrive on the unexpected. Special projects is your go-to for those “not-quite-flooring” conundrums that keep facility managers up at night. Led by Colin Saddington, our team loves rolling up our sleeves and tackling the one-of-a-kind challenges that don’t come with a clear solution.<br>‍<br>When things get tricky, we dig in with curiosity and grit, looking at every angle to figure out what works best. We lean into the odd and unpredictable because that’s where we shine. If it doesn’t fit the mould, it’s probably perfect for us.<br></p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="installs-section-steps">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/Premrest_SpecialProjects_Steps_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_SpecialProjects_Steps_Blob-p-500.webp 500w, images/Premrest_SpecialProjects_Steps_Blob-p-800.webp 800w, images/Premrest_SpecialProjects_Steps_Blob-p-1080.webp 1080w, images/Premrest_SpecialProjects_Steps_Blob-p-1600.webp 1600w, images/Premrest_SpecialProjects_Steps_Blob.webp 2000w" alt="" class="section-image"></div>
                <div class="grid-column">
                  <h2 data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916ea21" style="opacity:0" class="text-light installs-steps-headline">Unravelling the tricky, step by step:</h2>
                  <div class="steps-container">
                    <div data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916ea24" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-right">
                        <h4 class="steps-number-text heading-style-h2 rotate-left">1</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Spill your head scratching problems</h4>
                      </div>
                    </div>
                    <div data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916ea2b" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-left">
                        <h4 class="steps-number-text heading-style-h2 rotate-right">2</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">We'll devise the perfect fix</h4>
                      </div>
                    </div>
                    <div data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916ea32" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-right">
                        <h4 class="steps-number-text heading-style-h2 rotate-left">3</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Relax, that's a Colin special</h4>
                      </div>
                    </div>
                  </div>
                  <a data-w-id="e509cbbe-cd2e-4516-bb5e-2d706916ea39" style="opacity:0" href="/contact" class="button is-secondary is-inverse w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="global_section-testimonials">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-1-column">
              <h2 id="w-node-_88e6613d-c201-6043-92a4-6b403c387b72-3c387b6e" class="heading-style-h2 home-testimonial-headline">Take the word of global consultancy firms, banks, tech, and other renowned clients</h2>
              <div data-delay="4000" data-animation="slide" class="testimonial-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                <div class="testimonial-mask w-slider-mask">
                  <div class="testimonial-slides w-slide">
                    <div class="testimonial-row">
                      <div class="testimonial-container">
                        <div id="w-node-_36dc6565-92f0-4fb9-9a26-d59be2cff2f8-3c387b6e" class="testimonial-image"><img loading="lazy" src="/images/GuyCartwright.webp" alt="" class="testimonial-profile-image"><img loading="lazy" src="/images/Premrest_Rays_Blue.svg" alt="" class="testimonial-rays"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="testimonial-patch"></div>
                        <div class="testimonial-content">
                          <p class="testimonial-paragraph">Having worked with Premrest for over 10 years, they are not just a contractor, they are true partner for all flooring, upholstery and restoration requirements your clients have. The expertise that Colin and Premrest team provide is second to none when providing guidance to JLL teams and clients. Attention to detail, communication and overall delivery sets them apart.</p>
                          <h4 class="testimonial-name">Guy Cartwright</h4>
                          <p class="testimonial-name-title">Account Director - JLL</p>
                          <div class="testimonial-logos-container"><img loading="lazy" src="/images/JLL.png" alt="" class="testimonial-jll-logo"><img loading="lazy" src="/images/Medibank_logo.svg" alt="" class="testimonial-medibank-logo"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-slides w-slide">
                    <div class="testimonial-row">
                      <div class="testimonial-container">
                        <div id="w-node-_88e6613d-c201-6043-92a4-6b403c387b79-3c387b6e" class="testimonial-image"><img loading="lazy" src="/images/AP_AU_VIC_CHERY_STEVENS_JUNE_2019_007_BW_Crop.jpg" alt="" class="testimonial-profile-image"><img loading="lazy" src="/images/Premrest_Rays_Blue.svg" alt="" class="testimonial-rays"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="testimonial-patch"></div>
                        <div class="testimonial-content">
                          <p class="testimonial-paragraph"><em>I have worked with Premrest for over 10 years, throughout this time they have always been an integrated component of our service delivery to our clients and more importantly were part of the JLL team. A true partnership built upon credible reliable service and a relationship built on trust. When our clients looked for productivity or cost efficiency Premrest would work with us to delivery cost effective service without cutting back on quality.</em><br></p>
                          <h4 class="testimonial-name">Cheryl Stevens</h4>
                          <p class="testimonial-name-title">Head of Corporate Business, Executive Director at JLL<br></p>
                          <div class="testimonial-logos-container"><img loading="lazy" src="/images/JLL.png" alt="" class="testimonial-jll-logo"><img loading="lazy" src="/images/Medibank_logo.svg" alt="" class="testimonial-medibank-logo"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-slides w-slide">
                    <div class="testimonial-row">
                      <div class="testimonial-container">
                        <div id="w-node-_88e6613d-c201-6043-92a4-6b403c387b8b-3c387b6e" class="testimonial-image"><img loading="lazy" src="/images/1678265518476.jpeg" alt="" class="testimonial-profile-image"><img loading="lazy" src="/images/Premrest_Rays_Blue.svg" alt="" class="testimonial-rays"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="testimonial-patch"></div>
                        <div class="testimonial-content">
                          <p class="testimonial-paragraph"><em>I highly recommend Premrest for all your flooring needs. With their expertise and commitment to quality, they consistently deliver outstanding results. One of the key strengths of Premrest is their ability to quickly assess the situation and provide prompt and effective solutions. They understand the urgency and work diligently to minimise the disruption caused to your property.</em></p>
                          <h4 class="testimonial-name">Maria Nicholas</h4>
                          <p class="testimonial-name-title">WoAG - National Facilities Manager at JLL</p>
                          <div class="testimonial-logos-container"><img loading="lazy" src="/images/JLL.png" alt="" class="testimonial-jll-logo"><img loading="lazy" src="/images/Medibank_logo.svg" alt="" class="testimonial-medibank-logo"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="left-arrow w-slider-arrow-left">
                  <div class="icon w-icon-slider-left"></div>
                </div>
                <div class="right-arrow w-slider-arrow-right">
                  <div class="icon-2 w-icon-slider-right"></div>
                </div>
                <div class="slide-nav w-slider-nav w-slider-nav-invert w-round"></div>
              </div>
              <div class="logo-rotator-container padding-logo-top">
                <div data-w-id="88e6613d-c201-6043-92a4-6b403c387b9f" class="logo_component-slider"><img width="300" loading="lazy" alt="" src="/images/ANZ.png" class="logo-slider-img logo-width-medium"><img width="300" loading="lazy" alt="" src="/images/JLL.png" class="logo-slider-img logo-width-medium"><img width="250" loading="lazy" alt="" src="/images/KPMG.svg" class="logo-slider-img logo-width-medium"><img width="300" loading="lazy" alt="" src="/images/101Collins.png" class="logo-slider-img logo-width-small"><img width="300" loading="lazy" alt="" src="/images/Concentrix.png" class="logo-slider-img logo-width-large"><img width="300" loading="lazy" alt="" src="/images/Vanguard.svg.png" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/NetApp.png" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/BendigoBank.png" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/Medibank_logo.svg" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/PinsentMasons.svg" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/Telstra.svg" class="logo-slider-img"><img width="300" loading="lazy" alt="" src="/images/MorganStanley.png" class="logo-slider-img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="special-projects-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-e509cbbe-cd2e-4516-bb5e-2d706916ea58-22582955" class="grid-column grid-column-1">
                <h2 id="w-node-e509cbbe-cd2e-4516-bb5e-2d706916ea59-22582955" class="text-light special-projects-final-headline">Let’s make your toughest challenges our proudest wins.</h2>
                <a id="w-node-e509cbbe-cd2e-4516-bb5e-2d706916ea5b-22582955" href="/contact" class="button home-final-button w-button">Let's chat</a>
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
