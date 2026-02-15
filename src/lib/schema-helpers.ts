import { SITE_CONFIG } from '@/lib/constants';

export function getOrganizationAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: `${SITE_CONFIG.address.street} ${SITE_CONFIG.address.suite}`.trim(),
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.zip,
    addressCountry: 'US',
  };
}

// Keep this consistent across schemas to avoid "missing name/address/telephone/url" audit flags.
export function getRoofingContractorIdentity() {
  return {
    '@type': 'RoofingContractor',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    address: getOrganizationAddress(),
  };
}

