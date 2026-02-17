---
title: Build the next layer
subtitle: Rest assured, you're not prioritizing short-term gains over long-term prosperity.
publishDate: 02-18-2026
heroImage: ./hero.webp
heroCaption: In July 1986, representatives from France, Germany, the UK, and the US gather in Newport, RI to design - as a committee - how the OSI reference model should handle naming and addressing on the network.
heroSourceURL: https://spectrum.ieee.org/amp/osi-the-internet-that-wasnt-2650269656
---

> We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.
>
> <footer><cite>— Ellen Ullman</cite></footer>

Throughout the late 70s and early 80s, as the Internet protocol suite, or TCP/IP, was gaining momentum as an internetworking solution, a large crowd of subject matter experts were critical of it. These industry players and academics had many grumblings with the proposed design, but importantly, they fundamentally disagreed with the entire project's philosophy that pragmatism and simplicity was better than theoretical beauty and completeness. They were fleshing out OSI: an ambitious formal standard to solve _all_ of computer networking with robust protocols. Their work involved much deliberation and very careful planning.

Meanwhile, TCP/IP contributors openly [published](https://datatracker.ietf.org/doc/html/rfc791) [their](https://datatracker.ietf.org/doc/html/rfc792) [specs](https://datatracker.ietf.org/doc/html/rfc793), and implementations were seeing real-world use. In 1982, the US DoD announced that they'd soon mandate TCP/IP for all military computer networking. Companies like IBM, AT&T, and DEC supported it in their products despite having competing protocols. By the time the Internet wave began to wash over the world in the early 90s, TCP/IP had not achieved a swift and decisive victory to seat it as the incumbent - the story is more nuanced than that - but it was the most widespread player, and so it rode the wave.

TCP/IP won early because it was simpler to understand and demonstrably working at scale. Then it won late because it was already everywhere, so people built on top of it. Today, the elegant 7-layer OSI model that solved _all_ of computer networking has been relegated to a teaching resource in undergrad-level courses.

Opportunities to rebuild foundational layers of systems from the ground up are rare. People pitching ideas to do this must have such persuasive arguments, be such compelling founders, and have such clear visions of the future that they earn the trust of folks with money to fund their reinvention of the wheel. What they create also needs to motivate users to switch to it somehow, either by being so much better than everything else out there, or via something like network effects.

The remaining opportunities in the world often consist of making simple additions on top of abstraction layers that we already have. These may not have as wide open of a playing field as a greenfield project or a rewrite effort, but that doesn't mean they have a diminished impact potential.

<!--
There's even an exciting subset of these opportunities that don't just make an incremental improvement, but can unlock a step-change in functionality. Maybe that structured output becomes an entirely new product offering that your customers want. Clean the output up for consumption outside of your company, and generate signed URLs for them to download those objects from a bucket. Expose a way for them to receive those messages by subscribing to a topic.
-->

These "quick wins" shouldn't be thought of as [temporary workarounds](https://orlybooks.com/books/temporary-workarounds) until the right person discovers one of those first types of opportunities. They usually aren't the most elegant solution to a problem, but they work. They're easy to understand, to maintain, to teach. They piggy-back on what you already know about the layers they're built on top of. They fail in predictable ways, which can be monitored for and planned around.

They have second order effects, too. Quick wins are... quick. You can ship them faster, and collect feedback from users sooner. This helps you get closer to the theoretically ideal solution for your customers' problems.

Institutional incentives are involved, as well. It ultimately depends on the situation, but leaders might be more comfortable greenlighting initiatives that will build the next layer on top of an existing system over ones that will stand up something completely new. It’s an easy “yes” for decision-makers if we can make an incremental improvement, with relatively less work, and with familiar building blocks that've already been battle-tested.
 
After considering all of this, it becomes apparent that this kind of work has the ability to move the needle and affect KPIs just as significantly as the rebuilds and the reinventions. Ambitious overachievers who want to push the gas pedal on their career should not be so quick to delegate these tasks away. Spending energy on these opportunities does not signal that we've deprioritized a project's long-term health and maintainability in an attempt to just get something out the door.

This is also what the development life cycle for systems with long lives typically looks like. A good, timely example of this is how AI is being applied in the enterprise world today. Instead of revisiting existing processes, or reimagining how work might be done with these immensely capable new tools, companies are sitting them right on top of what already exists. We're asking LLMs to do the same things that humans have been doing. Listen for messages from an event-driven system, make this tool call to help check for inaccuracies, cut a ticket when one is found, escalate via email if that ticket has no activity after two business days. AI agents are piloting existing systems, and facilitating interoperability.

Granted, if given the right context, they do those jobs faster than the humans did, with fewer mistakes, and with infinite stamina. But AI tools have massive, massive potential. They are capable of so much more than this. And yet, this is how they're making an impact inside these companies. As the next layer of an existing system.

For AI's story specifically, perhaps this is all because we haven't figured out how best to wield its power. We haven't invented new processes or new jobs that demand the kind of capabilities that only LLMs have right now. The world that these models live in hasn't adapted to the platform shift that they've brought to it. All of this will happen, but in the meantime, it's fascinating to watch this "quick wins with existing building blocks" pattern hold, especially given how big of an inflection point this new AI wave is.

Look for chances like these to build the next layer on whatever project you contribute to. This is not a near-sighted strategy. Not all types of quick wins introduce tech debt that a new member of your team will inherit and be asked to clean up. They're the easiest types of project enhancements for stakeholders to understand, thus earn their buy-in for. Once they've been implemented, customers and consumers will use them since they're there (maybe without realizing it, depending on what they look like), and your new layer will be refined through quick and steady iteration.

[Build the simplest thing that could possibly work](https://www.seangoedecke.com/the-simplest-thing-that-could-possibly-work/). Get your new layer out there. Collect proof that it works. With decent-enough execution, the next generation of your project's contributors will build on top of it. When done thoughtfully, this strategy is likely the most realistic and pragmatic way to move a project forward, and for you to make a big impact.
