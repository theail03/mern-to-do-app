# To Do App

## Notes

For Authorized redirect URIs in Google Cloud, try writing the URL using http instead of https, in case https doesn't work.

The app uses cookies for authentication, so a custom domain with subdomains for both the API and the client is needed. Cookies from the application don't work in popular deployment sites like Render and Vercel without using custom domains.

Currently both the api and client are deployed in Vercel.

The custom domain 793407.xyz from Namecheap is configured in the Vercel deploy. The app is accessible at https://app.793407.xyz and the api at https://api.793407.xyz.

Use either `npm start` or `yarn start` to run the api and client locally.
