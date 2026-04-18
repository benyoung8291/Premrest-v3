import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Dental Practices",
  openGraph: {
    title: "Dental Practices"
  },
  twitter: {
    title: "Dental Practices"
  }
};

const bodyHtml = `
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
    <div class="dental-practices-section-hero background-color-primary hero-padding-top">
      <div class="padding-global padding-section-medium">
        <div class="container-xlarge">
          <div class="grid-wrapper">
            <div id="w-node-c3829fa0-c140-241a-7447-3e2836a0ab08-bc40e11e" class="grid-2-columns">
              <div class="grid-column">
                <div class="hero-heading-block">
                  <h1 data-w-id="c3829fa0-c140-241a-7447-3e2836a0ab0b" style="opacity:0" class="hero-headline installs-hero-headline">Sparkling floors for a thriving dental practice</h1><img src="/images/Premrest_Rays_Cream.svg" loading="lazy" style="opacity:0" data-w-id="c3829fa0-c140-241a-7447-3e2836a0ab0d" alt="" class="installs-hero-rays">
                </div>
                <p data-w-id="c3829fa0-c140-241a-7447-3e2836a0ab0e" style="opacity:0" class="text-size-large dental-practices-hero-subheadline">Proactive periodic floor cleaning to create a healthy environment and <strong>build a practice patients keep coming back to.</strong></p>
                <a data-w-id="c3829fa0-c140-241a-7447-3e2836a0ab12" style="opacity:0" href="#wf-form-Dental-Practices-Form" class="button is-tertiary dental-practices-hero-button w-button">Let's chat</a>
              </div>
              <div id="w-node-c3829fa0-c140-241a-7447-3e2836a0ab14-bc40e11e" class="grid-column grid-column-inverse">
                <div id="w-node-c3829fa0-c140-241a-7447-3e2836a0ab15-bc40e11e" class="column-image-block"><img src="/images/Premrest_DentalPractices_Hero_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_DentalPractices_Hero_Blob-p-500.webp 500w, images/Premrest_DentalPractices_Hero_Blob-p-800.webp 800w, images/Premrest_DentalPractices_Hero_Blob-p-1080.webp 1080w, images/Premrest_DentalPractices_Hero_Blob-p-1600.webp 1600w, images/Premrest_DentalPractices_Hero_Blob.webp 2000w" alt="" class="hero-image hero-image-installs"><img src="/images/Premrest_Scribble_Blue.svg" loading="lazy" alt="" class="installs-hero-image-scribble"><img src="/images/Premrest_Patch_Green.svg" loading="lazy" alt="" class="installs-hero-image-patch"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dental-practices-section-problem">
      <div class="padding-global padding-section-large">
        <div class="container-large">
          <div class="grid-wrapper">
            <div class="grid-2-columns">
              <div class="grid-column">
                <div id="w-node-c3829fa0-c140-241a-7447-3e2836a0ab57-bc40e11e" class="column-image-block"><img src="/images/Premrest_DentalPractices_Problem_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_DentalPractices_Problem_Blob-p-500.webp 500w, images/Premrest_DentalPractices_Problem_Blob-p-800.webp 800w, images/Premrest_DentalPractices_Problem_Blob-p-1080.webp 1080w, images/Premrest_DentalPractices_Problem_Blob-p-1600.webp 1600w, images/Premrest_DentalPractices_Problem_Blob.webp 2000w" alt="" class="section-image"></div>
              </div>
              <div class="grid-column"><img src="/images/Premrest_DirtyShoe_Charcoal.svg" loading="lazy" alt="" height="200" class="home-problem-dirtyshoe">
                <h2>Don't let dirty, worn floors undermine patient trust.</h2>
                <p>As a dentist, you tell patients to brush twice a day, pop in every six months for a deep clean, and tackle issues early to avoid bigger problems.<br><br>Yet too often, that same proactive mindset, attention to detail, and care isn’t reflected in your clinic’s floors. <br><br>Keeping floors clean, healthy, and presentable goes beyond a mop and bucket. Over time, dirt, grime, and residue build up on your floors, leaving them tired, worn out, and far less inviting. <br><br>More concerning, though, is how neglected floors affect indoor air quality, infection control, and the health of your patients - ultimately leading to pricey strip-and-seal treatments that disrupt your practice and hit your cashflow hard.<br><br>We provide deep cleaning of your dental rooms, waiting room, and offices across all floor types and furniture to keep your clinic shining and preserve your premium patient experience.</p>
                <a href="#wf-form-Dental-Practices-Form" class="button w-button">Let's chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dental_practices_section_solution">
      <div class="padding-global padding-section-large padding-section-large-bottom">
        <div class="container-large">
          <div class="grid-wrapper">
            <div class="grid-column">
              <h2 id="w-node-c9d8b68f-42e0-ccde-d999-a36aef9912ce-bc40e11e" class="dental-practices-solution-headline">Let's create floors that match your standard of care.</h2>
              <p id="w-node-c9d8b68f-42e0-ccde-d999-a36aef9912d0-bc40e11e" class="dental-practices-solution-text">Our deep cleans are completed after hours, minimising disruption so you can open your doors the next morning to fresh, revitalised floors. Cleaning, without the chaos.</p>
            </div>
            <div id="w-node-c9d8b68f-42e0-ccde-d999-a36aef9912d5-bc40e11e" class="grid-4-columns dental-practices-benefits">
              <div class="grid-column"><img src="/images/vacuum.png" loading="lazy" id="w-node-_9548147b-5d3e-1775-f587-ff503dde0ce6-bc40e11e" alt="" class="dental-practices-icon">
                <h4 id="w-node-b9c7c093-f90b-3b54-8f6b-c33ab7ae6b99-bc40e11e" class="heading-style-h4 dental-practices-benefits">Avoid costly<br>strip-and-seals</h4>
                <p class="dental-practices-text">Frequent deep cleaning means healthy, showroom-grade flooring that aligns with your premium offering, for a fraction of the cost.</p>
              </div>
              <div class="grid-column"><img src="/images/teeth.png" loading="lazy" id="w-node-_1f250597-ee1d-96be-548e-be51e99b4330-bc40e11e" alt="" class="dental-practices-icon">
                <h4 id="w-node-_1f250597-ee1d-96be-548e-be51e99b4331-bc40e11e" class="heading-style-h4 dental-practices-benefits">Elevate your patient experience</h4>
                <p class="dental-practices-text">Just like sparkly clean teeth and a good smile, first impressions start from the ground up.</p>
              </div>
              <div class="grid-column"><img src="/images/time.png" loading="lazy" id="w-node-_7b79874c-97f9-4390-9fe4-fc4e1a315619-bc40e11e" alt="" class="dental-practices-icon">
                <h4 id="w-node-_7b79874c-97f9-4390-9fe4-fc4e1a31561a-bc40e11e" class="heading-style-h4 dental-practices-benefits">Reduce disruption in your practice</h4>
                <p class="dental-practices-text">After hours cleaning means no downtime, and no rescheduling patients or loss of revenue.</p>
              </div>
              <div class="grid-column"><img src="/images/control.png" loading="lazy" id="w-node-_29ca113f-7aae-d9b0-1ea3-3ddcfa92a70e-bc40e11e" alt="" class="dental-practices-icon">
                <h4 id="w-node-_29ca113f-7aae-d9b0-1ea3-3ddcfa92a70f-bc40e11e" class="heading-style-h4 dental-practices-benefits">Improve hygiene and indoor air quality</h4>
                <p class="dental-practices-text">Our fuss-free cleaning removes up to 98.9% of bacteria and allergens that standard cleaning leaves behind.</p>
              </div>
            </div>
          </div>
          <div class="grid-column padding-medium-top">
            <a id="w-node-c9d8b68f-42e0-ccde-d999-a36aef991301-bc40e11e" href="#wf-form-Dental-Practices-Form" class="button w-button">Let's chat</a>
          </div>
        </div>
      </div>
    </div>
    <div class="dental-practices-section-podcast">
      <div class="padding-global padding-section-large">
        <div class="container-large">
          <div class="grid-wrapper resources-grid-wrapper">
            <div class="grid-2-columns-webinar">
              <div class="grid-column grid-webinar">
                <h2>Take it from the people in the dental industry</h2>
                <p>Hosted by Julie Parker from Dental Business Mastery, Aaron Kelly speaks on <em>'The truth about floor maintenance in dental practices'</em> on the Julie Parker Practice Podcast.</p>
                <a href="/resources/the-truth-about-floor-maintenance-in-dental-practices" class="button w-button">View podcast</a>
              </div>
              <div class="grid-column ltf-spacer">
                <div class="resources-wrapper w-dyn-list">
                  <div role="list" class="w-dyn-items">
                    <div role="listitem" class="w-dyn-item">
                      <div class="webinar-section-video">
                        <a href="#" class="w-inline-block">
                          <div class="letstalkfacilities-section-image"><img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" class="ltf-resources-scribbles"><img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" class="ltf-resources-patch"><img loading="lazy" src="/images/play-button.png" alt="" class="video-play-button">
                            <div class="letstalkfacilities-section-overlay"></div><img loading="lazy" height="Auto" alt="" src="/images/DSC03156.webp" class="letstalkfacilities-section-videoimage w-dyn-bind-empty">
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-3-columns">
              <div class="grid-column">
                <p><em>“We pride ourselves on a high-end patient experience, and our floors weren’t reflecting that. This service brought everything up to standard without disrupting a single appointment.”</em></p>
                <h5 class="heading-style-h5 dental-practices-benefits">- Dr. Michael Grant, Principal Dentist</h5>
              </div>
              <div class="grid-column">
                <p><em>“We didn’t realise how much our floors were letting the space down. Now patients walk in and comment on how fresh everything feels.”</em></p>
                <h5 class="heading-style-h5 dental-practices-benefits">- Melissa James, Practice Manager</h5>
              </div>
              <div class="grid-column">
                <p><em>“Our floors were being cleaned regularly, but they still looked dull and tired. After the first deep clean, the difference was night and day. The whole clinic felt brighter!”</em></p>
                <h5 class="heading-style-h5 dental-practices-benefits">- Sarah Nguyen, Practice Manager</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dental-practices-section-final">
      <div class="padding-global padding-section-large">
        <div class="container-large">
          <div class="grid-wrapper">
            <div class="grid-2-columns">
              <div id="w-node-c3829fa0-c140-241a-7447-3e2836a0ac50-bc40e11e" class="grid-column grid-column-1">
                <h2 id="w-node-c3829fa0-c140-241a-7447-3e2836a0ac51-bc40e11e" class="text-light dental-practices-final-headline">Don't let dull floors dim your practice's shine.</h2>
              </div>
              <div id="w-node-c3829fa0-c140-241a-7447-3e2836a0ac53-bc40e11e" class="grid-column-form">
                <div class="form-container">
                  <div class="w-form">
                    <form id="wf-form-Dental-Practices-Form" name="wf-form-Dental-Practices-Form" data-name="Dental Practices Form" method="get" data-wf-page-id="6875b25a3c038d0dbc40e11e" data-wf-element-id="c3829fa0-c140-241a-7447-3e2836a0ac56">
                      <div class="form-block-2-columns">
                        <div class="form-block-grid-column"><label for="First-Name-Contact-2" class="form-label">First name</label><input class="form-field w-input" maxlength="256" name="First-name" data-name="First name" placeholder="" type="text" id="First-Name-Contact" required=""></div>
                        <div class="form-block-grid-column"><label for="Last-Name-Contact-2" class="form-label">Last name</label><input class="form-field w-input" maxlength="256" name="Last-name" data-name="Last name" placeholder="" type="text" id="Last-Name-Contact" required=""></div>
                      </div>
                      <div class="form-block-2-columns">
                        <div class="form-block-grid-column"><label for="Email-Address-Contact-2" class="form-label">Email address</label><input class="form-field w-input" maxlength="256" name="Email-address" data-name="Email address" placeholder="" type="email" id="Email-Address-Contact" required=""></div>
                        <div class="form-block-grid-column"><label for="Phone-Number-Contact-2" class="form-label">Phone number</label><input class="form-field w-input" maxlength="256" name="Phone-number" data-name="Phone number" placeholder="" type="tel" id="Phone-Number-Contact"></div>
                      </div><label for="Company-Name-Contact-2" class="form-label">Dental practice</label><input class="form-field w-input" maxlength="256" name="Company-name" data-name="Company name" placeholder="" type="text" id="Company-Name-Contact" required=""><label for="Where-can-we-help-Contact-2" class="form-label">Where can we help?</label><textarea id="Where-can-we-help-Contact" name="Where-can-we-help" maxlength="5000" data-name="Where can we help?" placeholder="" required="" class="form-field w-input"></textarea>
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
