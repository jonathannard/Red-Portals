<div align="center">
  <img align="center" src=".github/images/logo/red-portal.png" />
  <!-- <img align="center" src=".github/images/logo/red-portal-simplistic.png" /> -->
  <h1 align="center">Red Portals</h1>
  <p align="center">
   A repository for educational and ethical exploration of 'Evil Portals,' demonstrating how rogue captive portals mimic legitimate login systems. Designed for security researchers, penetration testers, and ethical hackers to understand and mitigate network vulnerabilities.
  </p>
</div>

## Index <a name="index"></a>

- [Previews](#previews)
- [Disclaimer](#disclaimer)
- [Purpose](#purpose)
- [What Are "Evil Portals"?](#what-are-evil-portals)
- [Responsible Use](#responsible-use)
- [Getting Started](#getting-started)
- [Development](#development)
- [Wrapping Up](#wrapping-up)

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Previews <a name="previews"></a>

A list of all current portals below:

| Portal | Preview                   |
| ------ | ------------------------- |
| Amazon | [Link][url-portal-amazon] |

More coming soon!

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## ⚠️ Disclaimer <a name="disclaimer"></a>

This repository is provided for **educational purposes only** and is intended
for use by:

- Security researchers
- Ethical hackers
- Penetration testers
- Individuals seeking to understand network vulnerabilities to improve defenses

**Do not use these tools without explicit permission** from the owner of the
network or system being tested. Unauthorized use may violate local, state, or
international laws. The repository maintainers will not be held responsible for
any misuse of the provided code, templates, or examples.

The logos and designs in this repository are **not official logos** and are
provided solely for **educational purposes**. They are artistic representations
or placeholders and do not imply endorsement, affiliation, or sponsorship by the
respective brands.

### Legal Notice

The content of this repository is provided "as is" without any guarantees or
warranties. By using the tools and templates provided herein, you acknowledge
and accept full responsibility for their use, including ensuring compliance with
applicable laws and obtaining proper authorization.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Purpose <a name="purpose"></a>

The goal of this repository is to raise awareness about the vulnerabilities that
attackers may exploit using "Evil Portals" — captive portals designed to mimic
legitimate login systems on open access points (APs). By providing realistic
examples and explanations of how these systems operate, this repository aims to:

1. **Educate network administrators and developers** about potential risks.
2. **Demonstrate the importance of securing wireless networks** against
   unauthorized access and data interception.
3. **Help organizations and individuals develop stronger defenses** against
   phishing and other attacks facilitated by rogue APs.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## What Are "Evil Portals"? <a name="what-are-evil-portals"></a>

Evil Portals are custom captive portal systems often used in penetration testing
to demonstrate security risks. When connected to a rogue AP, users are directed
to a fake login page, where attackers can attempt to capture credentials or
inject payloads.

This repository provides:

- Realistic examples of AP-powered login systems ("Evil Portals").
- Configurable templates for use in controlled and authorized environments.
- Documentation on how these systems work and how to mitigate risks.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Responsible Use <a name="responsible-use"></a>

This repository is designed to be a teaching tool for ethical purposes. Users
are expected to:

- Only use these tools in environments where explicit authorization has been
  granted (e.g., in penetration tests or lab environments).
- Inform and educate stakeholders about the risks and solutions.
- Never deploy these tools in a way that causes harm, theft, or deception
  without consent.

Using these tools responsibly contributes to a safer digital landscape by making
individuals and organizations aware of potential threats.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Getting Started <a name="getting-started"></a>

1. Clone this repository to your machine.
2. Set up a Raspberry Pi or other [supported hardware][url-lambda-guru] as an
   access point.
3. Use the provided templates from within the `\portals` folder to simulate
   captive portals in a controlled environment.
4. Review the provided documentation to understand how attackers exploit this
   technique — and how to defend against it.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Development <a name="development"></a>

This repository is open to contributions that improve the educational value of
the provided examples. To get started with development:

1. Fork this repository to your GitHub account.
2. Clone your fork to your local machine.
3. Create a new branch for your changes.
4. Ensure node.js and npm are installed on your machine.
5. Run `npm install` to install dependencies.
6. Make your changes to the files in the `src\` folder, and test them locally:
   - Use `npm run build:watch` to watch for changes and rebuild the project.
   - Navigate to "http://localhost:8080/my-file.html" to view your changes.
7. Finalize your changes with `npm run build`.
8. Commit your changes and push them to your fork.
9. Open a pull request to the main repository here.

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Licensing <a name="licensing"></a>

This project is licensed under the **MIT** License. See the
[LICENSE.md](LICENSE.md) file for the pertaining license text.

`SPDX-License-Identifier: MIT`

<p align="right">[ <a href="#index">Index</a> ]</p>

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

## Wrapping Up <a name="wrapping-up"></a>

Thank you for all of your support, I spent a long time working on this project
and plan to support it long term. Really hoping the community joins in and helps
me improve it from here. It's important to me that this project stays accessible
to everyone, so please keep this software free and open source. If you have any
questions, please let me know by opening an issue [here][url-new-issue].

| Type                                                                      | Info                                                                      |
| :------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| <img width="48" src=".github/images/ng-icons/email.svg" />                | webmaster@codytolene.com                                                  |
| <img width="48" src=".github/images/simple-icons/buymeacoffee.svg" />     | https://www.buymeacoffee.com/codytolene                                   |
| <img width="48" src=".github/images/simple-icons/bitcoin-btc-logo.svg" /> | [bc1qfx3lvspkj0q077u3gnrnxqkqwyvcku2nml86wmudy7yf2u8edmqq0a5vnt][url-btc] |

Fin. Happy programming friend!

Cody Tolene

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->

<!-- IMAGE REFERENCES -->

[img-info]: .github/images/ng-icons/info.svg
[img-warning]: .github/images/ng-icons/warn.svg

<!-- LINK REFERENCES -->

[url-btc]:
  https://www.blockchain.com/explorer/addresses/btc/bc1qfx3lvspkj0q077u3gnrnxqkqwyvcku2nml86wmudy7yf2u8edmqq0a5vnt
[url-lambda-guru]: https://www.lambda.guru/
[url-portal-amazon]: https://www.codytolene.com/Red-Portals/portals/amazon.html

<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
<!---------------------------------------------------------------------------->
