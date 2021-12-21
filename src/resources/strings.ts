export const command = {
  name: 'nick',
  interests:
    'Rust, consensus algorithms, distributed systems, and free and open-source software',
};

export const manPage = {
  // Man page section (1 through 8. Run `$ man man` to read more)
  sectionNumber: 1,
  fullName: 'Nicholas Chaloult',
  shortDesc:
    'a Computer Science graduate from Georgia Tech who is eager to learn about new technologies and best practices',
  desc: `enjoys discovering better ways to write maintainable software. Currently interested in ${command.interests}`,
};
