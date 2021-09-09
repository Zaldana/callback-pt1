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

//One line solution
// const first = function (array, n) {

//   return n === undefined ? array[0] : array.slice(0, n);

// };

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
  
  //alternate and do not need n >array.length case
  // if (n) {
  //return array.slice(Math.max(0, array.length - n));
//}

};

//One line solution
//const last = function (array, n) {
// return n === undefined
//   ? array[array.length - 1]
//   : array.slice(Math.max(0, array.length - n));
// };

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

  let result = -1;
  let arr = [];

  each(array, function (item, index, collection){

    if (item === target) {

      arr.push(index);
      result = arr[0];
      return result
      
    } 
 
  })

  return result

};
  

//////////////////////////////////////////////////
const map = function (collection, iterator) {

  let newArray = [];

  each(collection, function (item, index, collectionArray) {

    let newItem = iterator(item);
    newArray.push(newItem);

  })

  return newArray;

};



module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
