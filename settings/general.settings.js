//Keycloak configuration to use Keycloak as identity provider for single sign-on.
export const keycloak //= undefined;
= Keycloak({
   // url: 'https://gateway.datamanager.kit.edu:8443/',
    url: 'http://localhost:8080/auth/',
    realm: 'myrealm',
    clientId: 'keycloak-angular'
});

//Show the input for the backend service URL. This property should only be enabled for debugging.
export const showServiceUrl = false;

//The max. number of elements obtained in a single search request.
export const page_size = 5;

export const test=false;
