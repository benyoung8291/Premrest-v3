import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Premrest - Beautiful Flooring | Commercial Floor Experts",
  description: "Australia's go-to for commercial floor care, cleaning and installing floors from small spaces to multi-level projects, with quality that flaws even the harshest critics.",
  openGraph: {
    title: "Premrest - Beautiful Flooring | Commercial Floor Experts",
    description: "Australia's go-to for commercial floor care, cleaning and installing floors from small spaces to multi-level projects, with quality that flaws even the harshest critics.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cc06bafc481a657e1967_Home_FeaturedImage.jpg"]
  },
  twitter: {
    title: "Premrest - Beautiful Flooring | Commercial Floor Experts",
    description: "Australia's go-to for commercial floor care, cleaning and installing floors from small spaces to multi-level projects, with quality that flaws even the harshest critics.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cc06bafc481a657e1967_Home_FeaturedImage.jpg"]
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
      <section class="home_section_hero_orange">
        <div class="padding-global padding-section-medium">
          <div class="container-xlarge">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div id="w-node-_97c7159a-ae20-3bc9-6d2d-67aaa472df89-cf92de7c" class="hero_content">
                  <div class="hero-heading-block"><img style="opacity:0" height="60" alt="green scribble" src="/images/Premrest_Scribble_Green.svg" loading="lazy" data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df8b" class="scribble hero-heading-scribble"><img style="opacity:0" height="40" alt="blue rays" src="/images/Premrest_Rays_Blue.svg" loading="lazy" data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df8c" class="rays hero-heading-rays"><img style="opacity:0" height="50" alt="tan patch" src="/images/Premrest_Patch_Tan_home.svg" loading="lazy" data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df8d" class="patch hero-heading-patch">
                    <h1 data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df8e" style="opacity:0" class="heading-6 home-hero-headline home-hero-headline-m home-hero-headline-s home-hero-heading-new">Beautiful</h1>
                    <h1 data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df90" style="opacity:0" class="heading-6 home-hero-headline home-hero-headline-padding home-hero-headline-m home-hero-headline-s home-hero-heading-new">Flooring</h1>
                  </div>
                  <p id="w-node-_97c7159a-ae20-3bc9-6d2d-67aaa472df92-cf92de7c" data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df92" style="opacity:0" class="text-size-large home-hero-subheadline-new"><strong>Australia's go-to for commercial floor care</strong>, cleaning and installing floors from small spaces to multi-level projects, with quality that flaws even the harshest critics.</p>
                  <div id="w-node-_97c7159a-ae20-3bc9-6d2d-67aaa472df96-cf92de7c">
                    <a href="/contact" data-w-id="97c7159a-ae20-3bc9-6d2d-67aaa472df97" style="opacity:0" class="button-4 is-tertiary w-button">Let's chat</a>
                  </div>
                </div>
                <div id="w-node-_97c7159a-ae20-3bc9-6d2d-67aaa472df99-cf92de7c" class="home-hero-image-block">
                  <div class="column-image-block"><img sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Hero_Blob-p-500.webp 500w, images/Premrest_Hero_Blob-p-800.webp 800w, images/Premrest_Hero_Blob-p-1080.webp 1080w, images/Premrest_Hero_Blob-p-1600.webp 1600w, images/Premrest_Hero_Blob.webp 2000w" alt="people inside a common workspace" src="/images/Premrest_Hero_Blob.webp" loading="lazy" class="section-image section-image-right"><img loading="lazy" src="/images/Premrest_Lines_Green.svg" alt="green lines" class="home-hero-image-lines"><img loading="lazy" src="/images/Premrest_Skyline_Tan.svg" alt="tan skyline" class="home-hero-image-skyline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="home-section-weworkwith">
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
                <div class="grid-column weworkwith-columns">
                  <a href="/builders-developers" class="weworkwith-links w-inline-block"><img src="/images/drawing.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Builder or Developer</h4>
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
      <div class="home_section_problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid_wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-d9eef1ef-9d82-d4c9-72cd-53cfaced71bb-cf92de7c" class="column-image-block"><img src="/images/Premrest_Home_Problem_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Home_Problem_Blob-p-500.webp 500w, images/Premrest_Home_Problem_Blob-p-800.webp 800w, images/Premrest_Home_Problem_Blob-p-1080.webp 1080w, images/Premrest_Home_Problem_Blob-p-1600.webp 1600w, images/Premrest_Home_Problem_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/Premrest_DirtyShoe_Charcoal.svg" loading="lazy" width="Auto" height="200" alt="" class="home-problem-dirtyshoe">
                  <h2>Many commercial facilities are forsaking their largest canvas.</h2>
                  <p>Having been around for decades, time and time again we see floors that become an afterthought. They're left to general cleaners who simply lack expertise and a PhD in floor care. Dirt, grime and wear are left to build up until you’re suddenly facing a bigger mess - and an even bigger bill.<br><br>It all leads to the same narrow path: tired, uninviting floors that wear out faster, skyrocketing restoration costs, even voided warranties. More stress, more downtime, and higher expenses that could have been avoided with a little more foresight.<br><br>What’s worse, subpar installations that don’t stack up to the demands of commercial use only exacerbate the problem. High quality flooring with aesthetic appeal should be a standard, not a luxury. We deliver long-lasting results that make your floors - and your facility shine.<br><br>Don’t let poor maintenance and half-hearted installations define your space. Transform your floors from a constant source of frustration, into the showpiece they were meant to be.</p>
                  <a id="w-node-_8b8d4ea9-b977-2166-6fe2-6c9cee22610a-cf92de7c" href="/contact" class="button w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_section_solution">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-column">
                <h2 id="w-node-c781be1a-8fa7-faa0-4bf5-3384a554b7ab-cf92de7c" class="home-solution-headline">Secure the masterpiece underneath your feet.</h2>
                <p id="w-node-_23b2e492-a135-0243-9c3e-bcf5a95e2f7f-cf92de7c" class="home-solution-text">We do one thing, and do one thing well. That means, every commercial flooring nuance is backed by years of experience, and a solution for even the toughest challenges.<br><br>Whether it’s installation, periodicals, or restoration, we’ve got your floors covered - literally.</p>
              </div>
              <div id="w-node-_6f7909af-f2f6-3601-9be6-a63888f87905-cf92de7c" class="grid-3-columns grid-services">
                <a data-w-id="1c28cfa2-ccbc-392b-0422-36cc08322a26" style="opacity:0" href="/cleaning" class="services-links w-inline-block">
                  <div class="grid-column">
                    <div id="w-node-_04e67520-8a36-8093-4560-858bef974681-cf92de7c" class="services-content grid-column grid-column-services-cards">
                      <h3 class="services-headline">Revived floors, flawless facilities.</h3>
                      <p class="services-subheadline">Give your commercial floors a new lease on life, with no problems swept under the carpet.</p>
                    </div>
                    <div id="w-node-cc37174f-508b-2a34-c9ba-fede7adca037-cf92de7c" class="services-badge-block">
                      <h3 id="w-node-a28a176e-3784-efe3-98d7-5e26344b3bf3-cf92de7c" class="services-badge">Cleaning</h3>
                    </div>
                    <div class="services-cards">
                      <div class="services-images">
                        <div class="services-overlay"></div><img src="/images/DSC03156.webp" loading="lazy" sizes="(max-width: 1800px) 100vw, 1800px" height="Auto" alt="" srcset="/images/DSC03156-p-500.webp 500w, images/DSC03156-p-800.webp 800w, images/DSC03156-p-1080.webp 1080w, images/DSC03156-p-1600.webp 1600w, images/DSC03156.webp 1800w" class="services-image">
                      </div>
                    </div>
                  </div>
                </a>
                <a data-w-id="8adb182d-0017-8337-6251-914fb1e3221c" style="opacity:0" href="/installs" class="services-links w-inline-block">
                  <div class="grid-column">
                    <div id="w-node-c1980a6a-6a8f-b9e3-0df3-e7fc94aacc10-cf92de7c" class="services-content grid-column grid-column-services-cards">
                      <h3 class="services-headline">Crafted floor installs you can stand on.</h3>
                      <p class="services-subheadline">Level up your commercial space with floors that stun with every step.</p>
                    </div>
                    <div id="w-node-c1980a6a-6a8f-b9e3-0df3-e7fc94aacc17-cf92de7c" class="services-badge-block badge-block-inverse">
                      <h3 id="w-node-c1980a6a-6a8f-b9e3-0df3-e7fc94aacc18-cf92de7c" class="services-badge services-badge-heading-inverse">Installs</h3>
                    </div>
                    <div class="services-cards">
                      <div class="services-images">
                        <div class="services-overlay"></div><img src="/images/JLL_Melbourne_HighRes-40.webp" loading="lazy" sizes="(max-width: 1170px) 100vw, 1170px" height="Auto" alt="" srcset="/images/JLL_Melbourne_HighRes-40-p-500.webp 500w, images/JLL_Melbourne_HighRes-40-p-800.webp 800w, images/JLL_Melbourne_HighRes-40-p-1080.webp 1080w, images/JLL_Melbourne_HighRes-40.webp 1170w" class="services-image">
                      </div>
                    </div>
                  </div>
                </a>
                <a data-w-id="0d677895-d8e1-3d76-4fc0-9c2815e5ff23" style="opacity:0" href="/special-projects" class="services-links w-inline-block">
                  <div class="grid-column">
                    <div id="w-node-a06d74a0-3f3d-3849-b9fa-f8c14800733f-cf92de7c" class="services-content grid-column grid-column-services-cards">
                      <h3 class="services-headline">The 'not-quite flooring' conundrums.</h3>
                      <p class="services-subheadline">From complex restorations, graffiti removal to areas of high compliance, we’ve got your back.</p>
                    </div>
                    <div id="w-node-a06d74a0-3f3d-3849-b9fa-f8c148007346-cf92de7c" class="services-badge-block">
                      <h3 id="w-node-a06d74a0-3f3d-3849-b9fa-f8c148007347-cf92de7c" class="services-badge">Special Projects</h3>
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
              <a id="w-node-f4ac1174-20cf-49e2-1052-f0db018f3a88-cf92de7c" href="/contact" class="button w-button">Let's chat</a>
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
      <div class="home-section-sustainability">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper grid-column-2">
              <div class="grid-2-columns">
                <div id="w-node-d902ec46-dafe-663c-73e2-51769571614b-cf92de7c" class="grid-column">
                  <h2 class="text-light">Beautiful flooring doesn’t need to cost the earth.</h2>
                  <p class="text-light">Sustainability is woven into our fabric, and grounded in everything we do.<br><br>Environmental responsibility is more than just ticking boxes or meeting targets. We’re fostering an environment for the generations; crafting floors that are as functional and elegant as they are kind to the planet.<br><br>Flooring shouldn’t just look good - it should do good too.</p>
                  <a href="/sustainability" class="button is-secondary is-inverse w-button">Learn more</a>
                </div>
                <div id="w-node-_7506c05f-7a2d-1c2c-e159-3cf52ea066c0-cf92de7c" class="grid-column grid-column-2-inverse">
                  <div id="w-node-a0bb6d84-ec3e-dc7f-0506-6718996b2b5c-cf92de7c" class="column-image-block"><img src="/images/Premrest_Home_Sustainability_Blob.webp" loading="lazy" sizes="100vw" srcset="/images/Premrest_Home_Sustainability_Blob-p-500.webp 500w, images/Premrest_Home_Sustainability_Blob-p-800.webp 800w, images/Premrest_Home_Sustainability_Blob-p-1080.webp 1080w, images/Premrest_Home_Sustainability_Blob-p-1600.webp 1600w, images/Premrest_Home_Sustainability_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-section-letstalkfacilities">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper resources-grid-wrapper">
              <div class="grid-2-columns-ltf">
                <div class="grid-column"><img src="/images/67a54d0fe733570a899a1d4b_LetsTalkFacilities_Logo2.svg" loading="lazy" alt="" class="letstalkfacilities-section-logo">
                  <p class="letstalkfacilities-section-text">The podcast for all things facility management, commercial facilities, HVAC to carpet cleaning.<br><br>Join us as we explore practical insights, industry trends, and innovative strategies for maintaining and enhancing commercial spaces.</p>
                  <div class="podcast-logos">
                    <a href="https://podcasts.apple.com/us/podcast/lets-talk-facilities/id1794530719" target="_blank" class="podcast-link w-inline-block"><img src="/images/apple-icon-cream.webp" loading="lazy" sizes="100vw" srcset="/images/apple-icon-cream-p-500.webp 500w, images/apple-icon-cream-p-800.webp 800w, images/apple-icon-cream-p-1080.webp 1080w, images/apple-icon-cream-p-1600.webp 1600w, images/apple-icon-cream.webp 2000w" alt="" class="podcast-logo is-cream"></a>
                    <a href="https://www.youtube.com/@premrest" target="_blank" class="podcast-link w-inline-block"><img src="/images/youtube-icon-cream.webp" loading="lazy" sizes="100vw" srcset="/images/youtube-icon-cream-p-500.webp 500w, images/youtube-icon-cream-p-800.webp 800w, images/youtube-icon-cream-p-1080.webp 1080w, images/youtube-icon-cream-p-1600.webp 1600w, images/youtube-icon-cream.webp 2000w" alt="" class="podcast-logo is-cream"></a>
                    <a href="https://open.spotify.com/show/7bO9C0xjbrc5sYduBnJHHv?si=7c0c7e6877154f3e" target="_blank" class="podcast-link w-inline-block"><img src="/images/spotify-icon-cream.webp" loading="lazy" sizes="100vw" srcset="/images/spotify-icon-cream-p-500.webp 500w, images/spotify-icon-cream-p-800.webp 800w, images/spotify-icon-cream-p-1080.webp 1080w, images/spotify-icon-cream-p-1600.webp 1600w, images/spotify-icon-cream.webp 2000w" alt="" class="podcast-logo is-cream"></a>
                    <a href="https://youtube.com/playlist?list=PLMLI27bMPtHrw4TgptEyP8nRlmCutCFUS&amp;si=2_NXJlnmYkGmK0BB" target="_blank" class="podcast-link w-inline-block"><img src="/images/youtubemusic-icon-cream.webp" loading="lazy" sizes="100vw" srcset="/images/youtubemusic-icon-cream-p-500.webp 500w, images/youtubemusic-icon-cream-p-800.webp 800w, images/youtubemusic-icon-cream-p-1080.webp 1080w, images/youtubemusic-icon-cream-p-1600.webp 1600w, images/youtubemusic-icon-cream.webp 2000w" alt="" class="podcast-logo is-cream"></a>
                  </div>
                  <a href="/lets-talk-facilities" class="button is-secondary is-inverse podcast-home-button w-button">View podcast</a>
                </div>
                <div class="grid-column ltf-spacer">
                  <div class="resources-wrapper w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <div class="letstalkfacilities-section-video">
                          <div class="ltf-badges-container-section">
                            <div class="content-badge-service">
                              <h6 fs-cmsfilter-field="*" class="content-service-heading">Latest episode</h6>
                            </div>
                          </div>
                          <a href="#" class="w-inline-block">
                            <div class="letstalkfacilities-section-image"><img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" class="ltf-resources-scribbles"><img loading="lazy" src="/images/Premrest_Patch_Cream.svg" alt="" class="ltf-resources-patch"><img src="/images/play-button.png" loading="lazy" alt="" class="video-play-button">
                              <div class="letstalkfacilities-section-overlay"></div><img src="/images/DSC03156.webp" loading="lazy" alt="" height="Auto" class="letstalkfacilities-section-videoimage w-dyn-bind-empty">
                            </div>
                          </a>
                          <div class="letstalkfacilities-section-content grid-column grid-column-services-cards">
                            <h3 class="ltf-section-headline w-dyn-bind-empty"></h3>
                            <p class="ltf-section-subheadline w-dyn-bind-empty"></p>
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
        </div>
      </div>
      <div class="global-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-fce61bbe-6568-c525-c7f3-039ad349bcec-cf92de7c" class="grid-column grid-column-1">
                <h2 id="w-node-fce61bbe-6568-c525-c7f3-039ad349bced-cf92de7c" class="text-light home-final-headline">Let’s create floors that sweep you off your feet.</h2>
                <a id="w-node-fce61bbe-6568-c525-c7f3-039ad349bcef-cf92de7c" href="/contact" class="button home-final-button w-button">Let's chat</a>
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
