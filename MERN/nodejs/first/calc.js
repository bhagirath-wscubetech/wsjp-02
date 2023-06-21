function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(x, y) {
    return x / y
}


export default add; // default
export { sub, mul, div } // named

// "type": "module" // import and export
// "type":"commonjs" // default -> require and module.exports