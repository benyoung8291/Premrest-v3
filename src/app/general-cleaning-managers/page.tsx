import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Premrest | General Cleaning Managers | Commercial Floor Cleaning & Installs",
  description: "Specialist floor care that supports your cleaning team.",
  openGraph: {
    title: "Premrest | General Cleaning Managers | Commercial Floor Cleaning & Installs",
    description: "Specialist floor care that supports your cleaning team."
  },
  twitter: {
    title: "Premrest | General Cleaning Managers | Commercial Floor Cleaning & Installs",
    description: "Specialist floor care that supports your cleaning team."
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
        <div class="padding-global">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/data-cleaning.png" loading="lazy" style="opacity:0" data-w-id="236a6eff-665e-dece-8a9b-a0f6a51cfd14" alt="" class="weworkwith-icon">
                  <div data-w-id="56e44f72-b22c-e551-df10-3672636954c6" style="opacity:0" class="weworkwith-little-heading general-cleaning-managers">
                    <h3 class="weworkwith-title-heading">General Cleaning Managers:</h3>
                  </div>
                  <div class="hero-heading-block">
                    <h1 data-w-id="8a5b2e3c-c577-5343-879f-9d3f5576a813" style="opacity:0" class="hero-headline weworkwith-hero-headline">Specialist floor care that supports your cleaning team.</h1>
                  </div>
                  <a data-w-id="32881dfd-b184-4904-6d82-ca84f3165491" style="opacity:0" href="/contact" class="button is-primary weworkwith-hero-button w-button">Let's chat</a>
                </div>
                <div id="w-node-_5ab817d8-e59e-8435-7456-975a1331faea-4480e16f" class="grid-column grid-column-inverse">
                  <div id="w-node-_5601d830-bb0c-32df-ce66-920f9dc42bca-4480e16f" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Hero_Blob_GCM.webp" loading="lazy" sizes="(max-width: 479px) 100vw, 240px" srcset="/images/Premrest_WeWorkWith_Hero_Blob_GCM-p-500.webp 500w, images/Premrest_WeWorkWith_Hero_Blob_GCM-p-800.webp 800w, images/Premrest_WeWorkWith_Hero_Blob_GCM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Hero_Blob_GCM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Hero_Blob_GCM.webp 2000w" alt="" class="hero-image hero-image-weworkwith"><img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" class="weworkwith-hero-image-scribble"><img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" class="weworkwith-hero-image-patch"></div>
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
                  <div id="w-node-d46871d1-599c-2295-8068-a9a5f68c2562-4480e16f" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Problem_Blob_GCM.webp" loading="lazy" sizes="(max-width: 479px) 100vw, 444px" srcset="/images/Premrest_WeWorkWith_Problem_Blob_GCM-p-500.webp 500w, images/Premrest_WeWorkWith_Problem_Blob_GCM-p-800.webp 800w, images/Premrest_WeWorkWith_Problem_Blob_GCM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Problem_Blob_GCM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Problem_Blob_GCM.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column">
                  <h2>Even the best cleaning teams need specialist know-how when it comes to floors.</h2>
                  <p>Day-to-day cleaning is demanding enough, and floors are one of the hardest areas to keep consistently sharp.<br><br>High foot traffic, spills, and everyday wear can quickly make even freshly cleaned surfaces look tired, dull, or dirty. <br><br>Carpets come in all kinds of colours, fibres, loops and piles, and treating them the same is where problems start. Recurring stains, wick-back, curling edges - these are just a few of the floor-specific issues we’re built to handle. <br><br>We work alongside your cleaning team, taking full ownership of the floors with a proactive maintenance program that prevents issues before they start, so your team can focus on making the rest of the facility sparkle.</p>
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
                  <h2>Floors you’ll never have to chase.</h2>
                  <p>We take full ownership of floor care, using specialist methods that reduce complaints, boost longevity, and elevate the results of your cleaning program.<br>‍<br>No double-handling. No patchy outcomes. Just sharp, consistent floors - every time.<br>‍<br>And with expert eyes on the job, nothing slips through the cracks.<br>It’s one less fire to manage, and one more way we’ve got your back.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
                <div id="w-node-_994dd22b-9209-4e90-5ec7-9da0ddc370d0-4480e16f" class="grid-column pitfalls-column grid-column-inverse">
                  <div id="w-node-_77121fee-6c65-34d0-53d6-c2230f0c7a7b-4480e16f" class="weworkwith-loveaboutpremrest-container">
                    <div data-w-id="1f8ee7b7-524b-409a-cb82-c089a67e9b3f" class="weworkwith-loveaboutpremrest-container-heading">
                      <h3 class="weworkwith-loveaboutpremrest-heading">What General Cleaning Managers love about premrest</h3>
                    </div>
                    <div id="w-node-_04d65961-db52-8436-9b95-1c6f301e51e4-4480e16f" class="weworkwith-loveaboutpremrest-container-list">
                      <div class="weworkwith-loveaboutpremrest-list">
                        <div class="list-block-weworkwith">
                          <div id="w-node-_465d8a1e-b06e-58b1-b1ef-a4f76a885917-4480e16f" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Less disruption:</strong>Fast-drying method means no downtime or wet carpets to work around.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-f8a06efa-0efa-3b54-e502-3b400b4d7916-4480e16f" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Fewer complaints:</strong>Floors stay cleaner for longer, reducing re-cleans and call-backs.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_324ed16e-d319-422c-0b5a-85a47c2e34e8-4480e16f" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Improved presentation: </strong>We handle the floors, so your staff can focus on everything else.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_7eaccf3a-b19e-844e-8d38-707457460495-4480e16f" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Less pressure on your team: </strong>We handle the floors, so your staff can focus on everything else.</p>
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
      <div class="weworkwith-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf8-4480e16f" class="grid-column grid-column-1">
                <h2 id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf9-4480e16f" class="text-light weworkwith-final-headline sustainability-page">Let’s make spotless floors one less thing to chase.</h2>
                <a id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bfb-4480e16f" href="/contact" class="button is-secondary is-inverse w-button">Let's chat</a>
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
