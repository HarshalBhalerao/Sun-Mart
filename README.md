#  Sun (Farm Mart) 

Website for farmers to buy farming equipment 

**Tech Stack:** Next.js (React.js framework), Tailwind CSS, and shadcn UI.

> ⚠️ Internal company version: Has mock information of clients and their payments. Can mock add clients to company database


## Installation

To install, clone this repo using the command below:

```
git clone https://github.com/HarshalBhalerao/probable-octo-chainsaw.git
```

### Backend
Install Docker and run the command below.
> ⚠️ Ensure you are in the directory with docker-compose.yml file

```
docker-compose up -d
```

Now the server would be up and running at port `3030`.
For more info, visit `https://github.com/dotronglong/faker/wiki/Getting-Started-%5BDocker%5D`

### Frontend
Navigate to directory called `front-end`. And, run command:
```
npm i
npm run dev
```
This will launch the website on `localhost:3000`. Currently the website is in dev mode.

You can also launch the app by running the command below:
```
npm run build
npm run start
```
The following commands above would build and start the app in prod mode.


## Folder Structure
In `front-end` directory, there are 3 main folders: 
- `app`: Contains pages and routes (We don't have any dynamic routes in this project).
    - `(home)`: This is not a part of Next.js route, the `page.tsx` file inside is the default homepage.
    - `__tests__`: Contains tests for APIs.
    - `clients`: Part of our Next.js route. Can be searched by going to `localhost:3000/clients`. Contains our **table with pagination, filtering and search functionality**.
        - `add`: Part of our Next.js route. Can be searched by going to `localhost:3000/clients/add`. This contains the **form for adding user** (mock POST don't actually add user, would be possible if we had a real DB).
    - `products`: Part of our Next.js route. Can be searched by going to `localhost:3000/products`. Contains **carousel** which automatically changes cards and these cards have info about our farming equipments.
- `components`: Contains a mixture of reusable and custom made components.
- `lib`: Utility files.

## Testing APIs
We have 3 APIs:
- GET Client
- POST Client
- GET Product

Mock files are available in mocks folder. To run tests
```
npm run test
```

## Philosophy
Built the app keeping these things in mind:
- Build for performance: By default Next.js allows Server-Side Rendering(SSR), helps with Search Engine Optimization (SEO). I have used this to my advantage and rendered pages dynamically. I have practised code-splitting ensuring peak-performance.
- User friendly: Simple design with consistency and user-friendly interface. Have system, dark and light modes for users.
- Handled errors where things could go wrong.
- Responsive design for all browser viewports.

## Detailed Information about each page
- [Landing Page](https://github.com/HarshalBhalerao/probable-octo-chainsaw/blob/develop/docs/LandingPage.md)
- [Clients Page](https://github.com/HarshalBhalerao/probable-octo-chainsaw/blob/develop/docs/ClientPage.md)
- [Products Pages](https://github.com/HarshalBhalerao/probable-octo-chainsaw/blob/develop/docs/ProductsPage.md)

### Other components
- Navbar
- Sidebar

## Landing Page (Simple Landing Page with Spline 3D moving Earth)
### Dark Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 06 14 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/b3e835b2-532a-4734-8672-9a0873b895cb">

### Light Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 06 04 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/02b255de-7a5d-4167-93cc-0f974a7a0e3c">

## Product Page (Carousel)
### Dark Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 10 34 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/5fb580c9-65b0-4ccf-9fb4-e9911afcf2a2">

### Light Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 10 44 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/4c9b8dfa-9107-4794-96c2-10c1d7994e44">

## Client Page (Table)
### Dark Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 12 34 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/ec7ab0c5-b2a2-49b8-9b4d-281b3e01e32e">

### Light Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 12 22 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/279fe4c7-2bcb-4ed5-a3a3-5e074add3084">

## Client Page (Form: Add new client)
### Dark Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 13 41 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/db584151-16bb-4b3b-ba42-6d0ff21b13e1">

### Light Mode
<img width="1512" alt="Screen Shot 2024-01-22 at 12 13 47 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/ed99ca88-5982-4a67-922a-e2a07dd75690">

## For Mobile devices
### Landing Page
<img width="498" alt="Screen Shot 2024-01-22 at 12 17 52 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/7401ba15-ab59-49df-8a08-b5e6d4deefa9">

### Products Page
<img width="498" alt="Screen Shot 2024-01-22 at 12 18 02 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/dd433a4f-3690-43a0-9d5d-ee7917a12465">

### Client Page (Table, set fixed min-width for better view)
<img width="498" alt="Screen Shot 2024-01-22 at 12 18 29 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/db6836fa-0ddd-4bb5-ba2a-713767471374">

### Client Page (Form to add client)
<img width="498" alt="Screen Shot 2024-01-22 at 12 17 23 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/6c15da31-c4da-4e4d-b467-26f61e902d8a">

### Sidebar
<img width="498" alt="Screen Shot 2024-01-22 at 12 17 42 AM" src="https://github.com/HarshalBhalerao/probable-octo-chainsaw/assets/70837272/39fabe74-5b43-4b5c-9754-c3420b621002">



