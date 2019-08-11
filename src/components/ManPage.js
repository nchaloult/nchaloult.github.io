import React from 'react';

import { constants } from '../utils/constantsAndCommands';

function ManPage() {
  // Bits of JSX that add text features. Used to construct a man page
  const blankLine = (<p>&nbsp;</p>);

  return (
    <div>
      <div className="l-align">NICK(1)</div>
      <div className="r-align">NICK(1)</div>
      <div className="c-align">nchaloult.com General Commands Manual</div>

      { blankLine }
      { blankLine }

      <p><b>NAME</b></p>
      <div className="tabbed">
        <p>
          <b>nick</b> -- { constants.shortDesc }
        </p>
      </div>

      { blankLine }

      <p><b>SYNOPSIS</b></p>
      <div className="tabbed">
        <p>
          <b>nick</b> [<b>-aeglnrv</b>]
        </p>
      </div>

      { blankLine }

      <p><b>DESCRIPTION</b></p>
      <div className="tabbed">
        <p>
          <b>nick</b> has a passion for learning about new technologies, and loves discovering better ways to do things. <b>nick</b>'s concentrations in school are Intelligence and Info & Internetworks. Expects to graduate in May of 2021.
        </p>
      </div>

      { blankLine }

      <p><b>OPTIONS</b></p>
      <div className="tabbed">

        <p>
          <b>-a, --all</b>
        </p>
        <div className="tabbed">
          <p>
            Prints lots of Nick's important information to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-e, --email</b>
        </p>
        <div className="tabbed">
          <p>
            Prints Nick's email address to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-g, --github</b>
        </p>
        <div className="tabbed">
          <p>
            Prints a link to Nick's Github profile to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-l, --linkedin</b>
        </p>
        <div className="tabbed">
          <p>
            Prints a link to Nick's LinkedIn profile to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-n, --name</b>
        </p>
        <div className="tabbed">
          <p>
            Prints Nick's full name to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-r, --resume</b>
        </p>
        <div className="tabbed">
          <p>
            Prints a link to view Nick's resume in PDF format to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-v, --version</b>
        </p>
        <div className="tabbed">
          <p>
            Prints Nick's current stable version (age) to the shell
          </p>
        </div>

      </div>

      { blankLine }
      { blankLine }

      <div className="l-align">{ constants.fullName }</div>
      <div className="r-align">NICK(1)</div>
    </div>
  );
}

export default ManPage;
