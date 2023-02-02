# Portable reputation – an Affinidi reference app

This is a ready-to-use reference app that showcases usage of Affinidi API for issuing, sharing and verifying credentials, as well as storing them in the wallet.

## Introduction

![Your Github profile](docs/github_profile.png)

Portable reputation app allows you to import your data from data providers like Github, Steam, LinkedIn, Medium, etc. and store it as a verifiable credential in your wallet.

You can then share this credential with anyone and they'll be able to verify its validity without ever accessing these data providers again.

## Getting started

Setting up the reference app is easy, just follow these steps:  
1. Clone the repo:
    ```
    $ git clone git@github.com:affinidi/reference-app-portable-reputation.git
    $ cd reference-app-portable-reputation
    ```
2. Install the dependencies:
    ```
    $ npm install
    ```
3. Create a `.env` file:
    ```
    $ cp .env.example .env
    ```
    Please enter values for `PROJECT_ID`, `PROJECT_DID` and `API_KEY_HASH` from your project.  
    You also need to [create a Github OAuth app](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) and enter values for `GITHUB_APP_CLIENT_ID` and `GITHUB_APP_CLIENT_SECRET`.
4. Launch the application:
    ```
    $ npm run dev
    ```
    App will be available locally on http://localhost:3000.

## Use case

### App flavours

We have created multiple variations of the same app for you to use.  
These are called "flavours" and they're adapted for a specific industry.

#### "Career profile" flavour

Data providers:
- Github

#### "Gaming profile" flavour (upcoming) 

### Terminology

**Verifiable Credential (VC)** –

**Issuer** –

**Holder** –

**Verifier** –

**Wallet (Cloud Wallet)** –

**Data provider** –

### Overview diagram

```mermaid
sequenceDiagram
  actor User
  participant App
  participant CW as Cloud Wallet
  participant Github

  User->>+App: Sign into the Holder's wallet
  App->>+CW: Sign in
  CW->>-App: [Cloud Wallet access token]
  App->>App: Store [Cloud Wallet access token] in the localStorage

  App->>+CW: Fetch Holder's VCs
  CW->>-App: [Holder's VCs]
  App->>App: Find latest GithubProfile VC in Holder's VCs

  opt Holder doesn't have a GithubProfile VC yet
    App->>-User: Show "Setup profile" page
    User->>+App: Import Github profile
    App->>+Github: Request Github authentication
    Github->>-User: Ask user to login into their Github account
    User->>+Github: Login into the Github account and authorize the action
    Github->>-App: [Github access token]
    App->>App: Store [Github access token] in as a cookie
    App->>+Github: Request user's Github profile data
    Github->>-App: [Github profile data]
    App->>App: Build an unsigned GithubProfile VC
    App->>+CW: Sign GithubProfile VC with Issuer's wallet
    CW->>-App: [GithubProfile VC]
    App->>+CW: Store [GithubProfile VC] in the Holder's wallet
    CW->>-App: (ok)
  end

  App->>-User: Show "Github profile" page with GithubProfile VC's contents
```

## Tools & frameworks

This project is built with **NextJS** framework, which allows you to quickly build applications using TypeScript and **React**. NextJS has built-in router, server-side rendering, backend support and useful extensions like Next Auth for authenticating via Github and other data providers.  
- Read [NextJS docs](https://nextjs.org/docs/getting-started), [React docs](https://reactjs.org/docs/getting-started.html)  

We also use **Styled Components**, **Tailwind CSS** and Bootstrap Grid to build the UI.  
- Read [Styled Components docs](https://styled-components.com/docs), [TailWind CSS docs](https://tailwindcss.com/docs/installation)  

To make API requests, **axios** library is used. 
- Read [axios docs]()  

Backend requests are validated with **zod** and logged with **pino**.  
- Read [Zod docs](https://www.npmjs.com/package/zod), [pino docs](https://www.npmjs.com/package/pino)  

Github profile data is fetched using **Octokit** and **GraphQL**.  
- Read [Octokit docs](https://github.com/octokit/octokit.js), [GraphQL docs](https://graphql.org/learn/)  

## Telemetry

Affinidi collects usage data to improve our products and services. For information on what data we collect and how we use your data, please refer to our [Privacy Policy](https://build.affinidi.com/dev-tools/privacy-policy.pdf).

## Feedback, Support, and Community

[Click here](https://github.com/affinidi/reference-app-portable-reputation/issues) to create a ticket and we will get on it right away. If you are facing technical or other issues, you can reach out to us on [Discord](https://discord.com/invite/jx2hGBk5xE).

## FAQ

### A note from Affinidi

Affinidi Developer Tools are currently in the open beta phase and we are refining our product every day. The Affinidi Developer Tools may be incomplete and may contain errors – they may be unstable and may cause a loss of functionality and data. Use of the Affinidi Developer Tools will be at your own risk. As our engineers seek to improve our platform, we would not have the resources to provide any maintenance or tech support at this time. Please bear with us as we continue to improve the platform.

### What can I develop?

You are only limited by your imagination! Affinidi Developer Tools is a toolbox with which you can build software applications for personal or commercial use.

### Is there anything I should not develop?

We only provide the tools - how you use them is largely up to you. We have no control over what you develop with our tools - but please use our tools responsibly!

We hope that you would not develop anything that contravenes any applicable laws or regulations. Your projects should also not infringe on Affinidi’s or any third party’s intellectual property (for instance, misusing other parties’ data, code, logos, etc).

### What responsibilities do I have to my end-users?

Please ensure that you have in place your own terms and conditions, privacy policies, and other safeguards to ensure that the projects you build are secure for your end users.

If you are processing personal data, please protect the privacy and other legal rights of your end-users and store their personal or sensitive information securely.

Some of our components would also require you to incorporate our end-user notices into your terms and conditions.

### Are Affinidi Developer Tools free for use?

Affinidi Developer Tools are free during the open beta phase, so come onboard and experiment with our tools and see what you can build! We may bill for certain components in the future, but we will inform you beforehand.

### Is there any limit or cap to my usage of the Affinidi Developer Tools?

We may from time to time impose limits on your use of the Affinidi Developer Tools, such as limiting the number of API requests that you may make in a given duration. This is to ensure the smooth operation of the Affinidi Developer Tools so that you and all our other users can have a pleasant experience as we continue to scale and improve the Affinidi Developer Tools.

### Do I need to provide you with anything?

From time to time, we may request certain information from you to ensure that you are complying with the [Terms of Use](https://build.affinidi.com/dev-tools/terms-of-use.pdf).

### Can I share my developer’s account with others?

When you create a developer’s account with us, we will issue you your private login credentials. Please do not share this with anyone else, as you would be responsible for activities that happen under your account. If you have friends who are interested, ask them to sign up – let's build together!

## _Disclaimer_

_Please note that this FAQ is provided for informational purposes only and is not to be considered a legal document. For the legal terms and conditions governing your use of the Affinidi Developer Tools, please refer to our [Terms of Use](https://build.affinidi.com/dev-tools/terms-of-use.pdf)._
