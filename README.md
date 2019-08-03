# gatsby-starter-etw (pre-alpha)
[Gatsby](https://www.gatsbyjs.org/) starter that uses [Tailwind CSS](https://tailwindcss.com/) as a *design system engine* and
[emotion](https://emotion.sh/) as our css-in-js solution, which automatically purges our styles as well.

Content is retrieved from a WordPress instance. To successfully start a dev server, you should copy yourself an env file with 
`cp env.example .env` and enter the url of a WordPress installation with a publicly queryable REST-API.

Gatsby-starter-etw uses TypeScript with the default config of create-react-app. 

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/Formwerdung/gatsby-starter-etw
```

## Running in development
`gatsby develop`
