const camelize = (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => letter.toUpperCase()).replace(/\s+/g, '');

module.exports = { camelize };