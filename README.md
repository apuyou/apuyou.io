# Portfolio for apuyou

[![Netlify Status](https://api.netlify.com/api/v1/badges/42484cab-86bd-40fa-a785-974d81025092/deploy-status)](https://apuyou.io)

## Origin

This project was created using the Gatsby [_Portfolio for developers_](https://github.com/smakosh/gatsby-portfolio-dev) template.

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used on the landing page
│   │   └── theme           # Header & Footer
│   └── pages               # Pages
└── static                  # Icons, favicon & SVG illustrations
```

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

## Start Netlify dev server

Used to test serverless functions.

```bash
npx netlify-cli dev
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
