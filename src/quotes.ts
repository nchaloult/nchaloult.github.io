export type Quote = {
  text: string;
  author?: string;
  source?: Source;
};

type Source = {
  text: string;
  isAURL: boolean;
};

export const quotes: Quote[] = [
  {
    text: 'The key to making programs fast is to make them do practically nothing. ;-)',
    author: 'Mike Haertel, original GNU grep author',
    source: {
      text: 'https://lists.freebsd.org/pipermail/freebsd-current/2010-August/019310.html',
      isAURL: true,
    },
  },
  {
    text: 'What does it say about the state of computer science education that one must make a case for teaching how to think clearly?',
    author: 'Leslie Lamport',
    source: {
      text: 'http://lamport.azurewebsites.net/pubs/pubs.html#teaching-concurrency',
      isAURL: true,
    },
  },
  {
    text: 'While fault tolerance is a highly desired goal, it comes with its own pitfalls: it often hides persistent underlying problems. Fault tolerance is fault masking.',
    author: 'Baker et al.',
    source: {
      text: 'https://research.google.com/pubs/pub36971.html',
      isAURL: true,
    },
  },
  {
    text: 'Do you want me to take your unstructured monolith and break it down into an unstructured set of microservices?',
  },
  {
    text: 'The most violent element in society is ignorance.',
    author: 'Emma Goldman',
  },
  {
    text: 'There are two hard things in Computer Science: cache invalidation and naming things.',
    author: 'Phil Karlton',
  },
  {
    text: "We don't really celebrate the accomplishments of government employees. They exist in our society to take the blame.",
    author: 'Michael Lewis',
    source: {
      text: '"The Fifth Risk" book',
      isAURL: false,
    },
  },
  {
    text: 'A city is a large community where people are lonesome together.',
    author: 'Herbert V. Prochnow',
  },
  {
    text: 'Every kid starts out as a natural-born scientist, and then we beat it out of them. A few trickle through the system with their wonder and enthusiasm for science intact.',
    author: 'Carl Sagan',
  },
  {
    text: 'Happiness, whether in business or private life, leaves little trace in history.',
    author: 'Fernand Braudel',
  },
  {
    text: 'Much still remains to do, and much will always remain, and the one who shall be born a thousand years hence will not be barred from this opportunity of adding something further.',
    author: 'Seneca, translated by R. M. Gummere',
    source: {
      text: 'https://www.stoictherapy.com/resources-epistles#64',
      isAURL: true,
    },
  },
  {
    text: 'Program testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence.',
    author: 'Edsger Dijkstra',
    source: {
      text: 'https://www.cs.utexas.edu/users/EWD/transcriptions/EWD03xx/EWD340.html',
      isAURL: true,
    },
  },
  {
    text: 'Do not communicate by sharing memory; instead, share memory by communicating.',
    author: 'Effective Go',
    source: {
      text: 'https://golang.org/doc/effective_go.html#concurrency',
      isAURL: true,
    },
  },
  {
    text: 'Seek solutions based on your own scrutiny, regardless of whether it produces what has been found before. There are often several ways to solve a given problem.',
    author: 'Ralph P. Grimaldi',
  },
  {
    text: 'Any sufficiently advanced technology is indistinguishable from magic.',
    author: 'Arthur C. Clarke',
  },
  {
    text: 'From a software maintenance perspective there is little consensus on how to organize ML projects. It feels like websites before Rails came out: a bunch of random PHP scripts with an unholy mixture of business logic and markup sprinkled throughout.',
    author: 'Ryan Dahl',
    source: { text: 'https://tinyclouds.org/residency/', isAURL: true },
  },
  {
    text: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    author: 'Ellen Ullman',
  },
  {
    text: 'Automation was developed to free the rich from the working class, not to free the working class from the drudgeries of work.',
  },
  {
    text: 'Too many people will judge a disruptive innovation based on initial iterations of the idea.',
  },
  {
    text: 'Automation is the serialization of understanding.',
    author: 'Kelsey Hightower',
    source: {
      text: 'https://changelog.com/posts/automation-is-the-serialization-of-understanding',
      isAURL: true,
    },
  },
];
