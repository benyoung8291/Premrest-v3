import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';

export const metadata: Metadata = {
  title: "Commercial Floor Installs |"
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
      <div class="projects-template-header background-color-primary">
        <div class="padding-global padding-section-large resources-template-padding-header">
          <div class="container-xlarge"></div>
        </div>
      </div>
      <div class="projects-content-section">
        <div class="padding-global padding-section-large padding-resources-template">
          <div class="container-large">
            <div class="grid-wrapper resources-template-container">
              <div id="w-node-_7ae0aa3d-10af-2d5e-3ce1-1d1209a1878d-b844425e" class="grid-column resources-template-image-container">
                <div class="resources-template-image-container"><img loading="lazy" src="/images/Hot-Black-Kraft-Heinz_6299-1000x1500.webp" alt="" class="projects-template-image w-dyn-bind-empty"><img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" class="home-resources-scribbles"><img loading="lazy" src="/images/Premrest_Patch_Cream.svg" alt="" class="home-resources-patch"></div>
              </div>
              <div class="grid-column resources-template-title-container">
                <div class="resources-template-header-container">
                  <h2 class="projects-template-heading w-dyn-bind-empty"></h2>
                  <p class="projects-template-subheading w-dyn-bind-empty"></p>
                  <div id="w-node-_9b316354-22ae-e635-1a64-e9c7fb162573-b844425e" class="project-authors">
                    <div class="w-dyn-list">
                      <div role="list" class="projects-author-wrapper w-dyn-items">
                        <div role="listitem" class="w-dyn-item">
                          <div class="projects-author-container"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" alt="" class="resources-author-image w-dyn-bind-empty">
                            <div>
                              <h6 class="resources-author-name w-dyn-bind-empty"></h6>
                              <h6 class="resources-author-title w-dyn-bind-empty"></h6>
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
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-column resources-content-container">
                  <div class="grid-column w-dyn-bind-empty w-richtext"></div>
                </div>
                <div id="w-node-d142d38d-c8d7-2a8d-9828-23150082eda7-b844425e" class="grid-column grid-padding-top">
                  <div class="project-slider-wrapper">
                    <div data-delay="4000" data-animation="slide" class="project-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" id="MultiImageSlider">
                      <div class="w-slider-mask">
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                        <div class="slide-4 w-slide"></div>
                      </div>
                      <div class="w-slider-arrow-left">
                        <div class="w-icon-slider-left"></div>
                      </div>
                      <div class="w-slider-arrow-right">
                        <div class="w-icon-slider-right"></div>
                      </div>
                      <div class="projects-slider-nav w-slider-nav w-round"></div>
                    </div>
                  </div>
                  <div id="MultiImageCollectionWrapper" class="project-collection-wrapper w-dyn-list">
                    <div role="list" class="project-slider-collection w-dyn-items">
                      <div role="listitem" class="project-slider-image w-dyn-item"></div>
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
      
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script><!--  Google Tag Manager (noscript)  -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57VKP3XQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!--  End Google Tag Manager (noscript)  -->
  <script>
(function () {
    var sliderId = 'MultiImageSlider';
    var collectionListWrapperId = 'MultiImageCollectionWrapper';
    var slideClass = 'w-slide';
    var leftArrowClass = 'w-slider-arrow-left';
    var rightArrowClass = 'w-slider-arrow-right';
    var slideNavClass = 'w-slider-nav';
    var collectionItemClass = 'w-dyn-item';
    var $slider = $('#' + sliderId);
    var $slides = $slider.find('.' + slideClass);
    var $collectionWrapper = $('#' + collectionListWrapperId);
    var $images = $collectionWrapper.find('.' + collectionItemClass);
    if ($slider && $collectionWrapper) {
        $slider.css('opacity', 0);
        if (!$images || !$images.length) {
            $slider.remove();
        }
        else {
            var imgCount = $images.length;
            var slideCount = $slides.length;
            if (imgCount > slideCount) imgCount = slideCount;
            for (var i = 0; i < imgCount; i++) {
                $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
            }
            for (var i = slideCount; i > imgCount; i--) {
                $slides[i - 1].remove();
            }
            if (imgCount < 2) {
                $slider.find('.' + leftArrowClass + ', .' + rightArrowClass + ', .' + slideNavClass).remove();
            }
            $slider.css('opacity', 1);
        }
        $collectionWrapper.remove();
    }   
})();
</script>

`;

export default function Page() {
  return (
    <WebflowPage bodyClass="" >
      <WebflowHtml html={bodyHtml} />
    </WebflowPage>
  );
}
