"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accessKeyId = 'LTAIEJ9h3PXQA2qk';
exports.accessKeyId = accessKeyId;
var secretAccessKey = 'UM6yx0sLnl5iADg7qEwxs4mjKSrBis';
exports.secretAccessKey = secretAccessKey;
var appServerUrl;
exports.appServerUrl = appServerUrl;
if (process.env.NODE_ENV == 'development') {
    exports.appServerUrl = appServerUrl = 'http://192.168.1.102';
}
else {
    exports.appServerUrl = appServerUrl = 'http://admin.gxyingken.com';
}
