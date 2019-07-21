import React from 'react';

import { constants } from '../utils/constantsAndCommands';

function ManPage() {
  // Bits of JSX that add text features. Used to construct a man page
  const blankLine = (<p>&nbsp;</p>);

  return (
    <div>
      <div className="l-align">NICK(7)</div>
      <div className="r-align">NICK(7)</div>
      <div className="c-align">nchaloult.sh General Commands Manual</div>

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
          <b>nick</b> [<b>-n</b>] [<b>-e</b>] [<b>-g</b>]
        </p>
      </div>

      { blankLine }

      <p><b>DESCRIPTION</b></p>
      <div className="tabbed">
        <p>
          <b>nick</b> is interested in _______, and has a passion for ________. Add more here later.
        </p>
      </div>

      { blankLine }

      <p><b>OPTIONS</b></p>
      <div className="tabbed">
        <p>
          <b>-e, --email</b>
        </p>
        <div className="tabbed">
          <p>
            Uses <b>echo</b> to print Nick's email to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-g, --github</b>
        </p>
        <div className="tabbed">
          <p>
            Uses <b>echo</b> to print Nick's Github to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-l, --linkedin</b>
        </p>
        <div className="tabbed">
          <p>
            Uses <b>echo</b> to print Nick's LinkedIn to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-n, --name</b>
        </p>
        <div className="tabbed">
          <p>
            Uses <b>echo</b> to print Nick's full name to the shell
          </p>
        </div>

        { blankLine }

        <p>
          <b>-v, --version</b>
        </p>
        <div className="tabbed">
          <p>
            Uses <b>echo</b> to print Nick's current stable version (age) to the shell
          </p>
        </div>
      </div>

      { blankLine }
      { blankLine }

      <div className="l-align">Nick Chaloult</div>
      <div className="r-align">NICK(7)</div>
      <div className="c-align">July 2019</div>
    </div>
  );
}

export default ManPage;
