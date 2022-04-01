This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Introduction
What you will learn
What you will build
What Packages you will use
Install Tools
VS Code
Chrome
Node.js
MongoDB
Create Next App
npx create-next-app
add layout component
add header, main and footer
Add Styles
add css to header, main and footer
Fix SSR Issue on MaterialUI
add \_documents.js
add code to fix styling issue
List Products
add data.js
add images
render products
Add header links
Add cart and login link
use next/link and mui/link
add css classes for header links
Route Product Details Page
Make Product cards linkable
Create /product/[slug] route
find product based on slug
Create Product Details Page
Create 3 columns
show image in first column
show product info in second column
show add to cart action on third column
add styles
Add MaterialUI Theme
create theme
use theme provider
add h1 and h2 styles
set theme colors
Create Application Context
define context and reducer
set darkMode flag
create store provider
use it on layout
Connect To MongoDB
install mongodb
install mongoose
define connect and disconnect
use it in the api
Create Products API
create product model
seed sample data
create /api/products/index.js
create product api
Fetch Products From API
use getServerSideProps()
get product from db
return data as props
use it in product screen too
Implement Add to cart
define cart in context
dispatch add to cart action
set click event handler for button
Create Cart Screen
create cart.js
redirect to cart screen
use context to get cart items
list items in cart items
Use Dynamic Import In Cart Screen
Use next/dynamic
Wrap cart in dynamic with out ssr
Update Remove Items In Cart
Implement onChange for Select
Show notification by notistack
implement delete button handler
