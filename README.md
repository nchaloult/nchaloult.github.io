# nchaloult.com

Nick Chaloult's personal page. Inspired by [shells](https://en.wikipedia.org/wiki/Unix_shell) and [man pages](https://en.wikipedia.org/wiki/Man_page). Built with React.

## "Commands"/"Programs"

All of the "programs" that the "shell" supports are declared in [src/utils/constantsAndCommands.js](src/utils/constantsAndCommands.js). Adding, removing, or changing the behavior of "programs", as well as the optional arguments that each "program" accepts, is done by editing the `programs` object.

Program names are keys in the `programs` object. If a program just prints text to the "shell," then that text is a String value associated with the program's key. If a program prints multiple lines to the "shell," an array containing each of those lines is the value associated with that program's key. If a program prints a URL to the "shell," then that URL is stored as a String value associated with the appropriate key -- the "shell" takes care of rendering URLs as hyperlinks on the page. If a program accepts arguments, then the value associated with that program's key is an object with the argument names as keys, and the output when those arguments are provided as String values. The `''` key in an object of arguments is home to the String, or array of Strings, that gets printed when no arguments are provided for that program.

Some "programs," like `clear` and `help`, have special behavior. Their logic is handled in the `getStatementsArrayForCommand` function in the `Shell` component.
