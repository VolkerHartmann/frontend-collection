let uiDefinitionCreate= {
    "type": "fieldset",
    "items": [
        "schemaId",
        "mimeType",
        "type",
        {
            "type": "array",
            "title": "ACL",
            "htmlClass": "acl",
            "items": [
                "acl[]"
            ]
        },
        "locked",
        {
            "key": "fileSchema",
            "type": "file"
        }
    ]
}

