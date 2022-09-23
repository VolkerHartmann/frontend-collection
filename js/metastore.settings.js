export let ajaxBaseUrl = "https://nfdi4ing.datamanager.kit.edu/api/v1/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'nfdi4ing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = false;

export const appDescription = {
    "app-logo":"./images/nfdi4ing.svg",
    "app-title":"MetaStore Frontend for NFDI4Ing",
    "app-subtitle":"Schema and Metadata Management"
};


