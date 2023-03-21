export let ajaxBaseUrl = "https://metarepo.nffa.eu/api/v1/metadata/";
export const keycloak = Keycloak({
    url: 'https://auth.nffa.eu/auth',
    realm: 'NEP',
    clientId: 'metastore'
});

export const showServiceUrl = false;
export const page_size = 5;

export const appDescription = {
    "app-logo":"./images/NFFA_EU.png",
    "app-title":"MetaStore Frontend for NFFA EU Pilot",
    "app-subtitle":"Metadata Search"
};




