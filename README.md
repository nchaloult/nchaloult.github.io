# nchaloult.com

Nick Chaloult's personal page. Inspired by [shells](https://en.wikipedia.org/wiki/Unix_shell) and [man pages](https://en.wikipedia.org/wiki/Man_page). Built with React.

## "Commands"/"Programs"

All of the "programs" that the "shell" supports are declared in [src/utils/constantsAndCommands.js](src/utils/constantsAndCommands.js). Adding, removing, or changing the behavior of "programs", as well as the options that each "program" can accept, is done by editing the `programs` object.

### Implementation Details

* Program names are keys in the `programs` object
* Program behavior is determined by the value of that program's key
    * If a program just prints text to the "shell," then that program's value is the string that gets printed
        * If a program prints multiple lines to the "shell," then that program's value is an array of strings
        * If a program prints a URL, that URL is stored as a string. The "shell" takes care of rendering URLs as hyperlinks on the page
    * If a program accepts options, that program's value is a nested object with the options (as they are typed -- ex: "-a") as keys, and those options' behaviors as values
        * The `''` key in an object of options is home to the program's behavior when no options are provided

### Special Program

Some "programs," like `clear` and `help`, have special behavior. Their logic is handled in the `getStatementsArrayForCommand` function in the `Shell` component.
