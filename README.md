# sumokoin-ui
Landing page Sumokoin

The application is based on [create-react-app](https://github.com/facebook/create-react-app/) enviroment with `--scripts-version=react-scripts-ts` for the Typescript version.

### Stack

- React
- Typescript
- React-Router
- Sass


### Setup

Clone the repository and then `npm i`.
(If there are problems with node-sass, please use `sudo npm install`).
That's all.

### Start local
If you want to start on localhost just run `npm start`

### Production
`npm run build`, that will generate an optimized production bundle to deploy.
Please be sure to follow nginx config after the build.

### Nginx

Below there is the conf for nginx that is used to avoid problems with routing and caching
```
location / {
  try_files $uri $uri/ /index.html;
}

location = /service-worker.js {
  add_header Last-Modified $date_gmt;
  add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
  if_modified_since off;
  expires off;
  etag off;
  proxy_no_cache 1;
  proxy_cache_bypass 1;
}
``` 