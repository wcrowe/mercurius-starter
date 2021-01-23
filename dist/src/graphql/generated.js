"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newNotificationDocument = exports.createNotificationDocument = exports.dogsDocument = exports.multiplyDocument = exports.addDocument = exports.helloDocument = exports.role = void 0;
var role;
(function (role) {
    role["ADMIN"] = "ADMIN";
    role["USER"] = "USER";
})(role = exports.role || (exports.role = {}));
exports.helloDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "hello" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [{ kind: "Field", name: { kind: "Name", value: "Hello" } }],
            },
        },
    ],
};
exports.addDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "add" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "x" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                    },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "y" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "add" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "x" },
                                value: { kind: "Variable", name: { kind: "Name", value: "x" } },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "y" },
                                value: { kind: "Variable", name: { kind: "Name", value: "y" } },
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
exports.multiplyDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "multiply" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "x" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                    },
                },
                {
                    kind: "VariableDefinition",
                    variable: { kind: "Variable", name: { kind: "Name", value: "y" } },
                    type: {
                        kind: "NonNullType",
                        type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "add" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "x" },
                                value: { kind: "Variable", name: { kind: "Name", value: "x" } },
                            },
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "y" },
                                value: { kind: "Variable", name: { kind: "Name", value: "y" } },
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
exports.dogsDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "dogs" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "dogs" },
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                                { kind: "Field", name: { kind: "Name", value: "name" } },
                                { kind: "Field", name: { kind: "Name", value: "coat" } },
                                {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "firstname" },
                                            },
                                            {
                                                kind: "Field",
                                                name: { kind: "Name", value: "lastname" },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};
exports.createNotificationDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "createNotification" },
            variableDefinitions: [
                {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: { kind: "Name", value: "message" },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    {
                        kind: "Field",
                        name: { kind: "Name", value: "createNotification" },
                        arguments: [
                            {
                                kind: "Argument",
                                name: { kind: "Name", value: "message" },
                                value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "message" },
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
exports.newNotificationDocument = {
    kind: "Document",
    definitions: [
        {
            kind: "OperationDefinition",
            operation: "subscription",
            name: { kind: "Name", value: "newNotification" },
            selectionSet: {
                kind: "SelectionSet",
                selections: [
                    { kind: "Field", name: { kind: "Name", value: "newNotification" } },
                ],
            },
        },
    ],
};
//# sourceMappingURL=generated.js.map