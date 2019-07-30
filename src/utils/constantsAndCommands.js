/*
 * A singular home for strings and arrays that are repeated throughout the site.
 *
 * Contains things like:
 *   - Shell prompt text
 *   - Initial state of the contents of the shell (welcome message)
 *   - Pieces of warning messages
 */
const constants = {
  'prompt': 'guest@nchaloult.com:~$',
  'welcomeMessage': 'Type "help" for available commands',
  'availableCommandsMessage': [
    'Available commands and their arguments:',
    '======================================='
  ],
  'shortDesc': 'a Computer Science student at Georgia Tech who is eager to learn and is proud of their work',

  'acceptsNoArgsWarning': ' doesn\'t accept any arguments.',
  'argNotRecognizedWarning': ' isn\'t recognized or supported by: ',
  'commandNotFound': 'Command not found: ',

  'email': 'nchaloult3@gatech.edu',
  'github': 'https://www.github.com/nchaloult',
  'linkedin': 'https://www.linkedin.com/in/nicholas-chaloult',
  'fullName': 'Nicholas Paul Chaloult',
  'resumeResponse': 'Click to view resume',
  'version': 'v20-SNAPSHOT (20 years old)'
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
  /*
   * If either of these are hit, then arguments were provided with these programs.
   *
   * This must be handled here because the "clear" and "help" programs have unusual
   * behavior, and are handled separately from other commands in Shell's
   * getStatementsArrayForCommand helper func.
   */
  'clear': 'clear' + constants.acceptsNoArgsWarning,
  'help': 'help' + constants.acceptsNoArgsWarning,

  'nick': {
    '': 'Provide some arguments, like: -v',
    '-a': [constants.fullName, constants.email, constants.github, constants.resumeResponse],
    '--all': [constants.fullName, constants.email, constants.github, constants.resumeResponse],
    '-e': constants.email,
    '--email': constants.email,
    '-g': constants.github,
    '--github': constants.github,
    '-l': constants.linkedin,
    '--linkedin': constants.linkedin,
    '-n': constants.fullName,
    '--name': constants.fullName,
    '-r': constants.resumeResponse,
    '--resume': constants.resumeResponse,
    '-v': constants.version,
    '--version': constants.version
  },
  'whoami': constants.fullName + ": " + constants.shortDesc
};

export { constants, programs };
