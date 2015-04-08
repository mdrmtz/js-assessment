if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {
        var makeClosures = [];
        
        var makeFn = function(val) {
            return function() { return fn(val); };
        };

        for (var i = 0; i < arr.length; i++) {
            makeClosures.push( makeFn(arr[i]) );
        }
        return makeClosures;
    },

    partial : function(fn, str1, str2) {
        return function(arg) {
            return fn.call(null, str1, str2, arg);
        };
    },

    useArguments : function() {
        var useArguments = 0;
        for (var i = 0; i < arguments.length; i++) {
            useArguments = useArguments + arguments[i];
        }
        return useArguments;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, moreArgs);
        };
    },

    curryIt : function(fn) {
        function applyArguments(fn, args) {
            return fn.apply(null, args);
        }
        function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
            return function (currentArgument) {
                accumulatedArguments.push(currentArgument);

                if (accumulatedArguments.length === expectedArgumentsCount) {
                    return applyArguments(fn, accumulatedArguments);
                } else {
                    return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
                }
            };
        }

        return getArgumentAccumulator([], fn.length);
    }
  };
});
