//////////////////////////////////////////////
const identity = function (value) {
  return value;
};

//////////////////////////////////////////////
const first = function (array, n) {

  if (n === undefined) {

    return array[0];
  
  }

  return array.slice(0, n)

};

//////////////////////////////////////////////
const last = function (array, n) {

  if (n === undefined) {
    return array.pop(); 
  }

  if (n > array.length) {
    return array;
  }

  if (n === 0) {
    return [];
  }

  return array.slice(n - 1, array.length)

};

////////////////////////////////////////////////
const each = function (collection, callback) {

  if (collection instanceof Array) {

    for (i = 0; i < collection.length; i++)
    
      callback(collection[i], i, collection);
  
  } else {

    for (const animal in collection) {

      callback(collection[animal], animal, collection);
  
    }
  }
};

////////////////////////////////////////////////
const indexOf = function (array, target) {

  return array.findIndex((el) => el === target);

};

//////////////////////////////////////////////////
const map = function (collection, iterator) {

  return collection.map((el) => iterator(el));

};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
