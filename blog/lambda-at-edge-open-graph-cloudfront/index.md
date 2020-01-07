---
title: Generating dynamic Open Graph for an SPA with AWS CloudFront
date: 2020-01-06T22:12:14.136Z
description: Hello World
path: /dynamic-open-graph-spa-cloudfront
---

# Adding dynamic Open Graph markup in a React app served by CloudFront

## Motivations

Open Graph markup allows social networks to display a preview of a website when a user shares a link.

<!-- Image of Facebook Open Graph preview -->

To generate this preview, I am using the following, added in the `<head>` portion of the page:

```html
<meta property="og:title" content="Buda Gallery" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://buda.gallery/" />
<meta property="og:image" content="https://buda.gallery/banner.png" />
```

Usually, the crawler that downloads the page to generate this preview does not support JavaScript. If you are building a React app with dynamic content, you may have some pages at specific URLs that need dynamic data in the Open Graph markup.

In my case, I am serving photo galleries at https://buda.gallery/g/GALLERY_ID. When the page is loaded, an API is called to download the gallery's data and the page is rendered. Obviously, when a user shares a link to his gallery, we want the gallery name to appear in the preview.

A frequent way to fix this is to use a prerendering service. However, this would probably need you to add an extra service between S3 and CloudFront.

In this post, we will use Lambda@Edge to run some JavaScript when a specific page is served. We'll consider that your CloudFront distribution is already configured correctly to serve your app.

## Adding the original markup

First of all, we'll add some the markup in React's HTML template. This is the page that is served when a URL is retrieved that is returned when your app is loaded. This is done by editing `public/index.html`. Add the following before `</head>`, replacing them with your own values:

```html
<meta property="og:title" content="Buda Gallery" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://buda.gallery/" />
<meta property="og:image" content="https://buda.gallery/banner.png" />
```

<!-- Maybe don't add that in fact and just push before </head> -->

Please note that `og:type` has a limited set of allowed values, you can't just set it to anything.

On dynamic pages, we will replace these tags with the custom values. They will however appear on static pages or if there is an error, so be sure to make them generic enough.

## Creating the function

Go to the [Lambda](https://console.aws.com) console and switch to the **U.S. North East (Virginia)** region. Lambda@Edge functions will be propagated accross all regions to support CloudFront's distributed nature, but they are initially designed in the `us-east-1` region.

- Node8
- 128MB
- 5sec

In this function, we will look at the request URI. If it matches our dynamic pages, we'll do some special processing. Otherwise, we'll just return the request data so that the request is processed normally.

When we have a dynamic page, we'll want to get the content of `index.html` and replace the content of the tags.

In the end, a simple function could look like this:

```javascript
// Get gallery key from query string
const key = 'blabla';
// Get gallery details
fetch(`https://api.buda.gallery/${key}`);
// Get app page index.html
getS3();
// Add/replace Open Graph tags
```

Update rights for the role.

Deploy to CloudFront.

It takes around 20 minutes before the distribution is marked as deployed, but you can usually try to call it before it has finished.

If you need to update your code, first go back to the original function (not the function > version). Then save it, click add trigger again and select the previously created configuration.

## Testing

Just call the page and look at the content returned.

If you have made changes but they are not re

## Fine-tuning

Check that the cache works
