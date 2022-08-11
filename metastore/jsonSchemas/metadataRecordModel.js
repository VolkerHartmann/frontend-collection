let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://www.example.org/schema/json",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "title": "Identifier"
        },
        "relatedResource": {
            "type": "object",
            "title": "Related Resource",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "Identifier",
                    "required": true
                },
                "identifierType": {
                    "type": "string",
                    "title": "Identifier Type",
                    "enum": ["URL", "INTERNAL"],
                    "required": true
                }
            },
            "required": ["identifier", "identifierType"]
        },
        "schema": {
            "type": "object",
            "title": "Schema",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "Identifier"
                },
                "identifierType": {
                    "type": "string",
                    "enum": ["URL", "INTERNAL"],
                    "default":"INTERNAL",
                    "title": "Identifier Type"
                }
            },
            "required": ["identifier", "identifierType"]
        },
        "schemaVersion": {
            "type": "integer",
            "title": "Schema Version"
        },
        "createdAt": {
            "type": "string",
            "title": "Date Created"
        },
        "lastUpdate": {
            "type": "string",
            "title": "Date Updated"
        },
        "recordVersion": {
            "type": "integer",
            "title": "Record Version"
        },
        "acl": {
            "type": "array",
            "title": "ACL",
            "items": {
                "type": "object",
                "properties": {
                    "sid": {
                        "type": "string",
                        "title": "Sid",
                        "default": "SELF"
                    },
                    "permission": {
                        "type": "string",
                        "title": "Permission",
                        "default": "ADMINISTRATE",
                        "enum": ["READ", "WRITE", "ADMINISTRATE", "NONE"]
                    }
                }
            }
        },
        "metadataDocumentUri": {
            "type": "string",
            "title": "Metadata Document URI"
        },
        "documentHash": {
            "type": "string",
            "title": "Document Hash"
        },
        "metadataDocument": {
        "type": "string",
        "title": "Metadata Document File"
    }
    }
};
