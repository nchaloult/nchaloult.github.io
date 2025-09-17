export interface Quote {
  text: string;
  author?: string;
  source?: Source;
}

type Source = {
  text: string;
  isAURL: boolean;
};

export interface NumberedQuote extends Quote {
  num: number;
}

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
  // {
  //   text: 'There are two hard things in Computer Science: cache invalidation and naming things.',
  //   author: 'Phil Karlton',
  // },
  {
    text: "We don't really celebrate the accomplishments of government employees. They exist in our society to take the blame.",
    author: 'Michael Lewis',
    source: {
      text: '"The Fifth Risk" book',
      isAURL: false,
    },
  },
  // {
  //   text: 'A city is a large community where people are lonesome together.',
  //   author: 'Herbert V. Prochnow',
  // },
  {
    text: 'Every kid starts out as a natural-born scientist, and then we beat it out of them. A few trickle through the system with their wonder and enthusiasm for science intact.',
    author: 'Carl Sagan',
  },
  {
    text: 'Happiness, whether in business or private life, leaves little trace in history.',
    author: 'Fernand Braudel',
  },
  {
    text: 'Program testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence.',
    author: 'Edsger Dijkstra',
    source: {
      text: 'https://www.cs.utexas.edu/users/EWD/transcriptions/EWD03xx/EWD340.html',
      isAURL: true,
    },
  },
  // {
  //   text: 'Do not communicate by sharing memory; instead, share memory by communicating.',
  //   author: 'Effective Go',
  //   source: {
  //     text: 'https://golang.org/doc/effective_go.html#concurrency',
  //     isAURL: true,
  //   },
  // },
  // {
  //   text: 'Any sufficiently advanced technology is indistinguishable from magic.',
  //   author: 'Arthur C. Clarke',
  // },
  {
    text: 'From a software maintenance perspective there is little consensus on how to organize ML projects. It feels like websites before Rails came out: a bunch of random PHP scripts with an unholy mixture of business logic and markup sprinkled throughout.',
    author: 'Ryan Dahl',
    source: { text: 'https://tinyclouds.org/residency/', isAURL: true },
  },
  {
    text: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    author: 'Ellen Ullman',
  },
  // {
  //   text: 'Automation was developed to free the rich from the working class, not to free the working class from the drudgeries of work.',
  // },
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
  // {
  //   text: 'If you are neutral in situations of injustice, you have chosen the side of the oppressor.',
  //   author: 'Desmond Tutu',
  // },
  {
    text: "One of the most irritating things programmers do regularly is feel so good about learning a hard thing that they don't look for ways to to make it easy, or even oppose things that would do so.",
    author: 'Peter Bhat Harkins (@pushcx)',
    source: {
      text: 'https://twitter.com/pushcx/status/1566843542990880768',
      isAURL: true,
    },
  },
  {
    text: 'Imagine engineering a system to be as reliable as possible and then having your success be taken as evidence that you are useless',
    author: 'Vaibhav Sagar (@vbhvsgr)',
    source: {
      text: 'https://twitter.com/vbhvsgr/status/1594088007585259520',
      isAURL: true,
    },
  },
  // {
  //   text: 'The surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.',
  //   author: 'Bill Watterson',
  // },
  {
    text: 'Growth for the sake of growth is the ideology of the cancer cell.',
    author: 'Edward Abbey',
  },
  // {
  //   text: 'Water is wet, taxes are inevitable, and undoubtedly someone will use a hammer to pound in a screw.',
  //   author: 'Timothy St. Clair (@timothysc)',
  //   source: {
  //     text: 'https://twitter.com/timothysc/status/1671620783406305286?s=20',
  //     isAURL: true,
  //   },
  // },
  {
    text: "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer.",
    author: 'Jim Carrey',
  },
  {
    text: 'Learning is not memorizing information; learning is changing your behavior.',
    author: 'David Senra',
    source: {
      text: 'https://www.founderspodcast.com/episodes/37366244/senra-329-charlie-munger-the-new-poor-charlies-almanack',
      isAURL: true,
    },
  },
  {
    text: 'Their mediocrity is my opportunity.',
    author: 'David Senra',
    source: {
      text: 'https://www.founderspodcast.com/episodes/80362533/catmull-ed-catmull-creativity-inc',
      isAURL: true,
    },
  },
  {
    text: "...[F]ar from being contradictory, being demanding and supportive are inextricably linked. It's the way you are when you believe in someone more than they believe in themselves.",
    author: 'Ravi Gupta',
    source: {
      text: 'https://www.rkg.blog/demanding.php',
      isAURL: true,
    },
  },
  {
    text: "There is this special biologist word we use for 'stable'. It is 'dead'.",
    author: 'Jack Cohen (h/t Jarkko Hietaniemi)',
    source: {
      text: 'https://www.nntp.perl.org/group/perl.perl5.porters/2005/01/msg97885.html',
      isAURL: true,
    },
  },
  {
    text: "'The reward for good work is more work.' I want to hang out with the kind of person who nods and smiles in excitement when they hear this.",
    author: "Kevin Kelly (h/t Patrick O'Shaughnessy)",
    source: {
      text: 'https://www.joincolossus.com/episodes/79714195/giffon-special-situations-in-private-markets',
      isAURL: true,
    },
  },
  {
    text: '...[M]ost of the freedom I had before kids, I never used. I paid for it in loneliness, but I never used it.',
    author: 'Paul Graham',
    source: {
      text: 'https://www.paulgraham.com/kids.html',
      isAURL: true,
    },
  },
  {
    text: '...If you made something 2x faster, you might have done something smart. If you made something 100x faster, you definitely just stopped doing something stupid.',
    author: 'Fabian Giesen (@rygorous)',
    source: {
      text: 'https://x.com/rygorous/status/1271296834439282690',
      isAURL: true,
    },
  },
  {
    text: 'Backups are merely an implementation detail of a restore.',
    author: 'Seth Markle',
    source: {
      text: 'https://youtu.be/sYDJYqvNeXU?si=9lLCmDBrFteSTNau',
      isAURL: true,
    },
  },
  {
    text: 'Cut fluff ruthlessly. People are going to read 10% of whatever you... write. Have it be the 10% you chose, rather than the 10% they randomly [stumble] upon.',
    author: 'Dwarkesh Patel',
    source: {
      text: 'https://x.com/dwarkesh_sp/status/1968012981016608934',
      isAURL: true,
    },
  },
];
