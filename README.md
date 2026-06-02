# [nchaloult.com](https://nchaloult.com)

My personal website/link hub. Inspired by [shells](https://en.wikipedia.org/wiki/Unix_shell) and [man pages](https://en.wikipedia.org/wiki/Man_page). Color scheme is based off of [gruvbox dark](https://github.com/morhetz/gruvbox).

![nchaloult.com landing page](https://user-images.githubusercontent.com/31291920/149075489-7364ab93-5d61-4c06-b13c-793066e91f58.png)

## Security Guardrails

To protect against npm supply chain attacks, this project is configured to:
1. Block package lifecycle scripts (e.g., `postinstall`).
2. Block package versions published less than 7 days ago.

### Overriding/Bypassing Guardrails

* **To install a package that was published less than 7 days ago** (e.g., for an immediate security hotfix):
  ```bash
  npm install --min-release-age=0 <package-name>
  ```
* **To run a package's ignored install script** (e.g., if a package requires compiling native binaries):
  ```bash
  npm rebuild <package-name>
  ```
