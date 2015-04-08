if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        if (Array.prototype.indexOf) { 
            return arr.indexOf(item);
        }
    },

    sum : function(arr) {
        var sum = 0;
        
        for (var i = arr.length - 1; i >= 0; i--) {
            sum = sum + arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var remove  = [];
        for (var i = 0; i < arr.length; i++) {
            if( arr[i] !== item ){
                remove.push(arr[i]);
            }
        }
        return remove;
    },

    removeWithoutCopy : function(arr, item) {

        for (var i = 0, len = arr.length; i < len; i++) {
            if( arr[i] === item ){
               arr.splice(i, 1);
                i = i - 1;
                len = len - 1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
         arr.push(item);
         return arr;
    },

    truncate : function(arr) {
         arr.pop();
         return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift(arr);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count=0;
        for (var i = arr.length - 1; i >= 0; i--) {
             if(arr[i]===item){
                count=count+1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var obj = {},
            duplicates = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
        }

      for (var property in obj) {
        if (obj.hasOwnProperty(property) && obj[property] > 1) {
          duplicates.push(property);
        }
      }

      return duplicates;
        
    },

    square : function(arr) {
        var square = [];
        for (var i = 0; i < arr.length; i++) {
            square.push ( arr[i] * arr[i]);
        }
        return square;
    },

    findAllOccurrences : function(arr, target) {
        var findAllOccurrences = [];
        for (var i = arr.length - 1; i >= 0; i--) {
             if( arr[i]===target){
                findAllOccurrences.push(i);
             }
        }
        return findAllOccurrences;
    }
  };
});
