let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://www.example.org/schema/json",
    "type": "object",
    "properties": {
        "schemaId": {
            "type": "string",
            "title": "Schema Record Identifier"
        },
        "schemaVersion": {
            "type": "string",
            "title": "Schema Version"
        },
        "mimeType": {
            "type": "string",
            "title": "mime Type",
            "default": "application/json",
            "enum": ["application/json", "application/xml"]
        },
        "type": {
            "type": "string",
            "title": "Type",
            "default": "JSON",
            "enum": ["JSON", "XML"]
        },
        "createdAt": {
            "type": "datetime",
            "title": "Date Created"
        },
        "lastUpdate": {
            "type": "datetime",
            "title": "Date Updated"
        },
        "label": {
            "type": "string",
            "title": "Label"
        },
        "definition": {
            "type": "string",
            "title": "Definition"
        },
        "comment": {
            "type": "string",
            "title": "Comment"
        },
        "acl": {
            "type": "array",
            "title": "ACL",
            "items": {
                "type": "object",
                "properties": {
                    "sid": {
                        "type": "string",
                        "title": "sid",
                        "default": "SELF"
                    },
                    "permission": {
                        "type": "string",
                        "title": "Permission",
                        "default": "ADMINISTRATE",
                        "enum": ["NONE", "READ", "WRITE", "ADMINISTRATE"]
                    }
                }
            }
        },
        "schemaDocumentUri": {
            "type": "string",
            "title": "Schema Document Uri"
        },
        "fileSchema": {
            "type": "hidden",
            "title": "Schema Document"
        },
        "schemaHash": {
            "type": "string",
            "title": "Schema Hash"
        },
        "locked": {
            "type": "boolean",
            "default": "false",
            "title": "Locked"
        }
    }
}
