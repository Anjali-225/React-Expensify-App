console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

//export default (a, b) => a - b;

//every file can have its own EXPORTS - default exports - named exports

//NAMED EXPORTS
//export { square, add };

//DEFAULT EXPORTS can not have more than one
//export { square, add, subtract as default};
