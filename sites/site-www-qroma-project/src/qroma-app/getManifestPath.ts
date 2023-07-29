import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export const getManifestPath = (): string => {
  const {siteConfig} = useDocusaurusContext();
  const manifestPath = siteConfig.baseUrl + 'qroma/versions/0.1.0/firmware/manifest-firmware.json'
  return manifestPath;
}