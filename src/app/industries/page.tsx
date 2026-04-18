import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Industries",
  description: "Talk to the experts who are floors ahead.",
  openGraph: {
    title: "Industries",
    description: "Talk to the experts who are floors ahead.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6786fe0540dc4affc23c9116_JLL_Melbourne_HighRes-6-1140x760.jpg"]
  },
  twitter: {
    title: "Industries",
    description: "Talk to the experts who are floors ahead.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6786fe0540dc4affc23c9116_JLL_Melbourne_HighRes-6-1140x760.jpg"]
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
                <div id="w-node-_6ab3358b-0890-5ea2-aaf1-c9212c22bf4e-97f9acbd" class="grid-column">
                  <h1 id="w-node-_6ab3358b-0890-5ea2-aaf1-c9212c22bf4f-97f9acbd" class="heading-style-h2 header-heading">Industries</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="commercial-offices" class="industries-section-commercialoffices">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-_6bdd1030-85a6-64d5-6f31-f646dfc66d86-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_CommercialOffices.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_CommercialOffices-p-500.webp 500w, images/Premrest_Industries_CommercialOffices-p-800.webp 800w, images/Premrest_Industries_CommercialOffices-p-1080.webp 1080w, images/Premrest_Industries_CommercialOffices-p-1600.webp 1600w, images/Premrest_Industries_CommercialOffices.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/commercial-offices.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Commercial offices</h2>
                  <p>In commercial offices, first impressions start underfoot. From daily foot traffic to last-minute coffee spills, your floors cop a lot - and if they’re not looked after properly, it shows.<br><br>We use low moisture encapsulation to remove up to 96% of dirt, dust and debris across all different floor types. It’s a smarter, more sustainable clean that improves indoor air quality, eliminates rapid resoiling, and keeps your floors looking better for longer, with less water, less energy, and zero disruption.<br><br>We don’t just show up with a machine. We assess your floor compositions, traffic flow and workspace habits to build a tailored maintenance plan that hits the sweet spot: clean enough to impress, without unnecessary visits or wasted spend.<br><br>And, when it comes to installs, we focus on what matters - fit-for-purpose floors that stack up to the rigours of a busy commercial environment.</p>
                  <div class="w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <a href="#" class="resources-industries-link w-inline-block">
                          <p class="text-size-large resources-industries-headline w-dyn-bind-empty"></p>
                          <p class="text-size-large resources-industries-text w-dyn-bind-empty"></p>
                        </a>
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
      <div id="professional-services" class="industries-section-professionalservices">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/professional-services.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Professional services</h2>
                  <p class="text-size-large professional-services">Legal, Accounting, etc.</p>
                  <p>For high-end firms, polished presentation is everything, and that includes your floors. Whether it’s clients stepping in for a high-stakes meeting or senior partners walking the halls, immaculate flooring reinforces the standard you set: professional, detail-driven, and in control.<br><br>Our low moisture encapsulation method is designed for these environments - quieter than a vacuum, fast-drying, and free from the bulky equipment and long hoses you’d normally expect. That means no disruption, no awkward workarounds, and no downtime. Staff can keep moving, clients can come and go, and business carries on as usual.<br><br>We get that your offices don’t switch off at 5pm. With teams working late and client meetings running back-to-back, we plan around your schedule, cleaning after hours or during low traffic windows to put the prestige in your space, without stepping on toes.</p>
                  <div class="w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <a href="#" class="resources-industries-link w-inline-block">
                          <p class="text-size-large resources-industries-headline w-dyn-bind-empty"></p>
                          <p class="text-size-large resources-industries-text w-dyn-bind-empty"></p>
                        </a>
                      </div>
                    </div>
                    <div class="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_338748d9-ce14-ef07-08a9-5e3ef2cf3448-97f9acbd" class="grid-column grid-column-2-inverse">
                  <div id="w-node-_338748d9-ce14-ef07-08a9-5e3ef2cf3449-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_ProfessionalServices.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_ProfessionalServices-p-500.webp 500w, images/Premrest_Industries_ProfessionalServices-p-800.webp 800w, images/Premrest_Industries_ProfessionalServices-p-1080.webp 1080w, images/Premrest_Industries_ProfessionalServices-p-1600.webp 1600w, images/Premrest_Industries_ProfessionalServices.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="banking-insurance" class="industries-section-bankinginsurance">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-a8ec3c83-8cb0-bcde-76eb-f28e5c511cd2-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_BankingInsurance.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_BankingInsurance-p-500.webp 500w, images/Premrest_Industries_BankingInsurance-p-800.webp 800w, images/Premrest_Industries_BankingInsurance-p-1080.webp 1080w, images/Premrest_Industries_BankingInsurance-p-1600.webp 1600w, images/Premrest_Industries_BankingInsurance.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/banking.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Banking &amp; insurance</h2>
                  <p>In the finance world, consistency and presentation go hand in hand. From commercial offices to retail spaces, clean, well-maintained flooring signals order, control, and credibility, values your clients expect at every touchpoint.<br><br>Our team understands the security, compliance, and brand standards expected in this industry. We clean discreetly, without disrupting meetings, client visits or day-to-day operations - keeping your space polished and professional, even when things are moving fast.<br><br>And with sustainability high on the agenda for many global banking groups, we help you meet internal ESG goals through cleaning methods that reduce water, energy and waste, without compromising on results. From single sites to national portfolios, we tailor our approach to keep standards high and environmental impact low.</p>
                  <div class="w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <a href="#" class="resources-industries-link w-inline-block">
                          <p class="text-size-large resources-industries-headline w-dyn-bind-empty"></p>
                          <p class="text-size-large resources-industries-text w-dyn-bind-empty"></p>
                        </a>
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
      <div id="education" class="industries-section-education">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/education.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Education</h2>
                  <p>In schools, TAFEs and universities, floors take a beating. Thousands of feet move through corridors, classrooms, and common areas every day, dragging in dirt, spills, and wear along the way. Clean, safe floors aren’t just about appearance; they impact hygiene, safety, and the learning environment itself.<br><br>We work with education providers nationally to implement proactive floor care that meets the demands of busy academic calendars. Our low-moisture cleaning methods mean faster drying times and minimal disruption, so teaching and learning can continue uninterrupted. And our team is trained to work safely in active school zones.<br><br>Whether you manage one campus or many, we help you stay ahead of wear and tear with a maintenance program that protects your floors - and your reputation.</p>
                  <div class="w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <a href="#" class="resources-industries-link w-inline-block">
                          <p class="text-size-large resources-industries-headline w-dyn-bind-empty"></p>
                          <p class="text-size-large resources-industries-text w-dyn-bind-empty"></p>
                        </a>
                      </div>
                    </div>
                    <div class="w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_6706a924-0234-1252-c312-7604e404d52e-97f9acbd" class="grid-column grid-column-2-inverse">
                  <div id="w-node-_6706a924-0234-1252-c312-7604e404d52f-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_Education.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Education-p-500.webp 500w, images/Premrest_Industries_Education-p-800.webp 800w, images/Premrest_Industries_Education-p-1080.webp 1080w, images/Premrest_Industries_Education-p-1600.webp 1600w, images/Premrest_Industries_Education.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="government" class="industries-section-government">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-f2085dc0-3417-b14d-cf6e-6f64587cb6db-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_Government.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Government-p-500.webp 500w, images/Premrest_Industries_Government-p-800.webp 800w, images/Premrest_Industries_Government-p-1080.webp 1080w, images/Premrest_Industries_Government-p-1600.webp 1600w, images/Premrest_Industries_Government.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/government.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Government</h2>
                  <p>Government buildings serve a broad mix of people - public visitors, staff, contractors, and community groups, often all in the same day. With constant foot traffic and tight expectations around safety and compliance, your floors need to hold up without needing constant attention.<br><br>We work across local, state and federal sites, delivering specialist cleaning and installation that fits around how your facilities actually run. No disruption. No cutting corners. Just safe, compliant floors that look the part and stand up to the workload.<br><br>We’re also across the paperwork. From procurement requirements to sustainability targets, we know how to work within the framework, using methods that reduce water, energy and waste, while extending the life of your flooring and helping you stay audit ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="retail" class="industries-section-retail">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/retail.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Retail</h2>
                  <p>Retail spaces live and die by presentation. Shoppers may not notice when your floors are spotless - but they’ll definitely notice when they’re not. From heavy foot traffic and food spills, to dusty corners and worn finishes, retail floors cop it all. To stay clean, safe and on brand, they need regular attention.<br><br>We keep retail floors looking fresh without getting in the way. Our cleaning methods are fast drying, quiet, and mess-free - no bulky gear, no disruption to trade, and no downtime. And, we work after hours so your space is clean, dry and ready to go before the first customer walks in.<br><br>We also install new flooring for retail fitouts, delivering stylish, durable finishes that elevate the space and handle the daily grind. Whether you run a single site or manage a national brand, we help keep your floors consistent, compliant and always ready to impress.</p>
                </div>
                <div id="w-node-_61e54612-c606-a081-74c3-47fad7bfa441-97f9acbd" class="grid-column grid-column-2-inverse">
                  <div id="w-node-_61e54612-c606-a081-74c3-47fad7bfa442-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_Retail_1.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Retail_1-p-500.webp 500w, images/Premrest_Industries_Retail_1-p-800.webp 800w, images/Premrest_Industries_Retail_1-p-1080.webp 1080w, images/Premrest_Industries_Retail_1-p-1600.webp 1600w, images/Premrest_Industries_Retail_1.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="health" class="industries-section-health">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-_6da257e3-24f5-0ec1-887a-20bd2cc13019-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_Health.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Health-p-500.webp 500w, images/Premrest_Industries_Health-p-800.webp 800w, images/Premrest_Industries_Health-p-1080.webp 1080w, images/Premrest_Industries_Health-p-1600.webp 1600w, images/Premrest_Industries_Health.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/health.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Health</h2>
                  <p>In healthcare, there’s no room for “near enough.” Floors need to do more than look clean - they need to support hygiene, safety, and the overall standard of care. From GP clinics and dental practices to day surgeries and aged care, every surface plays a part.<br><br>We clean healthcare floors in a way that’s fast, effective, and low-disruption - no sticky residues, no harsh chemical smells, and no bulky gear getting in the way. Whether it’s vinyl, carpet or safety flooring, we get it clean and dry, fast, so your team can stay focused on what matters.<br><br>We work within your compliance requirements, keeping things consistent, safe and up to standard, no matter the scale of your facility. And when it’s time to upgrade or expand, we install flooring that’s fit for purpose, built to last, and made for care-first spaces.</p>
                  <div class="w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <a href="#" class="resources-industries-link w-inline-block">
                          <p class="text-size-large resources-industries-headline w-dyn-bind-empty"></p>
                          <p class="text-size-large resources-industries-text w-dyn-bind-empty"></p>
                        </a>
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
      <div id="fitness" class="industries-section-fitness">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/fitness.png" loading="lazy" sizes="(max-width: 512px) 100vw, 512px" srcset="/images/fitness-p-500.png 500w, images/fitness.png 512w" alt="" class="industries-section-icon">
                  <h2>Fitness</h2>
                  <p>Fitness spaces are tough on floors - constant movement, sweat, equipment drops, and high foot traffic all take their toll. Whether it’s a boutique gym, pilates studio or performance centre, floors need to stay clean, safe, and ready for whatever’s next.<br><br>We clean gym floors in a way that fits around your schedule, not through the middle of it. No noisy gear, no long drying times, and no chemical smells lingering in the air. Just a fast, effective clean that gets done after hours and leaves the space fresh by morning.<br><br>We also install high-performance flooring built for movement. From rubber tiles and vinyl planks to slip resistant surfaces and acoustic underlays, we help you choose the right finish, and install it on time, on budget, and without the drama.</p>
                </div>
                <div id="w-node-_07127ec8-6e3d-b04d-4059-7511fc6dded5-97f9acbd" class="grid-column grid-column-2-inverse">
                  <div id="w-node-_07127ec8-6e3d-b04d-4059-7511fc6dded6-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_Fitness.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Fitness-p-500.webp 500w, images/Premrest_Industries_Fitness-p-800.webp 800w, images/Premrest_Industries_Fitness-p-1080.webp 1080w, images/Premrest_Industries_Fitness-p-1600.webp 1600w, images/Premrest_Industries_Fitness.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="call-centres" class="industries-section-247callcentres">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-a61b0244-a3fc-b227-0ed8-aa27c2e24bec-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_247CallCentres.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_247CallCentres-p-500.webp 500w, images/Premrest_Industries_247CallCentres-p-800.webp 800w, images/Premrest_Industries_247CallCentres-p-1080.webp 1080w, images/Premrest_Industries_247CallCentres-p-1600.webp 1600w, images/Premrest_Industries_247CallCentres.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/call-centre.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>24/7 call centres</h2>
                  <p>In a call centre, there’s no “off” switch. People come and go at all hours, which means the floors never really get a break. Chairs roll constantly, drinks get spilled, and over time, that carpet starts to wear the chaos of the job. But with limited windows for cleaning, maintaining standards can feel impossible.<br><br>That’s why we provide round-the-clock floor cleaning programs designed for non-stop operations. Our low moisture encapsulation method means that carpets are dry in under an hour - no soggy fibres, no lingering smells, and no downtime. And, with machines that are quieter than a vacuum, floors get cleaned while business keeps ticking along.<br><br>Whether you run a team of 50 or 500, we’ll build a maintenance plan that keeps your workspace clean, your team focused, and your floors looking sharp - day and night.</p>
                  <div class="w-dyn-list">
                    <div role="list" class="w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <a href="#" class="resources-industries-link w-inline-block">
                          <p class="text-size-large resources-industries-headline w-dyn-bind-empty"></p>
                          <p class="text-size-large resources-industries-text w-dyn-bind-empty"></p>
                        </a>
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
      <div id="transport" class="industries-section-transport">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column"><img src="/images/airplane-1.png" loading="lazy" alt="" class="industries-section-icon">
                  <h2>Transport</h2>
                  <p>Transport hubs never stop moving. From airports, train stations to road authority offices, these spaces see constant foot traffic, heavy wear, and high expectations around safety and presentation.<br><br>We clean transport flooring with speed and precision, using low moisture methods that reduce drying times, kick the grime, and keep operations running without disruption. Public zones stay clean and safe, while back-of-house areas are maintained to the same high standard.<br><br>We also install floors built to handle the pressure, delivering fit-for-purpose finishes that stand up to high traffic, tight turnarounds and long-term use.</p>
                </div>
                <div id="w-node-_33e9774c-d9b6-5341-4d64-fd19f2dae3b8-97f9acbd" class="grid-column grid-column-2-inverse">
                  <div id="w-node-_33e9774c-d9b6-5341-4d64-fd19f2dae3b9-97f9acbd" class="column-image-block"><img src="/images/Premrest_Industries_Transport.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Industries_Transport-p-500.webp 500w, images/Premrest_Industries_Transport-p-800.webp 800w, images/Premrest_Industries_Transport-p-1080.webp 1080w, images/Premrest_Industries_Transport-p-1600.webp 1600w, images/Premrest_Industries_Transport.webp 2000w" alt="" class="section-image"></div>
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
              <div id="w-node-e5bd0ece-6786-ee84-e886-54350f2698ab-97f9acbd" class="grid-column grid-column-1">
                <h2 id="w-node-e5bd0ece-6786-ee84-e886-54350f2698ac-97f9acbd" class="text-light home-final-headline">Let’s create floors that sweep you off your feet.</h2>
                <a id="w-node-e5bd0ece-6786-ee84-e886-54350f2698ae-97f9acbd" href="/contact" class="button home-final-button w-button">Let's chat</a>
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
