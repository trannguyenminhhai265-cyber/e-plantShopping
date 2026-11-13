# Paradise Nursery Shopping Application

**Paradise Nursery** is an online plant shop built with **React** and **Redux Toolkit**.
It lets customers browse houseplants by category, add them to a shopping cart, and manage
their cart before checkout.

## Features

- **Landing page** with a full-screen background image, the company name, a short
  company description (About Us) and a **Get Started** button.
- **Product listing page** with 18 unique houseplants grouped into three categories
  (Air Purifying, Aromatic Fragrant, Insect Repellent). Each plant shows a thumbnail,
  name, description and price.
- **Add to Cart** buttons that add the plant to the cart, become disabled once the plant
  is in the cart, and increment the cart icon count.
- **Navbar** shown on both the product listing and cart pages, with links to Home,
  Plants and Cart, and a cart icon showing the total number of items.
- **Shopping cart page** showing each plant's thumbnail, name, unit price and subtotal,
  the total cart amount, buttons to increase/decrease quantity, a delete button, a
  **Checkout** button ("Coming Soon") and a **Continue Shopping** button.

## Tech stack

- React 18 + Vite
- Redux Toolkit (`createSlice`) and React Redux

## Project structure

```
src/
  App.jsx          Landing page and page switching
  App.css          Landing page styles (background image)
  AboutUs.jsx      Company details
  ProductList.jsx  Navbar + product listing
  CartItem.jsx     Shopping cart page
  CartSlice.jsx    Redux slice for the cart (addItem, removeItem, updateQuantity)
  store.js         Redux store
  main.jsx         Entry point
```

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build`; deploy to GitHub Pages with `npm run deploy`.
