/ Q7. You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count the number of occurrences of the word “the”
// in given string.


        var strin = "The quick brown fox jumps over the lazy dog";
            var strin = strin.toLowerCase();
            var count = strin.match(/the/g);

            document.write("There are "+count.length+" occurrence(s) of word 'the' <br>");



