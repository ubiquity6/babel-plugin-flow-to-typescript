"use strict";
const plugin_1 = require("./plugin");
const import_declaration_1 = require("./visitors/import_declaration");
const opaque_type_1 = require("./visitors/opaque_type");
const type_annotation_1 = require("./visitors/type_annotation");
const type_cast_expression_1 = require("./visitors/type_cast_expression");
const type_parameter_declaration_1 = require("./visitors/type_parameter_declaration");
module.exports = plugin_1.buildPlugin([
    type_annotation_1.TypeAnnotation,
    type_annotation_1.TypeAlias,
    type_parameter_declaration_1.TypeParameterDeclaration,
    import_declaration_1.ImportDeclaration,
    import_declaration_1.ImportSpecifier,
    type_cast_expression_1.TypeCastExpression,
    opaque_type_1.OpaqueType
]);
//# sourceMappingURL=index.js.map