"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_type_annotation_1 = require("../converters/convert_type_annotation");
function TypeAnnotation(path) {
    path.replaceWith(convert_type_annotation_1.convertTypeAnnotation(path));
}
exports.TypeAnnotation = TypeAnnotation;
function TypeAlias(path) {
    path.replaceWith(convert_type_annotation_1.convertTypeAlias(path));
}
exports.TypeAlias = TypeAlias;
//# sourceMappingURL=type_annotation.js.map