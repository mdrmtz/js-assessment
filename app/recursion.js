if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var listFiles = [];
      var dirs = [];

      parse(data);

      function parse(directory) {
        var file,
            files = directory.files;

        dirs.push( directory.dir );

        for (var i = 0; i < files.length; i++) {
            file = files[i];
            if (typeof file === 'string') {
                if (!dirName || dirs.indexOf(dirName) > -1) {
                    listFiles.push(file);
                }
            } else {
                parse(file);
            }
        }

        dirs.pop();
      }

      return listFiles;
    },

    permute: function(inputArr) {
    // http://stackoverflow.com/a/11509565/54468
    var results = [];

      function permute(arr, memo) {
        var cur;

        for (var i = 0; i < arr.length; i++) {
          memo = memo || [];
          cur = arr.splice(i, 1);
          if (arr.length === 0) {
            results.push(memo.concat(cur));
          }
          permute(arr.slice(), memo.concat(cur));
          arr.splice(i, 0, cur[0]);
        }

        return results;
      }

      return permute(inputArr);
    },

    fibonacci: function(n) {
        function fib(n) {
           if (n <= 1)
              return n;
           return fib(n-1) + fib(n-2);
        }

        return fib(n);
    },

    validParentheses: function(n) {
        var validParentheses = [];
        
        brackets('', 0, 0, n);  
        
        function brackets(bracket, open, close, pairs)
        {
            if((open===pairs)&&(close===pairs))
            {
                validParentheses.push(bracket);
            }
            else
            {
                if(open<pairs){
                    brackets(bracket + '(', open+1, close, pairs);
                }
                if(close<open){
                    brackets(bracket + ')', open, close+1, pairs);
                }
            }
        }
       
        return validParentheses;

    }
  };
});
