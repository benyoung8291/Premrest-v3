import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Premrest | Commercial Floor SustainabilityCarpet Cleaning Comparison",
  description: "Because flooring shouldn’t just look good, it should do good too.",
  openGraph: {
    title: "Premrest | Commercial Floor Sustainability",
    description: "Because flooring shouldn’t just look good, it should do good too.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cf77798234106f540133_Sustainability_FeaturedImage.jpg"]
  },
  twitter: {
    title: "Premrest | Commercial Floor Sustainability",
    description: "Because flooring shouldn’t just look good, it should do good too.",
    images: ["https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cf77798234106f540133_Sustainability_FeaturedImage.jpg"]
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
      <div class="sustainability-section-hero background-color-primary hero-padding-top">
        <div class="padding-global padding-section-medium">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div class="hero-heading-block">
                    <h1 data-w-id="5aeb109c-975f-166c-24c2-f2180fbb4601" style="opacity:0" class="hero-headline sustainability-hero-headline">Beautiful flooring doesn’t need to cost the earth</h1><img src="/images/Premrest_Rays_Blue.svg" loading="lazy" style="opacity:0" data-w-id="c1ca5cc6-7f60-5d61-8686-0739c2ee6dc1" alt="" class="sustainability-hero-rays">
                  </div>
                  <p data-w-id="5aeb109c-975f-166c-24c2-f2180fbb4603" style="opacity:0" class="text-size-large sustainability-hero-subheadline">Because flooring shouldn’t just look good, <strong>it should do good too.</strong></p>
                  <a data-w-id="5aeb109c-975f-166c-24c2-f2180fbb4607" style="opacity:0" href="/contact" class="button is-secondary is-inverse w-button">Let's chat</a>
                </div>
                <div id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb4609-8d785d55" class="grid-column grid-column-inverse">
                  <div id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb460a-8d785d55" class="column-image-block"><img src="/images/Premrest_Sustainability_Hero_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Sustainability_Hero_Blob-p-500.webp 500w, images/Premrest_Sustainability_Hero_Blob-p-800.webp 800w, images/Premrest_Sustainability_Hero_Blob-p-1080.webp 1080w, images/Premrest_Sustainability_Hero_Blob-p-1600.webp 1600w, images/Premrest_Sustainability_Hero_Blob.webp 2000w" alt="" class="hero-image hero-image-sustainability"><img src="/images/Premrest_DirtyShoe_Tan.svg" loading="lazy" alt="" class="sustainability-hero-image-clean"><img src="/images/Premrest_Scribble_Orange.svg" loading="lazy" alt="" class="sustainability-hero-image-scribble"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sustainability-section-problem">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <div id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb4615-8d785d55" class="column-image-block"><img src="/images/Premrest_Home_Sustainability_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Home_Sustainability_Blob-p-500.webp 500w, images/Premrest_Home_Sustainability_Blob-p-800.webp 800w, images/Premrest_Home_Sustainability_Blob-p-1080.webp 1080w, images/Premrest_Home_Sustainability_Blob-p-1600.webp 1600w, images/Premrest_Home_Sustainability_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
                <div class="grid-column"><img src="/images/Premrest_SustainabilityEarth.svg" loading="lazy" alt="" class="sustainability_problem_globe">
                  <h2>Sustainability is woven into our fabric, and grounded in everything we do.</h2>
                  <p>Environmental responsibility is more than just ticking boxes or meeting targets. We’re fostering an environment for the generations; crafting floors that are as functional and elegant as they are kind to the planet.<br><br>We take a ruthless, uncompromising approach to sustainability across our cleans and installs. Our solutions shouldn’t just meet today’s needs, but safeguard tomorrow.<br><br>Sustainability starts underfoot.</p>
                  <a href="/contact" class="button is-green w-button">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sustainability-section-cleaning">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2 class="sustainability-in-cleaning">Sustainability in <span class="text-sustainability">cleaning</span></h2>
                  <p>We’re committed to reducing our environmental footprint while helping facilities meet their ambitious sustainability goals.<br><br>For over a decade, we’ve stepped away from traditional steam cleaning methods that rely on excessive resources and harsh chemicals, and only use it as a first step in a restoration clean. Instead, we focus on low moisture encapsulation, a technique that uses a fraction of the water, significantly cutting down waste and drying times.<br><br>Steam cleaning uses high pressure hot water to flush out dirt, but it typically removes only 75% of the water, shampoo and grime. This leaves 25% of waste behind, pushing stains deep into the backing of the carpet, causing them to wick back up and reappear as the carpet dries - often within a week.<br><br>Our low moisture encapsulation method breaks down dirt and grime into nano-sized particles, with 96% of it removed through regular vacuuming. This means that those problem stains aren’t coming back to haunt you.<br><br>We partner with facilities, buildings and national portfolios to help them meet ESG goals at scale to see great reductions in waste. That means spotless floors, without the environmental cost.</p>
                  <a href="/contact" class="button is-green w-button">Let's chat</a>
                </div>
                <div id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb4642-8d785d55" class="grid-column">
                  <div id="w-node-_5b3f58f4-cf24-98b4-2099-e8ec69e7b120-8d785d55" class="column-image-block"><img src="/images/Premrest_Cleaning_Steps_Blob_1.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Cleaning_Steps_Blob_1-p-500.webp 500w, images/Premrest_Cleaning_Steps_Blob_1-p-800.webp 800w, images/Premrest_Cleaning_Steps_Blob_1-p-1080.webp 1080w, images/Premrest_Cleaning_Steps_Blob_1-p-1600.webp 1600w, images/Premrest_Cleaning_Steps_Blob_1.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sustainability-section-graphs">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <h2 id="w-node-f15b273b-c170-2098-452b-bc936cd7ca31-6cd7ca2b" class="sustainability-calculator-heading">Low moisture encapsulation trumps steam cleaning, every time.<br></h2>
                  <div id="w-node-ba17a66f-92ee-bd41-627f-974272ba05ea-6cd7ca2b" class="calculator-input w-embed w-script">
                    
                    
                    
                      <title>Carpet Cleaning Comparison</title>
                      <style>
    /* ====== Basic Input Styles ====== */
    #carpet-area {
      width: 100%;
      max-width: 300px!important;
      font-size: 1rem;
      font-family: krub, sans-serif;
      padding: 0.5rem 1rem;
      border: 2px solid #aeba6c;
      border-radius: 100px;
      outline: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    #carpet-area:focus {
      border-color: #d2d489;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      width: 300px;
      margin: 0 auto;
    }
