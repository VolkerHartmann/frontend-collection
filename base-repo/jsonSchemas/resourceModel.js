let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
        "Agent": {
            "type": "object",
            "properties": {
                "affiliations": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "familyName": {
                    "type": "string"
                },
                "givenName": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                }
            }
        },
        "IDENTIFIER_TYPE": {
            "type": "string",
            "enum": ["ARK", "AR_XIV", "BIBCODE", "DOI", "EAN_13", "EISSN", "HANDLE", "IGSN", "ISBN", "ISSN", "ISTC", "LISSN", "LSID", "PMID", "PURL", "UPC", "URL", "URN", "W_3_ID", "INTERNAL", "OTHER"]
        },
        "Point": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "latitude": {
                    "type": "number"
                },
                "longitude": {
                    "type": "number"
                }
            }
        },
        "Scheme": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "schemeId": {
                    "type": "string"
                },
                "schemeUri": {
                    "type": "string"
                }
            }
        }
    },
    "type": "object",
    "properties": {
         "acls": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "permission": {
                        "type": "string",
                        "enum": ["NONE", "READ", "WRITE", "ADMINISTRATE"]
                    },
                    "sid": {
                        "type": "string"
                    }
                }
            }
        },
        "alternateIdentifiers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "identifierType": {
                        "$ref": "#/$defs/IDENTIFIER_TYPE"
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },
        "contributors": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "contributionType": {
                        "type": "string",
                        "enum": ["CONTACT_PERSON", "DATA_COLLECTOR", "DATA_CURATOR", "DATA_MANAGER", "DISTRIBUTOR", "EDITOR", "HOSTING_INSTITUTION", "OTHER", "PRODUCER", "PROJECT_LEADER", "PROJECT_MANAGER", "PROJECT_MEMBER", "REGISTRATION_AGENCY", "REGISTRATION_AUTHORITY", "RELATED_PERSON", "RESEARCH_GROUP", "RIGHTS_HOLDER", "RESEARCHER", "SPONSOR", "SUPERVISOR", "WORK_PACKAGE_LEADER"]
                    },
                    "id": {
                        "type": "integer"
                    },
                    "user": {
                        "$ref": "#/$defs/Agent"
                    }
                }
            }
        },
        "creators": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/Agent"
            }
        },
        "dates": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "type": {
                        "type": "string",
                        "enum": ["ACCEPTED", "AVAILABLE", "COLLECTED", "COPYRIGHTED", "CREATED", "ISSUED", "SUBMITTED", "UPDATED", "VALID", "REVOKED"]
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },
        "descriptions": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "description": {
                        "type": "string"
                    },
                    "id": {
                        "type": "integer"
                    },
                    "lang": {
                        "type": "string"
                    },
                    "type": {
                        "type": "string",
                        "enum": ["ABSTRACT", "METHODS", "SERIES_INFORMATION", "TABLE_OF_CONTENTS", "TECHNICAL_INFO", "OTHER"]
                    }
                }
            }
        },
        "embargoDate": {
            "type": "string"
        },
        "formats": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "fundingReferences": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "awardNumber": {
                        "$ref": "#/$defs/Scheme"
                    },
                    "awardTitle": {
                        "type": "string"
                    },
                    "awardUri": {
                        "type": "string"
                    },
                    "funderIdentifier": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "identifierType": {
                                "$ref": "#/$defs/IDENTIFIER_TYPE"
                            },
                            "type": {
                                "type": "string",
                                "enum": ["ISNI", "GRID", "CROSSREF_FUNDER_ID", "OTHER"]
                            },
                            "value": {
                                "type": "string"
                            }
                        }
                    },
                    "funderName": {
                        "type": "string"
                    },
                    "id": {
                        "type": "integer"
                    }
                }
            }
        },
        "geoLocationsAsString": {
            "type": "string"
        },
        "geoLocations": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "box": {
                        "type": "object",
                        "properties": {
                            "eastLongitude": {
                                "type": "number"
                            },
                            "id": {
                                "type": "integer"
                            },
                            "northLatitude": {
                                "type": "number"
                            },
                            "southLatitude": {
                                "type": "number"
                            },
                            "westLongitude": {
                                "type": "number"
                            }
                        }
                    },
                    "id": {
                        "type": "integer"
                    },
                    "place": {
                        "type": "string"
                    },
                    "point": {
                        "$ref": "#/$defs/Point"
                    },
                    "polygon": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "points": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/$defs/Point"
                                }
                            }
                        }
                    }
                }
            }
        },
        "id": {
            "type": "string"
        },
        "identifier": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "identifierType": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                }
            }
        },
        "language": {
            "type": "string"
        },
        "lastUpdate": {
            "type": "string"
        },
        "publicationYear": {
            "type": "string"
        },
        "publisher": {
            "type": "string"
        },
        "relatedIdentifiers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "identifierType": {
                        "$ref": "#/$defs/IDENTIFIER_TYPE"
                    },
                    "relatedMetadataScheme": {
                        "type": "string"
                    },
                    "relationType": {
                        "type": "string",
                        "enum": ["IS_CITED_BY", "CITES", "IS_SUPPLEMENT_TO", "IS_SUPPLEMENTED_BY", "IS_CONTINUED_BY", "CONTINUES", "IS_NEW_VERSION_OF", "IS_PREVIOUS_VERSION_OF", "IS_PART_OF", "HAS_PART", "IS_REFERENCED_BY", "REFERENCES", "IS_DOCUMENTED_BY", "DOCUMENTS", "IS_COMPILED_BY", "COMPILES", "IS_VARIANT_FORM_OF", "IS_ORIGINAL_FORM_OF", "IS_IDENTICAL_TO", "HAS_METADATA", "IS_METADATA_FOR", "REVIEWS", "IS_REVIEWED_BY", "IS_DERIVED_FROM", "IS_SOURCE_OF"]
                    },
                    "scheme": {
                        "$ref": "#/$defs/Scheme"
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },
        "resourceType": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "typeGeneral": {
                    "type": "string",
                    "enum": ["AUDIOVISUAL", "COLLECTION", "DATASET", "EVENT", "IMAGE", "INTERACTIVE_RESOURCE", "MODEL", "PHYSICAL_OBJECT", "SERVICE", "SOFTWARE", "SOUND", "TEXT", "WORKFLOW", "OTHER"]
                },
                "value": {
                    "type": "string"
                }
            }
        },
        "rights": {
            "type": "array",
            "items": {
                "$ref": "#/$defs/Scheme"
            }
        },
        "sizes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "state": {
            "type": "string",
            "enum": ["VOLATILE", "FIXED", "REVOKED", "GONE"]
        },
        "subjects": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "lang": {
                        "type": "string"
                    },
                    "scheme": {
                        "$ref": "#/$defs/Scheme"
                    },
                    "value": {
                        "type": "string"
                    },
                    "valueUri": {
                        "type": "string"
                    }
                }
            }
        },
        "titles": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "lang": {
                        "type": "string"
                    },
                    "titleType": {
                        "type": "string",
                        "enum": ["ALTERNATIVE_TITLE", "SUBTITLE", "TRANSLATED_TITLE", "OTHER"]
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },
        "version": {
            "type": "string"
        }
    }
};
