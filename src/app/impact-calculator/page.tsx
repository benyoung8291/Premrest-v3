import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

export const metadata: Metadata = {
  title: "Impact CalculatorSustainability Impact Report",
  openGraph: {
    title: "Impact Calculator"
  },
  twitter: {
    title: "Impact Calculator"
  }
};

const bodyHtml = `
  <div class="page-wrapper">
    <div class="main-wrapper">
      <div class="global-section-header background-color-green">
        <div class="padding-global padding-section-large padding-section-header">
          <div class="container-xlarge">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div id="w-node-_4a7be5ab-860a-25f2-232a-27341d5a2ba5-b9780d8e" class="grid-column">
                  <h1 id="w-node-_4a7be5ab-860a-25f2-232a-27341d5a2ba6-b9780d8e" class="heading-style-h2 header-heading">Impact Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="impact-section-calculator">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column">
                  <div class="w-embed w-script">
                    
                    
                    
                      <meta charset="UTF-8">
                      <title>Sustainability Impact Report</title>
                      <link rel="stylesheet" href="https://use.typekit.net/ykm3xtb.css">
                      <style>
      /* Style for the form */
      body {
        font-family: 'krub', sans-serif;
        font-size: 1rem;
        color: #2e3133;
      }
      td {
        font-family: 'krub', sans-serif;
        font-size: 1rem;
        color: #2e3133;
      }
      h1,
      h2,
      h3 {
        font-family: 'futura-pt', sans-serif;
        font-weight: 800;
        color: #2e3133;
      }
      h4,
      h5,
      h6 {
        font-family: 'josefin-slab', sans-serif;
        letter-spacing: 0;
        color: #2e3133;
      }
      /* Style all input boxes */
input[type="number"] {
  border: 2px solid #eeeeee;
  border-radius: 100px;
  appearance: none;
  -moz-appearance: textfield; /* For Firefox */
}
/* Style input boxes when focused */
input[type="number"]:focus {
  outline: none;
  border-color: #aeba6c;
}
      #pdfContent ul,
      #pdfContent ol {
        list-style: none;
        margin-left: 0;
        /* Remove default margin */
      }
      #pdfContent li {
        padding-left: 20px;
        /* Add indentation */
      }
      #pdfContent li::before {
        content: "• ";
        /* Add a custom marker */
        margin-left: -10px;
        /* Adjust position */
      }
      form {
        margin-bottom: 30px;
      }
      label {
        display: inline-block;
        width: 150px;
      }
      input {
            padding: 10px 20px;
      }
        @media screen and (min-width: 640px) {
        input {
            max-width: 300px;
        }
      }
      @media screen and (max-width: 640px) {
        input {
            width: 100%;
          }
      }
      /*... other styles... */
            #pdfContent table td:last-child,
            #pdfContent table th:last-child {
            background-color: #aeba6c;
            }
            #pdfContentContainer { /* Added the container to the CSS */
            display: none; /* Use display: none to hide the container */
            }
            #pdfContent {
            word-wrap: break-word;
            overflow-wrap: break-word;
            box-sizing: border-box;
            width: 100%;
            font-size: 0.85rem;
            }
            #pdfContent * {
        max-width: 100%;
        box-sizing: inherit;
        white-space: normal;
      }
      #pdfContent table {
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
      }
      #pdfContent table td,
      #pdfContent table th {
        word-break: break-word;
        padding: 10px;
        border: 1px solid #000;
        font-size: 0.875rem !important;
      }
      /* Ensure images scale properly */
      #pdfContent img {
        max-width: 100%;
        height: auto;
      }
      .impact-logo-container {
      margin-top: 20px;
      }
      a {
  			text-decoration: none;
  			color: #d1703c;
			}
      /* Base styling for each PDF page */
.pdf-page {
  /* Ensures that each page container forces a break after its content */
  page-break-after: always;
  /* Ensure full width so content scales appropriately */
  width: 100%;
}
/* Remove the forced page break after the last page */
.pdf-page:last-child {
  page-break-after: auto;
}
/* Optional: Adjustments for mobile devices */
@media screen and (max-width: 640px) {
  .pdf-page {
    /* Remove any extra margins/padding if you’re experiencing white space issues */
    padding: 10px;
    /* Retain the page-break rule for consistent PDF generation */
    page-break-after: always;
  }
}
    </style>
                    
                    
                      <div id="pdfContentContainer">
                        <div id="pdfContent">
                          <!--  PAGE 1  -->
                          <div class="pdf-page">
                            <div class="grid_wrapper">
                              <div class="grid-1-column">
                                <h2 class="heading-style-h2">Your impact report</h2>
                                <h4 class="heading-style-h4">Overview</h4>
                                <p>Keeping your facility clean while also balancing the rigour of meeting sustainability goals is a demanding responsibility for many facility managers.</p>
                                <p>Steam cleaning has long been the go-to method for carpets. But from a sustainability standpoint, it comes with significant drawbacks and is not the most environmentally friendly option - particularly for multi-site facility managers overseeing sustainability at scale.</p>
                                <p>Excessive water usage places a significant strain on resources, while the energy required to heat large volumes of it drives up operational expenses. After steam cleaning, the wastewater left behind can also contain harmful chemicals that need careful disposal to meet environmental standards. If that's not enough, bulky machinery, noisy operations, and long drying times also doesn't make it the most practical choice for facility managers who need their buildings to keep ticking without any downtime.</p>
                                <h4 class="heading-style-h4">A greener alternative</h4>
                                <p>Low moisture encapsulation is a growing, sustainable alternative that uses significantly less water, energy, chemicals and wastewater - without compromising on results.</p>
                                <p>Think of steam cleaning like a pressure wash for your carpets. Low moisture encapsulation however, works through the agitation of a chemical solution deep into dirty carpet fibres. As the solution dries, dirt and debris are broken down into brittle, nano-sized particles that are easily removed through vacuuming.</p>
                                <p>Steam cleaning leaves behind a sticky residue, which is often the cause of rapid resoiling. Our encapsulation solution is complemented with Active Film Technology (ATF), where carpet fibres are coated with an invisible, durable positive film that repels dirt - keeping floors cleaner for longer.</p>
                                <p>Just as plants self-clean when it rains, a phenomenon known as the Lotus Effect, this innovative technology works in a similar way, preventing grime from clinging to carpet fibres and making maintenance easier. This method not only enhances sustainability but also improves efficiency, reduces downtime, and prioritises proactive maintenance over a ‘clean-when-needed’ approach - keeping your floors spotless all year round.</p>
                              </div>
                            </div>
                          </div>
                          <!--  PAGE 2  -->
                          <div class="pdf-page">
                            <div class="grid_wrapper grid-space">
                              <div class="grid-1-column">
                                <h4 class="heading-style-h4">Waste management hierarchy</h4>
                                <p>Sustainability isn’t just about cleaning methods - it’s about how we handle waste too. At Premrest, we follow a simple but effective waste management hierarchy that helps facilities reduce their environmental footprint while keeping things running smoothly:</p>
                                <ol role="list">
                                  <li><strong>Reduce:</strong> Cutting down on water waste by using cleaning methods that need considerably less water, energy, and chemicals.</li>
                                  <li><strong>Reuse:</strong> Maximising resources by maintaining and revitalising carpets for as long as 15 years, rather than replacing them too soon.</li>
                                  <li><strong>Recycle:</strong> Giving materials a second life by reprocessing them into new products instead of sending them to landfill.</li>
                                  <li><strong>Disposal:</strong> The absolute last resort - handling water waste responsibly when there’s no other option.</li>
                                </ol>
                                <p>By reducing water and energy use, extending the life of flooring, and cutting down harsh chemical use, low moisture encapsulation moves away from disposal and towards reuse and reduce. Instead of treating waste as an afterthought, we embed sustainability into every step of the cleaning process.</p>
                                <p>
                                  <img src="/images/Colorful-Pyramid-Chart-Instagram-Post.webp" width="250px" alt="" class="waste-management-image" crossorigin="anonymous">
                                </p>
                              </div>
                            </div>
                          </div>
                          <!--  PAGE 3  -->
                          <div class="pdf-page">
                            <div class="grid_wrapper grid-space">
                              <div class="grid-1-column">
                                <h4 class="heading-style-h4">Results</h4>
                                <p>Your facility is <span id="area" style="font-weight: 700"></span> and your frequency of steam cleans is <span id="frequency" style="font-weight: 700"></span> annually. By making the switch to low moisture encapsulation, here are the reductions you can expect:</p>
                                <div class="w-embed">
                                  <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: center;">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Steam Cleaning</th>
                                        <th>Low Moisture</th>
                                        <th>Savings</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Water Usage</td>
                                        <td id="hweWater"></td>
                                        <td id="lmeWater"></td>
                                        <td id="waterSavings"></td>
                                      </tr>
                                      <tr>
                                        <td>Waste water</td>
                                        <td id="hweWasteWater"></td>
                                        <td id="lmeWasteWater"></td>
                                        <td id="wasteWaterSavings"></td>
                                      </tr>
                                      <tr>
                                        <td>Energy Usage</td>
                                        <td id="hweEnergy"></td>
                                        <td id="lmeEnergy"></td>
                                        <td id="energySavings"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div class="w-richtext">
                                  <ul role="list">
                                    <li>A month's drinking water supply for <span id="households" style="font-weight: 700"></span> households.</li>
                                    <li>Enough to flush your toilets <span id="flushes" style="font-weight: 700"></span> times</li>
                                    <li>Power a Tesla for <span id="teslaDistance" style="font-weight: 700"></span> kms</li>
                                  </ul>
                                </div>
                                <h4 class="heading-style-h4">Why facility managers are making the switch</h4>
                                <div class="w-richtext">
                                  <ul role="list">
                                    <li><strong>Minimal downtime:</strong> Drying time of 45-90 minutes.</li>
                                    <li><strong>Sustainable:</strong> Uses significantly less water, energy, chemicals and waste water.</li>
                                    <li><strong>Non-intrusive:</strong> Lightweight machinery that’s quieter than a vacuum.</li>
                                    <li><strong>Longevity:</strong> Extends carpet lifespan with protective polymers.</li>
                                    <li><strong>Deep cleaning:</strong> Breaks down 96% of dirt and grime on a molecular level.</li>
                                    <li><strong>Long-lasting:</strong> Floors repel dirt and stay cleaner for longer through active film technology.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--  PAGE 4  -->
                          <div class="pdf-page">
                            <div class="grid_wrapper grid-space">
                              <div class="grid-1-column">
                                <h4 class="heading-style-h4">Financial &amp; Compliance Benefits</h4>
                                <p>Choosing low moisture encapsulation isn’t just a more environmentally responsible choice - it’s also a strategic, cost-effective financial decision:</p><br>
                                <ul role="list">
                                  <li><strong>Lower utility costs:</strong> Reduced water and energy expenditure.</li>
                                  <li><strong>Extended flooring lifespan:</strong> Maintain the lifespan of your flooring and prevent costly replacements or repairs.</li>
                                  <li><strong>Meets sustainability &amp; compliance benchmarks:</strong> Align your facility with wider corporate ESG goals.</li>
                                  <li><strong>Lower flooring maintenance costs:</strong> Most cleaning contracts exclude floor maintenance or charge separately for it.</li>
                                </ul>
                                <h4 class="heading-style-h4">Contact Premrest</h4>
                                <p>We’re the trusted sidekick for facility managers, corporate clients, and general cleaning companies across Australia - the Swiss Army knife of all things floor care.</p>
                                <p>Think of us as the flooring experts in your back pocket: one that understands the nuances of floor care across all floor types, root causes of dirt and stains, and the standards expected by manufacturers to maintain them.</p>
                                <p>We tailor cleaning programs that take every variable into account: traffic patterns and zones, specific carpet types, colours, and material finishes, environmental conditions, even your sustainability goals.</p>
                                <p>Our one-of-a-kind, encapsulation method means that those stubborn stains you were told were impossible to remove, or the ones that mysteriously reappear in the same spot are finally taken care of - for good.</p>
                                <p>
                                  <strong>Phone: </strong>
                                  <a href="tel:1300 207 915">1300 207 915</a><br>
                                  <strong>Email:</strong>
                                  <a href="mailto:office@premrest.com.au">office@premrest.com.au</a><br>
                                  <strong>Website:</strong>
                                  <a href="https://premrest.com.au" target="_blank">https://premrest.com.au</a>
                                </p><p>
                                </p><p>
                                  <img src="/images/Premrest_Tagline_Charcoal-Orange.png" width="170px" alt="" class="waste-management-image" crossorigin="anonymous">
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                        <br>
                        <button id="downloadPdfContent" class="button is-green w-button">
                          Download Report
                        </button>
                      </div>
                      <form id="cleaningForm">
                        <h2 class="heading-style-h2">Calculate your sustainability impact</h2><br>
                        <p class="text-size-large">Low moisture encapsulation provides facility managers with spotless floors, but without the environmental cost. Calculate your impact and generate a report of how significantly less water, energy, chemicals and waste you'd be saving.
                        </p><br>
                        <label for="squareMeters">Square Meters:</label>
                        <input type="number" id="squareMeters" name="squareMeters" required="" onkeydown="return event.keyCode!== 38 &amp;&amp; event.keyCode!== 40"><br><br>
                        <label for="annualCleans">Annual Cleans:</label>
                        <input type="number" id="annualCleans" name="annualCleans" required="" onkeydown="return event.keyCode!== 38 &amp;&amp; event.keyCode!== 40"><br><br>
                        <button class="button is-green w-button" type="submit" id="generate-impact-report">Generate impact report</button>
                      </form>
                      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
                      <script>
      // Event listener for the form submission
      document.getElementById('cleaningForm').addEventListener('submit', function (e) {
        e.preventDefault();
        // Retrieve and parse the input values
        const squareMeters = parseFloat(document.getElementById('squareMeters').value);
        const annualCleans = parseFloat(document.getElementById('annualCleans').value);
        // Perform calculations
        const hweWater = Math.round(squareMeters * annualCleans * 0.502);
        const hweWasteWater = Math.round(squareMeters * annualCleans * 0.301);
        const hweEnergy = Math.round(squareMeters * annualCleans * 0.0832);
        const lmeWater = Math.round(squareMeters * annualCleans * 0.12);
        const lmeWasteWater = Math.round(squareMeters * annualCleans * 0.001);
        const lmeEnergy = Math.round(squareMeters * annualCleans * 0.016);
        // Compute savings
        const waterSavings = hweWater - lmeWater;
        const wasteWaterSavings = hweWasteWater - lmeWasteWater;
        const energySavings = hweEnergy - lmeEnergy;
        // Update the table with calculated values
        document.getElementById('area').textContent = squareMeters.toLocaleString() + ' m²';
        document.getElementById('frequency').textContent = annualCleans;
        document.getElementById('hweWater').textContent = hweWater.toLocaleString() + ' L';
        document.getElementById('hweWasteWater').textContent = hweWasteWater.toLocaleString() + ' L';
        document.getElementById('hweEnergy').textContent = hweEnergy.toLocaleString() + ' kWh';
        document.getElementById('lmeWater').textContent = lmeWater.toLocaleString() + ' L';
        document.getElementById('lmeWasteWater').textContent = lmeWasteWater.toLocaleString() + ' L';
        document.getElementById('lmeEnergy').textContent = lmeEnergy.toLocaleString() + ' kWh';
        document.getElementById('waterSavings').textContent = waterSavings.toLocaleString() + ' L';
        document.getElementById('wasteWaterSavings').textContent = wasteWaterSavings.toLocaleString() + ' L';
        document.getElementById('energySavings').textContent = energySavings.toLocaleString() + ' kWh';
        // Calculate dynamic values
        const households = Math.round(waterSavings / 180); // 180L per month per household
        const flushes = Math.round(wasteWaterSavings / 6); // 6L per flush
        const teslaDistance = Math.round(energySavings * 6); // 6km per kWh
        // Update the dynamic fields
        document.getElementById('households').textContent = households.toLocaleString();
        document.getElementById('flushes').textContent = flushes.toLocaleString();
        document.getElementById('teslaDistance').textContent = teslaDistance.toLocaleString();
        // Hide the form and display the results
        document.getElementById('cleaningForm').style.display = 'none';
        document.getElementById('pdfContent').style.display = 'block';
        document.getElementById('pdfContentContainer').style.display = 'block';
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      });
      // Function to download the PDF
      function downloadPDF() {
        const downloadPdfContentBtn = document.getElementById('downloadPdfContent');
        downloadPdfContentBtn.innerHTML = "Generating...";
        downloadPdfContentBtn.disabled = true;
        downloadPdfContentBtn.style.opacity = 0.5;
        const element = document.getElementById('pdfContent');
        const opt = {
            margin: 1,
            filename: 'sustainability_impact_report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };
        html2pdf().set(opt).from(element).save().then(() => {
          // Reset the button after the PDF is generated
          downloadPdfContentBtn.innerHTML = "Download Report";
          downloadPdfContentBtn.disabled = false;
          downloadPdfContentBtn.style.opacity = 1;
        });
}
  // Event listener for the "Download Report" button
  document.getElementById('downloadPdfContent').addEventListener('click', downloadPDF);
</script>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
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
