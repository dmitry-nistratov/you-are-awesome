// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (attrName) => attrName;

const createNotEnumerableProperty = (attrName) => {
    Object.defineProperty(Object.prototype, attrName, {
        value: 'value',
        enumerable: false,
    });
    return attrName;
}

const createProtoMagicObject = () => {
    const magicObj = () => {};
    magicObj.prototype = magicObj.__proto__;
    return magicObj;
}

let i = 0;
const incrementor = () => {
    i++;
    return incrementor;
};
incrementor.toString = incrementor.valueOf = () => i;

let j = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
        j++;
        return resolve(j);
    });
}

function* createIncrementer() {
    let pos = 1;
    while(true)
        yield pos++;
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (arg) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arg);
        }, 1000);
    });
}

const getDeepPropertiesCount = (value) => {
    let sum = 0;
    (countProps = (obj) => {
        sum += Object.keys(obj).length;
        Object.keys(obj).forEach(k => {
            if (typeof obj[k] === 'object') {
                countProps(obj[k]);
            }
        });
    })(value);
    return sum;
}

const createSerializedObject = () => ({
    property: 'value',
    toJSON: () => 'object',
    toString: () => 'object',
})

const sortByProto = (obj) =>
obj.sort((left, right) => left.__proto__ - right.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
