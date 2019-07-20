/*
 * A singular home for strings and arrays that are repeated throughout the site.
 *
 * Contains things like:
 *   - Initial state of the contents of the shell (welcome message)
 *   - Pieces of warning messages
 */
const constants = {
  'welcomeMessage': ['nchaloult.sh - alpha v1.0', 'Type \'help\' for available commands'],
  'acceptsNoArgsWarning': ' doesn\'t accept any arguments.',
  'argNotRecognizedWarning': ' isn\'t recognized or supported by: ',
  'commandNotFound': 'Command not found: '
};

/*
 * A singular home for commands, and the arguments that they support.
 *
 * Program names are the keys in this object; program responses are values in
 * this object; if a program accepts arguments, those args and their responses
 * are defined in a nested object.
 *
 * - If a program or argument outputs multiple lines of text to the shell, then
 *   each line is stored here as a string in an array
 * - If a program accepts arguments, but none of them are mandatory, then the
 *   value associated with the '' key will be outputted to the shell.
 */
const programs = {
  'help': ['Help message', 'Include quick one-liner about yourself, and quick descriptions/explanations of all available commands.'],
  'testing': 'You typed: \'testing\'!',
  'accepts-args': {
    '': 'no args passed in',
    'one': 'one',
    'two': 'two'
  },
  /*
   * If this is hit, then arguments were provided with the "clear" program.
   *
   * This must be handled here because the "clear" program has unusual
   * behavior, and is handled separately from other commands in Shell's
   * getStatementsArrayForCommand helper func.
   */
  'clear': 'clear' + constants.acceptsNoArgsWarning
};

export { constants, programs };
