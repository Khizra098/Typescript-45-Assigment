"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { Colour: 'Black' }, { features: ['navigation', 'Power window'] });
console.log(answer);
