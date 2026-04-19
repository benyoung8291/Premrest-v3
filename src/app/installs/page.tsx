import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';
import {
  ExpertsTeamGrid,
  LatestProjects,
  LatestResourceHero,
} from '@/components/cms/PageBlocks';

export const metadata: Metadata = {
  title: "Premrest | Commercial Floor Installs",
  description: "Level up your commercial space with floors that stun with every step.",
  openGraph: {
    title: "Premrest | Commercial Floor Installs",
    description: "Level up your commercial space with floors that stun with every step.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789ce5059019086e1d14f46_Installs_FeaturedImage.jpg"]
  },
  twitter: {
    title: "Premrest | Commercial Floor Installs",
    description: "Level up your commercial space with floors that stun with every step.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789ce5059019086e1d14f46_Installs_FeaturedImage.jpg"]
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
      <div class="installs-section-hero background-color-primary hero-padding-top">
        <div class="padding-global padding-section-medium">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div class="hero-heading-block">
                    <h1 data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75ac3" style="opacity:0" class="hero-headline installs-hero-headline">Crafted floor installs you can stand on</h1><img src="/images/Premrest_Rays_Cream.svg" loading="lazy" style="opacity:0" data-w-id="f4570e56-577b-d4fa-5c24-8bb3dbebff5d" alt="" class="installs-hero-rays">
                  </div>
                  <p data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75ac5" style="opacity:0" class="text-size-large installs-hero-subheadline">Level up your commercial space with floors <strong>that stun with every step.</strong></p>
                  <a data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75ac9" style="opacity:0" href="#installs-form" class="button is-tertiary installs-hero-button w-button">Let's chat</a>
                </div>
                <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75acb-083e3df1" class="grid-column grid-column-inverse">
                  <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75acc-083e3df1" class="column-image-block"><img src="/images/Premrest_Industries_Retail.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Retail-p-500.webp 500w, images/Premrest_Industries_Retail-p-800.webp 800w, images/Premrest_Industries_Retail-p-1080.webp 1080w, images/Premrest_Industries_Retail-p-1600.webp 1600w, images/Premrest_Industries_Retail.webp 2000w" alt="" class="hero-image hero-image-installs"><img src="/images/Premrest_Hero_Installs_Office.svg" loading="lazy" alt="" class="installs-hero-image-office"><img src="/images/Premrest_Scribble_Blue.svg" loading="lazy" alt="" class="installs-hero-image-scribble"><img src="/images/Premrest_Patch_Green.svg" loading="lazy" alt="" class="installs-hero-image-patch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="installs-section-weworkwith">
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
                  <a href="/builders-developers" class="weworkwith-links w-inline-block"><img src="/images/drawing.png" loading="lazy" alt="" class="weworkwith-icons">
                    <h4 class="heading-style-h4 weworkwith-clients">Builder or Developer</h4>
                    <div class="weworkwith-link-group">
                      <h4 class="heading-style-h4 weworkwith-link">Learn more</h4><img src="/images/68004b084ec3177b50af46e4_right-arrow.png" loading="lazy" width="32" alt="" class="weworkwith-arrow">
                    </div>
                  </a>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="installs-section-problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75ad7-083e3df1" class="column-image-block"><img src="/images/Premrest_Sustainability_Hero_Blob.webp" loading="lazy" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/Premrest_MeasuringTape.svg" loading="lazy" alt="" class="installs-problem-tape">
                  <h2>Sustainable flooring should be a standard, not a luxury.</h2>
                  <p>A floor isn’t just a detail, it’s the foundation of your entire space. When it’s not done right, it leaves a lasting impression - but for all the wrong reasons.<br><br>Buckling floors, uneven substrates, and premature wear only scratch the surface. Not only do they undermine the aesthetics of your space, but allow safety risks and costly repairs to slip through the cracks.<br><br>We get it - floors that aren’t delivered on time and budget derails an entire project. When you’re dealing a bunch of different contractors, reliability is a non-negotiable. There’s a lot at stake, you’re under pressure, and nothing more needs to go wrong.<br><br>That’s where we bridge the gap.<br><br>We’re the swiss army knife in your toolkit. We take a pragmatic approach that combines precision, workmanship and sustainability to everything we lay down; creating spaces that look incredible and stack up to the demands of commercial environments.<br><br>Let’s build your floor from the ground up.</p>
                  <a href="#installs-form" class="button w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="installs-section-solution">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2>Create magnificent art, right underneath your feet.</h2>
                  <p>We craft the canvas for your every move.<br>‍<br>That’s why we work with builders, developers, facility managers and businesses to create spaces that are innovative, functional, and environmentally responsible.<br><br>Your floor is the centrepiece that defines your entire space. Every space we put our hands to is an opportunity to design an environment people admire. Craftsmanship isn’t just what we do, it’s who we are.<br><br>And, because we care about the bigger picture, sustainability is grafted in all that we do. From selecting eco-conscious materials to minimising waste, creating beautiful spaces that respect the planet really get us going.<br><br>Partner with us, and you get much more than a flooring contractor. We buy into your vision, now and into the future.<br><br>Let’s level up your space, and your flooring.<br></p>
                  <a href="#installs-form" class="button w-button">Let's chat</a>
                </div>
                <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b04-083e3df1" class="grid-column pitfalls-column grid-column-inverse">
                  <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b05-083e3df1" class="pitfalls-container">
                    <div data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75b06" class="pitfalls-list-heading">
                      <h3 class="pitfalls-heading">Don't fall for these common pitfalls</h3>
                    </div>
                    <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b09-083e3df1" class="pitfalls-list-container">
                      <div class="pitfalls-list">
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b0c-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Floors fail to withstand heavy use and wear out prematurely</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b12-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Buckling or shifting floors due to poor installation</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b18-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Misaligned seams and edges that detract from a polished finish</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b1e-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Improper methods voiding manufacturer warranties</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b24-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Poor preparation resulting in floors that don’t last</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b2a-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">No proactive maintenance plan for long-term durability</p>
                          </div>
                        </div>
                        <div class="list-block">
                          <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b30-083e3df1" class="list-image"><img src="/images/cross.png" loading="lazy" alt="" class="image-5"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left">Skyrocketing costs from frequent repairs or replacements</p>
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
      </div>
      <div class="installs-section-team">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="the-floor-experts">
                <div class="grid-column">
                  <h2 id="w-node-c6eb8c58-77d4-66f2-aa74-f6c28bcaebb6-083e3df1" class="meet-the-team-heading">Talk to the<br>flooring experts</h2>
                </div>
                <div class="grid-column">
                  <!--SANITY:installsTeam-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="global-section-industries">
        <div class="padding-global padding-section-large">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2 id="w-node-_8bd42618-a93c-bdef-def6-781da269f2e6-a269f2e0" class="industries-title">A national service provider, from small spaces to landmark buildings.</h2>
                </div>
              </div>
              <div class="grid-10-columns">
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#commercial-offices" class="weworkwith-links w-inline-block"><img src="/images/commercial-offices.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Commercial offices</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#professional-services" class="weworkwith-links w-inline-block"><img src="/images/professional-services.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Professional services</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#banking-insurance" class="weworkwith-links w-inline-block"><img src="/images/banking.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Banking &amp;&nbsp;insurance</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#education" class="weworkwith-links w-inline-block"><img src="/images/education.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Education</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#government" class="weworkwith-links w-inline-block"><img src="/images/government.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Government</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#retail" class="weworkwith-links w-inline-block"><img src="/images/retail.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Retail</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#health" class="weworkwith-links w-inline-block"><img src="/images/health.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Health</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#fitness" class="weworkwith-links w-inline-block"><img src="/images/fitness.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Fitness</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#call-centres" class="weworkwith-links w-inline-block"><img src="/images/call-centre.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">24/7 call centres</h4>
                  </a>
                </div>
                <div class="grid-column weworkwith-columns">
                  <a href="/industries/#transport" class="weworkwith-links w-inline-block"><img src="/images/airplane-1.png" loading="lazy" alt="" class="industries-icons">
                    <h4 class="heading-style-h4 industries-category-title">Transport</h4>
                  </a>
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
                <div class="grid-column"><img src="/images/Premrest_Installs_Steps_Blob.webp" loading="lazy" alt="" class="section-image"></div>
                <div class="grid-column">
                  <h2 data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75b3d" style="opacity:0" class="text-light installs-steps-headline">Laying the foundation, step by step:</h2>
                  <div class="steps-container">
                    <div data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75b40" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-right">
                        <h4 class="steps-number-text heading-style-h2 rotate-left">1</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Get a quote</h4>
                      </div>
                    </div>
                    <div data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75b47" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-left">
                        <h4 class="steps-number-text heading-style-h2 rotate-right">2</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Install your ideal flooring vision</h4>
                      </div>
                    </div>
                    <div data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75b4e" style="opacity:0" class="steps-block">
                      <div class="steps-number-block rotate-right">
                        <h4 class="steps-number-text heading-style-h2 rotate-left">3</h4>
                      </div>
                      <div class="steps-block-headline">
                        <h4 class="steps-headline text-light">Enjoy a beautiful and functional space</h4>
                      </div>
                    </div>
                  </div>
                  <a data-w-id="e84d597b-ac46-abc5-4582-3a35e2b75b55" style="opacity:0" href="#installs-form" class="button is-secondary is-inverse w-button">Let's chat</a>
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
      <div class="installs-section-sustainability">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2 class="text-light">Beautiful flooring doesn't need to cost the earth.</h2>
                  <p class="text-light">Sustainability isn’t just a goal, but a responsibility we embrace and steward well. Every stage of our fitouts offers a future-minded opportunity that we leverage; from our materials, how they’re sourced, to how waste is managed.<br><br>We create spaces where innovation, functionality and environmental responsibility co-exist. It’s an enormous privilege to partner with clients to achieve ambitious sustainability visions while creating dynamic, considered spaces.<br><br>Our partnership with ResiLoop, an initiative by the Australian Resilient Flooring Association (ARFA), is one of the many ways we’re committed to sustainable flooring installations. We’re joining forces to create a closed-loop system that recovers, recycles, and reuses waste materials from our projects, minimising landfill contributions and promoting a circular economy.<br><br>We’re laying the groundwork for a sustainable tomorrow.</p>
                  <a href="/sustainability" class="button is-secondary is-inverse w-button">Learn more</a>
                </div>
                <div id="w-node-e84d597b-ac46-abc5-4582-3a35e2b75b6d-083e3df1" class="grid-column grid-column-inverse">
                  <div class="sustainability-installs-section-image-block"><img src="/images/Premrest_Installs_Sustainability_Blob.webp" loading="lazy" alt="" class="section-image"><img src="/images/logo-dark-2.webp" loading="lazy" alt="" class="resiloop-logo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="installs-section-waste-diversion"></div>
      <div class="installs-section-project">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-column">
                <h2 id="w-node-_52bc2ced-38b4-9de7-5f79-a384a3ad73c4-a3ad73bf" class="text-light">Latest projects</h2>
              </div>
              <!--SANITY:installsLatestProjects-->
            </div>
          </div>
        </div>
      </div>
      <div class="global-section-resources-installs">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper resources-grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2 id="w-node-_1b10ee59-1f7a-fd78-274e-e3df1cf9adbe-b3d28626">Latest resources</h2>
                </div>
              </div>
              <!--SANITY:installsLatestResource-->
              <div class="grid-1-column">
                <div class="grid-column">
                  <a id="w-node-_1b10ee59-1f7a-fd78-274e-e3df1cf9add7-b3d28626" href="/resources" class="button w-button">View more resources</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="installs-section-final-form">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div id="w-node-_87c9aa04-5a85-86af-ec9e-96591a1b8d19-083e3df1" class="grid-column grid-column-1">
                  <h2 id="w-node-_87c9aa04-5a85-86af-ec9e-96591a1b8d1a-083e3df1" class="text-light installs-final-headline-installs">Let’s lay the foundation for floors that wow.</h2>
                </div>
                <div id="w-node-_87c9aa04-5a85-86af-ec9e-96591a1b8d1c-083e3df1" class="grid-column-form">
                  <div class="form-container">
                    <div class="w-form">
                      <form id="installs-form" name="wf-form-Installs-Form-2" data-name="Installs Form" redirect="/installs/thanks" data-redirect="/installs/thanks" method="get" data-wf-page-id="6763597dd5d8a941083e3df1" data-wf-element-id="87c9aa04-5a85-86af-ec9e-96591a1b8d1f">
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="First-Name-Contact-2" class="form-label">First name</label><input class="form-field w-input" maxlength="256" name="First-name" data-name="First name" placeholder="" type="text" id="First-Name-Contact" required=""></div>
                          <div class="form-block-grid-column"><label for="Last-Name-Contact-2" class="form-label">Last name</label><input class="form-field w-input" maxlength="256" name="Last-name" data-name="Last name" placeholder="" type="text" id="Last-Name-Contact" required=""></div>
                        </div>
                        <div class="form-block-2-columns">
                          <div class="form-block-grid-column"><label for="Email-Address-Contact-2" class="form-label">Email address</label><input class="form-field w-input" maxlength="256" name="Email-address" data-name="Email address" placeholder="" type="email" id="Email-Address-Contact" required=""></div>
                          <div class="form-block-grid-column"><label for="Phone-Number-Contact-2" class="form-label">Phone number</label><input class="form-field w-input" maxlength="256" name="Phone-number" data-name="Phone number" placeholder="" type="tel" id="Phone-Number-Contact"></div>
                        </div><label for="Company-Name-Contact-2" class="form-label">Company</label><input class="form-field w-input" maxlength="256" name="Company-name" data-name="Company name" placeholder="" type="text" id="Company-Name-Contact" required=""><label for="Where-can-we-help-Contact-2" class="form-label">Where can we help?</label><textarea id="Where-can-we-help-Contact" name="Where-can-we-help" maxlength="5000" data-name="Where can we help?" placeholder="" required="" class="form-field w-input"></textarea>
                        <div data-sitekey="6LcsYNQqAAAAAASW7a203khVeE_7gtdLBWVoSWT1" class="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled"></div><input type="submit" data-wait="Please wait..." class="button contact-button w-button" value="Submit">
                      </form>
                      <div class="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div class="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
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
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script><!--  Google Tag Manager (noscript)  -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57VKP3XQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!--  End Google Tag Manager (noscript)  -->

`;

export default function Page() {
  const slots = {
    installsTeam: <ExpertsTeamGrid department="Installs" />,
    installsLatestProjects: <LatestProjects />,
    installsLatestResource: <LatestResourceHero categorySlug="installs" />,
  };

  return (
    <WebflowPage bodyClass="" >
      <WebflowHtml html={bodyHtml} slots={slots} />
    </WebflowPage>
  );
}
