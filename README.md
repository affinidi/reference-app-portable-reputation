# Portable reputation – an Affinidi reference app

This is a ready-to-use reference app that showcases usage of Affinidi API for issuing, sharing and verifying credentials, as well as storing them in the wallet.

## Introduction

![Your Github profile](docs/github_profile.png)

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
    You also need to [create a Github OAuth app]((https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)) and enter values for `GITHUB_APP_CLIENT_ID` and `GITHUB_APP_CLIENT_SECRET`.
4. Launch the application:
    ```
    $ npm run dev
    ```
    App will be available locally on http://localhost:3000.

## Use case

### App flavours

### Terminology

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

## Tools & frameworks used

## Legal & FAQ
