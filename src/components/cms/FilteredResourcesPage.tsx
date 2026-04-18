import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { ResourceCards, type ResourceCard } from './ResourceCards';

export function FilteredResourcesPage({
  heading,
  resources,
}: {
  heading: string;
  resources: ResourceCard[];
}) {
  return (
    <WebflowPage bodyClass="">
      <div className="page-wrapper">
        <div className="main-wrapper">
          <div className="global-section-header background-color-primary">
            <div className="padding-global padding-section-large padding-section-header">
              <div className="container-xlarge">
                <div className="grid-wrapper">
                  <div className="grid-1-column">
                    <div className="grid-column">
                      <h1 className="heading-style-h2 header-heading">{heading}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resources-section">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="grid-wrapper">
                  <ResourceCards
                    resources={resources}
                    emptyMessage="No resources in this collection yet."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebflowPage>
  );
}
