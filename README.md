# TechCrunch Demo

## Prompt

Please develop an application and deploy it on Vercel. This app will be used to demo your knowledge of the Vercel
platform, so use as many Vercel/Next features as needed to aid your demo. Put particular focus on front-end performance,
using appropriate Next.js rendering strategies, while also demonstrating your technical strengths. 

This should typically be a new project specifically built for this stage of the interview, but if you’ve built something 
suitable within the past 1-2 months, please let us know and we can consider using that as well. 

## Deep Dive

#### Introduction

This Next.js application is a recreation of the TechCrunch website, leveraging their WordPress CMS as a data
source. Built entirely using the newest Next.js App Router and its feature-set, the project highlights a focus on
performance and rendering strategies.

#### Technologies Overview

* **Framework**: Next.js App Router
* **Platform**: Vercel
* **Dependency**: `pnpm`
* **UI**: Radix, shadcn/ui, Sonner
* **Other**: React Hook Form, Zod

#### Next.js Rendering Strategies

○ (Static) (`/startups`, `/apps`/, `/venture`, etc)
  * Always pre-rendered during build

ƒ (Dynamic) (`/latest`)
  * Always server-rendered on request

● (SSG) (`/posts/[slug]`)
  * Either pre-rendered during build **_OR_** rendered on request

```text
> next build

   ▲ Next.js 15.2.0-canary.62
   - Environments: .env.local
   - Experiments (use with caution):
     · ppr

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
 ✓ Generating static pages (36/36)
 ✓ Collecting build traces    
 ✓ Finalizing page optimization    

Route (app)                                                                                                Size     First Load JS
┌ ○ /                                                                                                      184 B           123 kB
├ ○ /_not-found                                                                                            145 B           114 kB
├ ƒ /.well-known/vercel/flags                                                                              145 B           114 kB
├ ○ /apps                                                                                                  184 B           118 kB
├ ƒ /feed                                                                                                  145 B           114 kB
├ ○ /latest                                                                                                1.06 kB         119 kB
├ ● /posts/[slug]                                                                                          183 B           123 kB
├   ├ /posts/x-is-blocking-links-to-signal-a-secure-messaging-platform-used-by-federal-workers
├   ├ /posts/polymath-aims-to-make-learning-math-as-enjoyable-as-roblox-with-its-educational-sandbox-game
├   ├ /posts/what-to-know-about-tiktoks-uncertain-future-in-the-us-and-the-people-who-want-to-buy-it
├   └ [+22 more paths]
├ ◐ /search                                                                                                184 B           118 kB
├ ○ /startups                                                                                              184 B           118 kB
└ ○ /venture                                                                                               184 B           118 kB
+ First Load JS shared by all                                                                              114 kB
  ├ chunks/3ff3c32c-e43feb8c5e7d998b.js                                                                    56.9 kB
  ├ chunks/574-0f043d7062aa5ae1.js                                                                         55.4 kB
  └ other shared chunks (total)                                                                            1.91 kB


○  (Static)             prerendered as static content
●  (SSG)                prerendered as static HTML (uses generateStaticParams)
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
ƒ  (Dynamic)            server-rendered on demand
```

    
#### Vercel Differentiators

* Efficient Rendering (Caching, ISR)
* Observability Rendering (Analytics, Speed Insights, Logs)
* Git Integration (Automated Deployments, PR Preview)
* Security (Firewall, DDoS Insights, Challenge Mode)
* Automated Rollback (Cache, Skew Protection)

#### Development/Deployment Differences from Other Platforms/Approaches

##### Development
* `create-react-app`: Client Side Rendering (_also deprecated_)

* `remix`: Bigger ecosystem/community, platform/framework integrations

* `astro`: Full server Side Rendering support, handle complex web applications

##### Deployment

###### WordPress
* Performance
* No Bulky Backend / Database
* Flexible Content Management Options

###### Self Hosting
* Automated Deployments / Rollbacks
* Out of the Box Features
  * Edge Delivery (CDN & Compute)
  * Analytics


## Getting Started

### Development mode

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production mode

```bash
pnpm install
pnpm run build
pnpm run start
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!
