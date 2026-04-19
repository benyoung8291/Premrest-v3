import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';
import { PodcastLatestEpisode, PodcastEpisodesGrid } from '@/components/cms/PodcastSeries';

export const metadata: Metadata = {
  title: "Let's Talk Facilities",
  openGraph: {
    title: "Let's Talk Facilities"
  },
  twitter: {
    title: "Let's Talk Facilities"
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
      <div class="ltf-section-hero-new">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper resources-grid-wrapper">
              <div class="grid-2-columns ltf-section">
                <div class="grid-column">
                  <div class="ltf-logo-container"><img style="opacity:0" data-w-id="e48aabcd-974b-a630-6215-0d3f07e75c3f" alt="" src="/images/premrest_lets-lts.svg" loading="lazy" class="letstalkfacilities-lets-logo"><img style="opacity:0" data-w-id="e48aabcd-974b-a630-6215-0d3f07e75c40" alt="" src="/images/premrest_talk-lts.svg" loading="lazy" class="letstalkfacilities-talk-logo"><img style="opacity:0" data-w-id="e48aabcd-974b-a630-6215-0d3f07e75c41" alt="" src="/images/premrest_facilities-ltf.svg" loading="lazy" class="letstalkfacilities-facilities-logo"></div>
                  <p class="letstalkfacilities-section-text-new">‍<strong class="bold-text">Subscribe to the Let's Talk Facilities podcast.</strong></p>
                  <div class="podcast-logos">
                    <a href="https://podcasts.apple.com/us/podcast/lets-talk-facilities/id1794530719" target="_blank" class="podcast-link w-inline-block"><img sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Apple-p-500.webp 500w, images/Apple-p-800.webp 800w, images/Apple-p-1080.webp 1080w, images/Apple-p-1600.webp 1600w, images/Apple.webp 2000w" alt="" src="/images/Apple.webp" loading="lazy" class="podcast-logo"></a>
                    <a href="https://www.youtube.com/@premrest" target="_blank" class="podcast-link w-inline-block"><img sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/YouTube-p-500.webp 500w, images/YouTube-p-800.webp 800w, images/YouTube-p-1080.webp 1080w, images/YouTube-p-1600.webp 1600w, images/YouTube.webp 2000w" alt="" src="/images/YouTube.webp" loading="lazy" class="podcast-logo"></a>
                    <a href="https://open.spotify.com/show/7bO9C0xjbrc5sYduBnJHHv?si=7c0c7e6877154f3e" target="_blank" class="podcast-link w-inline-block"><img sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Spotify-p-500.webp 500w, images/Spotify-p-800.webp 800w, images/Spotify-p-1080.webp 1080w, images/Spotify-p-1600.webp 1600w, images/Spotify.webp 2000w" alt="" src="/images/Spotify.webp" loading="lazy" class="podcast-logo"></a>
                    <a href="https://youtube.com/playlist?list=PLMLI27bMPtHrw4TgptEyP8nRlmCutCFUS&amp;si=2_NXJlnmYkGmK0BB" target="_blank" class="podcast-link w-inline-block"><img sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/YT-Music-p-500.webp 500w, images/YT-Music-p-800.webp 800w, images/YT-Music-p-1080.webp 1080w, images/YT-Music-p-1600.webp 1600w, images/YT-Music.webp 2000w" alt="" src="/images/YT-Music.webp" loading="lazy" class="podcast-logo"></a>
                  </div>
                </div>
                <div id="w-node-e48aabcd-974b-a630-6215-0d3f07e75c58-5e3a4737" class="grid-column grid-column-2-inverse"><img sizes="(max-width: 2000px) 100vw, 2000px" srcset="/images/Premrest_LTF_Hero_Blob-p-500.webp 500w, images/Premrest_LTF_Hero_Blob-p-800.webp 800w, images/Premrest_LTF_Hero_Blob-p-1080.webp 1080w, images/Premrest_LTF_Hero_Blob-p-1600.webp 1600w, images/Premrest_LTF_Hero_Blob.webp 2000w" alt="" src="/images/Premrest_LTF_Hero_Blob.webp" loading="lazy"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltf-section-latestepisode">
        <div class="padding-global padding-section-large padding-section-large-bottom">
          <div class="container-large">
            <!--SANITY:ltfLatest-->
          </div>
        </div>
      </div>
      <div class="ltf-section-podcasts">
        <div class="padding-global padding-section-large">
          <div class="container-large">
            <div class="grid-wrapper">
              <div class="grid-1-column">
                <div class="grid-wrapper">
                  <!--SANITY:ltfEpisodes-->
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
    ltfLatest: (
      <PodcastLatestEpisode
        tagSlug="lets-talk-facilities"
        headlineClass="ltf-latestepisode-headline"
        textClass="ltf-latestepisode-text"
      />
    ),
    ltfEpisodes: <PodcastEpisodesGrid tagSlug="lets-talk-facilities" />,
  };

  return (
    <WebflowPage bodyClass="" >
      <WebflowHtml html={bodyHtml} slots={slots} />
    </WebflowPage>
  );
}
