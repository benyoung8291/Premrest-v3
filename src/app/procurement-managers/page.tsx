import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Premrest | Procurement Managers | Commercial Floor Cleaning & Installs",
  description: "Scale consistent floor care and streamline your contracts nationally.",
  openGraph: {
    title: "Premrest | Procurement Managers | Commercial Floor Cleaning & Installs",
    description: "Scale consistent floor care and streamline your contracts nationally."
  },
  twitter: {
    title: "Premrest | Procurement Managers | Commercial Floor Cleaning & Installs",
    description: "Scale consistent floor care and streamline your contracts nationally."
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
                <div class="grid-column"><img src="/images/flowchart.png" loading="lazy" style="opacity:0" data-w-id="236a6eff-665e-dece-8a9b-a0f6a51cfd14" alt="" class="weworkwith-icon">
                  <div data-w-id="56e44f72-b22c-e551-df10-3672636954c6" style="opacity:0" class="weworkwith-little-heading procurement-managers">
                    <h3 class="weworkwith-title-heading">Procurement Managers:</h3>
                  </div>
                  <div class="hero-heading-block">
                    <h1 data-w-id="8a5b2e3c-c577-5343-879f-9d3f5576a813" style="opacity:0" class="hero-headline weworkwith-hero-headline">Scale consistent floor care and streamline your contracts nationally.</h1>
                  </div>
                  <a data-w-id="32881dfd-b184-4904-6d82-ca84f3165491" style="opacity:0" href="/contact" class="button is-primary weworkwith-hero-button w-button">Let's chat</a>
                </div>
                <div id="w-node-_5ab817d8-e59e-8435-7456-975a1331faea-6a35d287" class="grid-column grid-column-inverse">
                  <div id="w-node-_5601d830-bb0c-32df-ce66-920f9dc42bca-6a35d287" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Hero_Blob_PM.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_Hero_Blob_PM-p-500.webp 500w, images/Premrest_WeWorkWith_Hero_Blob_PM-p-800.webp 800w, images/Premrest_WeWorkWith_Hero_Blob_PM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Hero_Blob_PM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Hero_Blob_PM.webp 2000w" alt="" class="hero-image hero-image-weworkwith"><img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" class="weworkwith-hero-image-scribble"><img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" class="weworkwith-hero-image-patch"></div>
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
                  <div id="w-node-d46871d1-599c-2295-8068-a9a5f68c2562-6a35d287" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Problem_Blob_PM.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_Problem_Blob_PM-p-500.webp 500w, images/Premrest_WeWorkWith_Problem_Blob_PM-p-800.webp 800w, images/Premrest_WeWorkWith_Problem_Blob_PM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Problem_Blob_PM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Problem_Blob_PM.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column">
                  <h2>Managing different floor cleaning agreements on a national scale is operational chaos.</h2>
                  <p>When you’re overseeing multiple vendors across multiple sites, fragmentation is inevitable - inconsistent service, unexpected cost blowouts, fragmented contracts, and endless back-and-forth.<br><br>Without a structured model in place, quality slips, costs creep up, and your team spends more time chasing suppliers than looking after their facilities.<br><br>And when every site is working off different agreements, consistency across quality, compliance, and ESG goals starts to break down.<br><br>That’s where we come in, offering a national, structured floor maintenance blueprint that locks in consistency, streamlines procurement, and supports your sustainability goals at scale.</p>
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
                  <h2>Structured, scalable floor care - without the supplier sprawl.</h2>
                  <p>Our national maintenance model locks in consistent quality, fixed pricing, and clear reporting, giving you full control without the operational mess.<br><br>We help you deliver on cost control, compliance, and ESG targets, all while simplifying supplier management across your portfolio.<br><br>And with low moisture encapsulation, you’re not just improving standards - you’re cutting water, energy and waste use, and improving indoor air quality, with results you can track.<br><br>No more patchwork vendors. No more performance gaps. Just a streamlined, consistent program that supports your organisational goals, from compliance to cost control.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
                <div id="w-node-_994dd22b-9209-4e90-5ec7-9da0ddc370d0-6a35d287" class="grid-column pitfalls-column grid-column-inverse">
                  <div id="w-node-_77121fee-6c65-34d0-53d6-c2230f0c7a7b-6a35d287" class="weworkwith-loveaboutpremrest-container">
                    <div data-w-id="1f8ee7b7-524b-409a-cb82-c089a67e9b3f" class="weworkwith-loveaboutpremrest-container-heading">
                      <h3 class="weworkwith-loveaboutpremrest-heading">What Procurement Managers love about premrest</h3>
                    </div>
                    <div id="w-node-_04d65961-db52-8436-9b95-1c6f301e51e4-6a35d287" class="weworkwith-loveaboutpremrest-container-list">
                      <div class="weworkwith-loveaboutpremrest-list">
                        <div class="list-block-weworkwith">
                          <div id="w-node-_465d8a1e-b06e-58b1-b1ef-a4f76a885917-6a35d287" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Streamlined contracts: </strong>One single point of contact, easy supplier management and no guess work</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-f8a06efa-0efa-3b54-e502-3b400b4d7916-6a35d287" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Structured consistency:</strong>National service provider embedded into your procurement processes</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_324ed16e-d319-422c-0b5a-85a47c2e34e8-6a35d287" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Cost predictability: </strong>Fixed pricing models across your portfolio, &nbsp;no unexpected blowouts.</p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_7eaccf3a-b19e-844e-8d38-707457460495-6a35d287" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Sustainability reporting: </strong>Real reports showing water, energy, and waste savings, supporting ESG targets with measurable progress</p>
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
              <div id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf8-6a35d287" class="grid-column grid-column-1">
                <h2 id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf9-6a35d287" class="text-light weworkwith-final-headline">Take the complexity out of managing floors across your entire organisation.</h2>
                <a id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bfb-6a35d287" href="/contact" class="button is-secondary is-inverse w-button">Let's chat</a>
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
