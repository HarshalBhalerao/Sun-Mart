# Products Page
Catalog for farming equipment. Performing a GET request to `localhost:3000/api/products` endpoint.

## Components
- **Carousel**: Utilized the Shadcn UI library for this component. Implemented swipable functionality, allowing the Cards to seamlessly transition to the next one automatically. At the last card, carousel returns back to the first card.
- **Loading Indicator**: For great UX.

## Design Choice
I wanted to keep it simple. I wanted a component which looks great on big screens and small alike. The arrows diappear on smaller screens and users can swipe making this a great component. This page can be divided into any grid alignment and this component can then be reused.

For example, if user clicks **More Info** icon, the component can move to the side and we can render the detailed information about the product on the right side of the screen.