.columns-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  width: 100%; /* Make the container fill its parent’s entire width */
  margin: 0;   /* Remove auto margins if you want it fully left-aligned */
}
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      padding: 10px;
    }
    @media (max-width: 960px) {
      .columns-container {
        grid-template-columns: 1fr;
      }
    }
    .circle-container {
      position: relative;
      width: 100%;
      aspect-ratio: 1; /* Maintain a square container for the SVG */
      max-width: 300px; /* Adjust as needed */
      vertical-align: top;
    }
    .circle-container svg {
      width: 100%;
      height: 100%;
    }
    /* ====== Circle Appearance ====== */
    .progress-circle-outer,
    .progress-circle-inner {
      stroke-linecap: round;
      stroke-width: 25; /* Thicker stroke */
      fill: none;
      transition: stroke-dashoffset 1.5s ease;
      /* Rotate so 0% starts at top */
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }
    /* Outer circle: background color */
    .progress-circle-outer {
      stroke: #f1eade; 
    }
    /* Inner circle: foreground color (animated fill) */
    .progress-circle-inner {
      stroke: #aeba6c; 
    }
    .circle-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 800;
      color: #2F3133;
    }
    .heading-style-h3 {
      font-weight: 800;
      font-size: 2rem;
    }
    .results-box {
      max-width: 250px;
    }
    .others-text {
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 400;
      color: #2F3133;
    }
    .premrest-text {
      font-family: futura-pt, sans-serif;
      letter-spacing: -0.02rem;
      font-weight: 800;
      font-size: 1.2rem;
      color: #2F3133;
    }
  </style>
                    
                    
                      <div class="input-container">
                        <label for="carpet-area">Enter Carpet Area (m²):</label>
                        <input type="number" id="carpet-area" value="1000" min="1" max="9999999">
                      </div>
                      <div class="columns-container">
                        <div class="column">
                          <div class="circle-container">
                            <svg id="water-graph" viewBox="0 0 220 220">
                              <circle class="progress-circle-outer" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="0"></circle>
                              <circle class="progress-circle-inner" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="565"></circle>
                            </svg>
                            <div class="circle-text">
                              <span class="heading-style-h3">0%</span><br>
                              less water usage
                            </div>
                          </div>
                          <div id="water-output"></div>
                        </div>
                        <div class="column">
                          <div class="circle-container">
                            <svg id="waste-graph" viewBox="0 0 220 220">
                              <circle class="progress-circle-outer" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="0"></circle>
                              <circle class="progress-circle-inner" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="565"></circle>
                            </svg>
                            <div class="circle-text">
                              <span class="heading-style-h3">0%</span><br>
                              less waste water
                            </div>
                          </div>
                          <div id="waste-output"></div>
                        </div>
                        <div class="column">
                          <div class="circle-container">
                            <svg id="energy-graph" viewBox="0 0 220 220">
                              <circle class="progress-circle-outer" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="0"></circle>
                              <circle class="progress-circle-inner" cx="110" cy="110" r="90" stroke-dasharray="565" stroke-dashoffset="565"></circle>
                            </svg>
                            <div class="circle-text">
                              <span class="heading-style-h3">0%</span><br>
                              less energy usage
                            </div>
                          </div>
                          <div id="energy-output"></div>
                        </div>
                      </div>
                      <script>
    /***********************************************
     * Helpers & Resets
     ***********************************************/
    window.formatNumber = function(num, precision = 0) { // Changed precision to 0
      return num.toLocaleString('en-US', {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision
      });
    };
    window.resetGraphic = function(svgId, centerSelector, outputId) {
      const svgEl = document.getElementById(svgId);
      if (!svgEl) return;
      const bgCircle = svgEl.querySelector('.progress-circle-outer');
      const fgCircle = svgEl.querySelector('.progress-circle-inner');
      const container = svgEl.closest('.circle-container');
      const centerEl = container ? container.querySelector(centerSelector) : null;
      const outputEl = document.getElementById(outputId);
      if (bgCircle) {
        // fully drawn background
        bgCircle.style.strokeDashoffset = '0';
      }
      if (fgCircle) {
        // hidden foreground
        fgCircle.style.strokeDashoffset = fgCircle.getAttribute('stroke-dasharray');
      }
      if (centerEl) {
        const heading = centerEl.querySelector('.heading-style-h3');
        if (heading) heading.textContent = '0%';
      }
      if (outputEl) {
        outputEl.innerHTML = '';
      }
    };
    /***********************************************
     * Main Update Function for a Circle
     ***********************************************/
    window.updateCircleData = function(svgId, centerSelector, outputId, hweUsage, encUsage, units) {
      if (hweUsage <= 0) {
        window.resetGraphic(svgId, centerSelector, outputId);
        return;
      }
      // Calculate percentage saved
      const saved = hweUsage - encUsage;
      const pctSaved = (saved / hweUsage) * 100;
      const savedRatio = saved / hweUsage; // e.g. 0.76 => 76%
      const svgEl = document.getElementById(svgId);
      if (!svgEl) return;
      const bgCircle = svgEl.querySelector('.progress-circle-outer');
      const fgCircle = svgEl.querySelector('.progress-circle-inner');
      const container = svgEl.closest('.circle-container');
      const centerEl = container ? container.querySelector(centerSelector) : null;
      const outputEl = document.getElementById(outputId);
      if (!bgCircle || !fgCircle || !centerEl || !outputEl) return;
      // Both circles have the same circumference (~565 for r=90)
      const circleCircum = parseFloat(bgCircle.getAttribute('stroke-dasharray')) || 565;
      // Force reflow to restart the animation
      bgCircle.style.strokeDashoffset = bgCircle.style.strokeDashoffset;
      fgCircle.style.strokeDashoffset = fgCircle.style.strokeDashoffset;
      // Background circle remains fully drawn
      bgCircle.style.strokeDashoffset = '0';
      // Foreground circle offset so that the "saved" portion is visible
      fgCircle.style.strokeDashoffset = (circleCircum * (1 - savedRatio)).toString();
      // Update center text
      const heading = centerEl.querySelector('.heading-style-h3');
      if (heading) {
        heading.textContent = Math.round(pctSaved) + '%';
      }
      // Show HWE vs Enc data below the circle
      let hweText = '', encText = '';
      if (units === 'hrs') {
        hweText = (hweUsage < 1) ? '30 min' : Math.round(hweUsage) + ' hr';
        encText = (encUsage < 1) ? '30 min' : Math.round(encUsage) + ' hr';
      } else {
        hweText = window.formatNumber(hweUsage, 0) + ' ' + units; //precision 0
        encText = window.formatNumber(encUsage, 0) + ' ' + units; //precision 0
      }
      outputEl.innerHTML = \`
        <div class="results-box">
          <div style="margin-bottom:4px;">
            <span style="color:#d2d489; font-size:1.2rem;">●</span>
            <span class="others-text">Others: \${hweText}</span>
          </div>
          <div>
            <span style="color:#858e46; font-size:1.2rem;">●</span>
            <span class="premrest-text">Premrest: \${encText}</span>
          </div>
        </div>
      \`;
    };
    /***********************************************
     * Per-Graph Updates
     ***********************************************/
    function updateWaterUsed() {
      const areaVal = parseFloat(document.getElementById('carpet-area').value) || 0;
      if (areaVal <= 0) {
        window.resetGraphic('water-graph', '.circle-text', 'water-output');
        return;
      }
      // Example formula for water usage
      const hwe = 0.502 * areaVal;
      const enc = 0.12 * areaVal;
      window.updateCircleData('water-graph', '.circle-text', 'water-output', hwe, enc, 'L');
    }
    function updateWasteWater() {
      const areaVal = parseFloat(document.getElementById('carpet-area').value) || 0;
      if (areaVal <= 0) {
        window.resetGraphic('waste-graph', '.circle-text', 'waste-output');
        return;
      }
      // Example formula for waste water
      const hwe = 0.301 * areaVal;
      const enc = 0.001 * areaVal;
      window.updateCircleData('waste-graph', '.circle-text', 'waste-output', hwe, enc, 'L');
    }
    function updateEnergy() {
      const areaVal = parseFloat(document.getElementById('carpet-area').value) || 0;
      if (areaVal <= 0) {
        window.resetGraphic('energy-graph', '.circle-text', 'energy-output');
        return;
      }
      // Example formula for energy usage
      const hwe = 0.0832 * areaVal;
      const enc = 0.016 * areaVal;
      window.updateCircleData('energy-graph', '.circle-text', 'energy-output', hwe, enc, 'kWh');
    }
    /***********************************************
     * Trigger Animations on Scroll into View
     ***********************************************/
    function animateCircles() {
      updateWaterUsed();
      updateWasteWater();
      updateEnergy();
    }
    const graphsSection = document.querySelector('.columns-container');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCircles();
          observer.unobserve(graphsSection);
        }
      });
    });
    observer.observe(graphsSection);
    // Update immediately if user changes input
    document.getElementById('carpet-area').addEventListener('input', updateWaterUsed);
    document.getElementById('carpet-area').addEventListener('input', updateWasteWater);
    document.getElementById('carpet-area').addEventListener('input', updateEnergy);
  </script>
                    
                    
                  </div>
                </div>
              </div>
              <div class="grid-1-column">
                <div class="grid-column">
                  <div id="w-node-f15b273b-c170-2098-452b-bc936cd7ca3e-6cd7ca2b" class="encapsulation-container">
                    <div id="w-node-f15b273b-c170-2098-452b-bc936cd7ca3f-6cd7ca2b" class="encapsulation-table-container">
                      <div class="encapsulation-table-grid">
                        <div id="w-node-f15b273b-c170-2098-452b-bc936cd7ca41-6cd7ca2b" class="encapsulation-header">
                          <div class="encapsulation-list-heading-block">
                            <div class="div-spacer"></div>
                            <div class="list-content">
                              <div class="encapsulation-heading-container-from">
                                <h3 class="encapsulation-heading-from">From</h3>
                              </div>
                            </div>
                            <div class="list-content">
                              <div class="encapsulation-heading-container">
                                <h3 class="encapsulation-heading">To</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Water efficiency</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Uses large amounts of water</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Minimal water usage</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Fast drying</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Long drying times (24+ hours)</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Usually dry within 45-90 minutes</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Mould prevention</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Risk of mould and mildew from wet carpets</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Low moisture = no mould risk</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Eco-friendly</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Waste water needs to be disposed</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Zero waste water generated</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Long-lasting clean</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Sticky residues left in carpets causing rapid resoiling</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Stays cleaner for longer through Active Film Technology</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Minimal downtime</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Labour intensive and time consuming</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Minimal downtime and efficient cleaning</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Deep cleaning</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>25% of waste left in the carpets</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>96% of all dirt removed</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Operational ease</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Heavy, noisy, and disruptive machinery</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Quiet, lightweight and non-intrusive operations</p>
                            </div>
                          </div>
                        </div>
                        <div class="encapsulation-list">
                          <div class="encapsulation-list-block">
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-bold">Carpet longevity</p>
                            </div>
                            <div class="encapsulation-desc-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Steam cleaning:&nbsp;</span>Shortened carpet lifespan from wear</p>
                            </div>
                            <div class="encapsulation-to-list-content">
                              <p class="list-content-light"><span class="encapsulation-mobile">Low moisture encapsulation:&nbsp;</span>Extends carpet life with protective polymers</p>
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
      </div>
      <div class="sustainability-section-installs">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-2-columns">
                <div class="grid-column">
                  <h2 class="sustainability-in-installs">Sustainability in <span class="text-sustainability">installs</span></h2>
                  <p>Sustainability in commercial flooring isn’t just a goal for us, but a responsibility we embrace and steward well. From the materials chosen, how they’re sourced, to the installation processes, every stage of the fitout process offers an eco-conscious opportunity that we leverage across all projects.<br><br>One of the many ways we’re doing this is through our partnership with ResiLoop, an initiative by the Australian Resilient Flooring Association (ARFA).<br><br>Together, we’re joining forces to create a closed-loop system that recovers, recycles, and reuses waste materials from our projects to minimise landfill, and promote more sustainable installation practices. In Australia alone, over 9,000 tonnes of excess and offcuts never get walked on.<br><br>This partnership will see our vinyl installation waste be repurposed to create a host of construction products. Currently, all collected waste material is being recycled into a PVC garden edging product sold at Bunnings.<br><br>Together, we’re transforming the flooring industry, while looking after our planet at the same time.</p>
                  <a href="/contact" class="button is-green w-button">Let's chat</a>
                </div>
                <div id="w-node-_03c3ea75-828f-26d6-5dc7-1fee9f28a1c1-8d785d55" class="grid-column grid-column-inverse">
                  <div class="sustainability-installs-section-image-block"><img src="/images/logo-dark.webp" loading="lazy" alt="" class="resiloop-logo"><img src="/images/Premrest_Installs_Sustainability_Blob.webp" loading="lazy" sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_Installs_Sustainability_Blob-p-500.webp 500w, images/Premrest_Installs_Sustainability_Blob-p-800.webp 800w, images/Premrest_Installs_Sustainability_Blob-p-1080.webp 1080w, images/Premrest_Installs_Sustainability_Blob-p-1600.webp 1600w, images/Premrest_Installs_Sustainability_Blob.webp 2000w" alt="" class="section-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sustainability-section-sustainability-calculator">
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
      </div>
      <div class="sustainability-section-final">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb46bb-8d785d55" class="grid-column grid-column-1">
                <h2 id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb46bc-8d785d55" class="text-light home-final-headline">Let’s create floors that sweep you off your feet.</h2>
                <a id="w-node-_5aeb109c-975f-166c-24c2-f2180fbb46be-8d785d55" href="/contact" class="button home-final-button is-green w-button">Let's chat</a>
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
