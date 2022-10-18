export let ajaxBaseUrl = "https://nfdi4ing.datamanager.kit.edu/api/v1/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'nfdi4ing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = false;

export const appDescription = {
    "app-logo":"./images/NFFA_EU_Pilot.png",
    "app-title":"MetaStore Frontend for NFFA EU Pilot",
    "app-subtitle":"Schema and Metadata Management"
};


