export let ajaxBaseUrl = "https://nfdi4ing.datamanager.kit.edu/metastore/api/v1/metadata/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'nfdi4ing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = false;
export const page_size = 5;

export const appDescription = {
    "app-logo":"./images/nfdi4ing.svg",
    "app-title":"MetaStore Frontend for NFDI4Ing",
    "app-subtitle":"Metadata Search"
};