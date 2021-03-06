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
  'welcomeMessage': 'Type: "help", then press Enter, for available commands',
  'availableCommandsMessage': [
    'How to Use Commands:',
    '=======================================',
    'Type: "nick -a", then press Enter',
    '',
    '"nick" is the command you\'re invoking; "-a" is an option that sends specific instructions to the "nick" command.',
    '',
    '',
    'Available Commands and Their Options:',
    '======================================='
  ],
  'shortDesc': 'a Computer Science student at Georgia Tech who is eager to learn about new technologies and best practices',

  'acceptsNoArgsWarning': ' doesn\'t accept any arguments.',
  'argNotRecognizedWarning': ' isn\'t recognized or supported by: ',
  'commandNotFound': 'Command not found: ',

  'email': 'nchaloult3@gatech.edu',
  'github': 'https://www.github.com/nchaloult',
  'linkedin': 'https://www.linkedin.com/in/nicholas-chaloult',
  'fullName': 'Nicholas Paul Chaloult',
  'resumeResponse': 'Click to view resume',
  'version': '22',

  'resumeFileName': 'cv.pdf',
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
   * This must be handled here because these programs have unusual behavior,
   * and are handled separately from other commands in Shell's
   * getStatementsArrayForCommand helper func.
   */
  'clear': 'clear' + constants.acceptsNoArgsWarning,
  'help': 'help' + constants.acceptsNoArgsWarning,
  'fortune': 'fortune' + constants.acceptsNoArgsWarning,

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
  'whoami': 'guest'
};

export { constants, programs };
