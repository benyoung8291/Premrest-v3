import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "ComCork",
  description: "Fuss-free floors that run in the background — not your to-do list.",
  openGraph: {
    title: "ComCork",
    description: "Fuss-free floors that run in the background — not your to-do list."
  },
  twitter: {
    title: "ComCork",
    description: "Fuss-free floors that run in the background — not your to-do list."
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
                <div class="grid-column"><img src="/images/building.png" loading="lazy" data-w-id="236a6eff-665e-dece-8a9b-a0f6a51cfd14" alt="" class="weworkwith-icon">
                  <div data-w-id="56e44f72-b22c-e551-df10-3672636954c6" class="weworkwith-little-heading">
                    <h3 class="weworkwith-title-heading">natural cork flooring</h3>
                  </div>
                  <div class="hero-heading-block">
                    <h1 data-w-id="8a5b2e3c-c577-5343-879f-9d3f5576a813" class="hero-headline weworkwith-hero-headline">The wow as <em>you walk in.</em> That's ComCork.</h1>
                  </div>
                  <p>Stunning natural cork flooring that turns heads and stops feet. 29 colours, five profiles, and the kind of beauty that doesn't need to cost the earth. We supply it, we install it, anywhere in Australia.<br>‍<br></p>
                  <a data-w-id="32881dfd-b184-4904-6d82-ca84f3165491" href="/contact" class="button is-primary weworkwith-hero-button w-button">Let's chat - 1300 207 915</a>
                </div>
                <div id="w-node-_5ab817d8-e59e-8435-7456-975a1331faea-bd3c585d" class="grid-column grid-column-inverse">
                  <div id="w-node-_5601d830-bb0c-32df-ce66-920f9dc42bca-bd3c585d" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Hero_Blob_FM.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_Hero_Blob_FM-p-500.webp 500w, images/Premrest_WeWorkWith_Hero_Blob_FM-p-800.webp 800w, images/Premrest_WeWorkWith_Hero_Blob_FM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Hero_Blob_FM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Hero_Blob_FM.webp 2000w" alt="" class="hero-image hero-image-weworkwith"><img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" class="weworkwith-hero-image-scribble"><img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" class="weworkwith-hero-image-patch"></div>
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
                  <div id="w-node-d46871d1-599c-2295-8068-a9a5f68c2562-bd3c585d" class="column-image-block"><img src="/images/Premrest_WeWorkWith_Problem_Blob_FM.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_Problem_Blob_FM-p-500.webp 500w, images/Premrest_WeWorkWith_Problem_Blob_FM-p-800.webp 800w, images/Premrest_WeWorkWith_Problem_Blob_FM-p-1080.webp 1080w, images/Premrest_WeWorkWith_Problem_Blob_FM-p-1600.webp 1600w, images/Premrest_WeWorkWith_Problem_Blob_FM.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column">
                  <h2>Nature's most magnificent flooring material.</h2>
                  <p>ComCork is Australian-made from <strong>70% natural cork</strong> and advanced polymers. Every square centimetre packs around 40 million microscopic air pockets, nature's own shock absorbers, creating a floor that feels as incredible as it looks.<br><br>Warm, organic, and endlessly versatile. 29 colours across five distinct surface profiles means there's a ComCork for every canvas and we've been laying it across Australia for clients who refuse to settle for ordinary.<br>‍</p>
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
                  <h2>Beautiful, sustainable, and tougher than it looks</h2>
                  <p>We don’t wait for flooring issues to clog your inbox or blow up your phone, we prevent them before they start.<br><br>Our bespoke maintenance programs work ahead of the 8-ball and keep your floors clean, extend their lifespan, eliminate downtime, and break the cycle of constant reactive fixes.<br><br>Through low moisture encapsulation, we also help move your sustainability targets in the right direction - reducing water, energy, and waste, without compromising your standards. No sticky residues, no powdery mess left behind, helping improve indoor air quality across your facility.<br><br>Instead of chasing problems, you’ll have peace of mind knowing your floors are one less thing you’ll ever have to second-guess.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
                </div>
                <div id="w-node-_994dd22b-9209-4e90-5ec7-9da0ddc370d0-bd3c585d" class="grid-column pitfalls-column grid-column-inverse">
                  <div id="w-node-_77121fee-6c65-34d0-53d6-c2230f0c7a7b-bd3c585d" class="weworkwith-loveaboutpremrest-container">
                    <div data-w-id="1f8ee7b7-524b-409a-cb82-c089a67e9b3f" class="weworkwith-loveaboutpremrest-container-heading">
                      <h3 class="weworkwith-loveaboutpremrest-heading">What Facility Managers love about premrest</h3>
                    </div>
                    <div id="w-node-_04d65961-db52-8436-9b95-1c6f301e51e4-bd3c585d" class="weworkwith-loveaboutpremrest-container-list">
                      <div class="weworkwith-loveaboutpremrest-list">
                        <div class="list-block-weworkwith">
                          <div id="w-node-_465d8a1e-b06e-58b1-b1ef-a4f76a885917-bd3c585d" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Beautiful &amp; Natural</strong>Cork has a warmth and texture you just can't fake. 29 colours — from earthy neutrals to bold statements — give designers the palette to create something truly considered.<br></p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-f8a06efa-0efa-3b54-e502-3b400b4d7916-bd3c585d" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Sustainable &amp; Renewable</strong>Cork bark is harvested from living trees on a 9-year cycle — no trees harmed, ever. GreenTag certified from manufacturing to end-of-life. Beautiful flooring that doesn't cost the earth.<br></p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_324ed16e-d319-422c-0b5a-85a47c2e34e8-bd3c585d" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Slip Resistant</strong>Excellent grip, even when wet. ComCork's natural frictional properties make it a go-to for aged care, healthcare, pools, and anywhere people need to stay firmly on their feet.<br></p>
                          </div>
                        </div>
                        <div class="list-block-weworkwith">
                          <div id="w-node-_7eaccf3a-b19e-844e-8d38-707457460495-bd3c585d" class="list-image-weworkwith"><img src="/images/check.png" loading="lazy" alt="" class="weworkwith-tick"></div>
                          <div class="list-content-bold">
                            <p class="list-content-bold list-content-left"><strong>Acoustic Performance</strong>Those 40 million air pockets per cm²? They're tiny sound absorbers. Noise transmission drops dramatically — a game-changer for offices, schools, and multi-level buildings.<br></p>
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
      <div class="weworkwith-section-steps">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/Premrest_WeWorkWith_FullLifecycle.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_WeWorkWith_FullLifecycle-p-500.webp 500w, images/Premrest_WeWorkWith_FullLifecycle-p-800.webp 800w, images/Premrest_WeWorkWith_FullLifecycle-p-1080.webp 1080w, images/Premrest_WeWorkWith_FullLifecycle-p-1600.webp 1600w, images/Premrest_WeWorkWith_FullLifecycle.webp 2000w" alt="" class="section-image"></div>
                <div class="grid-column">
                  <h2>We manage the full life cycle of your flooring.</h2>
                  <p>Replacing flooring shouldn’t derail your operations. Whether it’s a quiet refresh or a major refurb, we install in 'live' environments with minimal disruption, including after-hours and weekends when needed.<br><br>From lift lobbies and breakout spaces to high-traffic corridors and full-floor fitouts, every detail is managed end-to-end: coordinating our trades, managing timelines, and keeping noise, dust and downtime to a minimum.<br><br>You’ll get quality installs that look sharp, perform under pressure, and are built to last - with sustainability considered at every step, from product selection through to waste diversion and aftercare planning.<br><br>And because we also handle the ongoing maintenance, you get one team across the full lifecycle; working smarter from day one to protect your asset.We don’t just install floors, we help you future-proof them.</p>
                  <a href="/contact" class="button w-button">Let's chat</a>
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
              <div id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf8-bd3c585d" class="grid-column grid-column-1">
                <h2 id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bf9-bd3c585d" class="text-light weworkwith-final-headline">Keep flooring issues where they belong — out of sight and under control.</h2>
                <a id="w-node-f4f058fe-75bc-cd75-af22-9296fcf86bfb-bd3c585d" href="/contact" class="button is-secondary is-inverse w-button">Let's chat</a>
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
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </WebflowPage>
  );
}
