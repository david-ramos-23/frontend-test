
# 🚀 Workfully Frontend Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using the latest verion with App Router. 

## 📦 Getting Started


Rename **_.env.example_** to **_.env_**

You can use the Github API without authentication, but if you want to use your `PAT` token or `GitHub App` credentials, add them to the .env file. 

Learn how to create a token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) or a GitHub App [here](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app) 

To generate a new `JWT_SECRET`, you can use [this website](https://generate-secret.vercel.app/32)


## 🧑‍💻 Run Application locally

You will need to install the dependencies required. I use [pnpm](https://github.com/pnpm/pnpm) as a package manager but feel free to use npm or yarn or whatever you like the most. 

 


1. Install dependencies
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2. Start application
    ```bash
    pnpm dev
    ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ⚙️ Build

The app is build for production and place the code into `dist` folder


## 🛠️ Tests

⚠️ WIP ⚠️

```bash
npm test
# or
yarn test
# or
pnpm test
```
    


## ⭐️ Features

- Nextjs 13 🎁 + React + Typescript 
- React Hooks
- Tailwind CSS
- NextAuth 🎁
- Next.js 13 Serverless Route Handlers (Next API, Full Stack Apps) 🎁
- Dockerized App 🎁: 


## 🎁 Bonus
- Dockerized App

In order Build the image and fire up the container run the following commands at the root folder.

```bash
docker build . -t frontend-test
docker run --rm -p 3000:3000 --name frontend-test frontend-test
```

- At root build folder <code>docker-compose up</code> 
- It would create clearcloin-api and clearcoin-web docker images, and start-up the container.
- You can access to the application opening the following [URL](http://localhost:3001)


## 🤔 Improvements
- Use CSS Modules
- Pagination, filtering and sorting of API results
- Web Performance and Optimizations



## Next.js Documentation
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br>

# ORIGINAL README BELOW 👇

# Frontend Test

## GOALS


#### The main goal of this test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of React
2. Clean, maintainable & easy-to-read code
3. Good architectural practices
4. Stick to the design

## HOW TO START

1. Investigate the github api calls for user and repos
2. Fork this repository
3. Start coding!

## NOT REQUIRED, BUT IMPRESSIVE

- Using a framework
- Adding Tests
- Using Docker

## Notes

Feel free to modify this README to explain anything you consider relevant.

## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![](https://github.com/Workfully-github/frontend-test/blob/main/images/First-Screen.png)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://github.com/Workfully-github/frontend-test/blob/main/images/Success-screen.png)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://github.com/Workfully-github/frontend-test/blob/main/images/Error-screen.png)

___
<br>
