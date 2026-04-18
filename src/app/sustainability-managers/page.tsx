import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Premrest | Sustainability Managers | Commercial Floor Cleaning & Installs",
  description: "Strengthen your ESG position with sustainable floor care.",
  openGraph: {
    title: "Premrest | Sustainability Managers | Commercial Floor Cleaning & Installs",
    description: "Strengthen your ESG position with sustainable floor care."
  },
  twitter: {
    title: "Premrest | Sustainability Managers | Commercial Floor Cleaning & Installs",
    description: "Strengthen your ESG position with sustainable floor care."
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
      <div class="weworkwith-section-hero background-color-darkmuted hero-padding-top">
        <div class="padding-global padding-section-medium">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/globe.png" loading="lazy" style="opacity:0" data-w-id="236a6eff-665e-dece-8a9b-a0f6a51cfd14" alt="" class="weworkwith-icon">
                  <div data-w-id="56e44f72-b22c-e551-df10-3672636954c6" style="opacity:0" class="weworkwith-little-heading sustainability-managers">
                    <h3 class="weworkwith-title-heading">Sustainability Managers:</h3>
                  </div>
                  <div class="hero-heading-block">
                    <h1 data-w-id="8a5b2e3c-c577-5343-879f-9d3f5576a813" style="opacity:0" class="hero-headline weworkwith-hero-headline">Strengthen your ESG position with sustainable floor care.</h1>
                  </div>
                  <a data-w-id="32881dfd-b184-4904-6d82-ca84f3165491" style="opacity:0" href="/contact" class="button is-primary weworkwith-hero-button w-button">Let's chat</a>
                </div>
                <div id="w-node-_5ab817d8-e59e-8435-7456-975a1331faea-3caeac4b" class="grid-column grid-column-inverse">
                  <div id="w-node-_5601d830-bb0c-32df-ce66-920f9dc42bca-3caeac4b" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Hero_Blob_SM.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_Hero_Blob_SM-p-500.webp 500w, images/Premrest_WeWorkWith_Hero_Blob_SM-p-800.webp 800w, images/Premrest_WeWorkWith_Hero_Blob_SM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Hero_Blob_SM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Hero_Blob_SM.webp 2000w" alt="" class="hero-image hero-image-weworkwith"><img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" class="weworkwith-hero-image-scribble"><img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" class="weworkwith-hero-image-patch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weworkwith-section-problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-d46871d1-599c-2295-8068-a9a5f68c2562-3caeac4b" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Problem_Blob_SM.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_Problem_Blob_SM-p-500.webp 500w, images/Premrest_WeWorkWith_Problem_Blob_SM-p-800.webp 800w, images/Premrest_WeWorkWith_Problem_Blob_SM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Problem_Blob_SM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Problem_Blob_SM.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column">
                  <h2>Finding practical, meaningful sustainability wins is harder than it should be.</h2>
                  <p>Sustainability targets are rising fast, but high-impact, actionable wins aren't always easy to spot.<br>‍<br>Across most facilities, the big moves get the focus first: LED lighting upgrades, HVAC efficiency, recycling programs. But it's one of the simplest opportunities that often gets overlooked: floors.<br>‍<br>Traditional cleaning methods demand more water, energy, and resources than necessary - quietly adding environmental load over time.<br>‍<br>But when cleaning methods haven’t evolved, it slows progress, making it harder to report real, measurable ESG gains.<br>‍<br>Without sustainable practices in place, ESG progress stalls - but partnering with a provider who buys into your goals keeps your strategy moving forward.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weworkwith-section-solution">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2>Better floors, better impact, better outcomes.</h2>
                  <p>For over a decade, we have moved towards proactive, sustainable floor cleaning methods that are good for your floors, and better for the planet.<br><br>Our low moisture encapsulation method cuts water use by 76%, slashes energy use by 81%, and produces virtually no wastewater.<br><br>You get cleaner, longer-lasting floors, healthier indoor environments, and real progress towards your ESG goals - all without disrupting your operations within your organisation.<br><br>Sustainability shouldn't come at the cost of performance. With us, you get both.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
                <div id="w-node-_994dd22b-9209-4e90-5ec7-9da0ddc370d0-3caeac4b" class="grid-column pitfalls-column grid-column-inverse">
                  <div id="w-node-_77121fee-6c65-34d0-53d6-c2230f0c7a7b-3caeac4b" class="weworkwith-loveaboutpremrest-container">
                    <div data-w-id="1f8ee7b7-524b-409a-cb82-c089a67e9b3f" class="weworkwith-loveaboutpremrest-container-heading">
                      <h3 class="weworkwith-loveaboutpremrest-heading">What Sustainability Managers love about premrest</h3>
                    </div>
                    <div id="w-node-_04d65961-db52-8436-9b95-1c6f301e51e4-3caeac4b" class="weworkwith-loveaboutpremrest-container-list">
                      <div class="weworkwith-loveaboutpremrest-list">
                        <div class="list-block-weworkwith">
                          <div id="w-node-_465d8a1e-b06e-58b1-b1ef-a4f76a885917-3caeac4b" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Major water savings:</strong>Uses up to 76% less water than traditional cleaning methods.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-f8a06efa-0efa-3b54-e502-3b400b4d7916-3caeac4b" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Lower energy consumption:</strong>Cuts energy use by up to 81% compared to hot water extraction.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_324ed16e-d319-422c-0b5a-85a47c2e34e8-3caeac4b" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Zero wastewater generation: </strong>Produces virtually no wastewater.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_7eaccf3a-b19e-844e-8d38-707457460495-3caeac4b" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Supports measurable ESG outcomes: </strong>Real, trackable savings that strengthen sustainability reporting.</p>
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
      <div class="padding-global padding-section-large backgroung-color-green">
        <div class="container-large">
          <div class="grid-wrapper">
            <div class="grid-2-columns">
              <div class="grid-column"><img src="/images/Premrest_Sustainability_Calculator_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Sustainability_Calculator_Blob-p-500.webp 500w, images/Premrest_Sustainability_Calculator_Blob-p-800.webp 800w, images/Premrest_Sustainability_Calculator_Blob-p-1080.webp 1080w, images/Premrest_Sustainability_Calculator_Blob-p-1600.webp 1600w, images/Premrest_Sustainability_Calculator_Blob.webp 2000w" alt="" class="section-image"></div>
              <div class="grid-column">
                <h2 class="text-light">Sustainability impact report</h2>
                <p class="text-light">Low moisture encapsulation provides facility managers with spotless floors, but without the environmental cost. Calculate your impact and generate a report of how significantly less water, energy, chemicals and waste you'd be saving.</p>
                <a href="/impact-calculator" class="button is-secondary is-inverse w-button">Calculate your impact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weworkwith-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf8-3caeac4b" class="grid-column grid-column-1">
                <h2 id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf9-3caeac4b" class="text-light weworkwith-final-headline sustainability-page">Let’s reduce your footprint, one floor at a time.</h2>
                <a id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bfb-3caeac4b" href="/contact" class="button is-secondary is-inverse w-button">Let's chat</a>
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
