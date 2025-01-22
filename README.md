# Order Tracking App

This is a simple order tracking app built with React, TypeScript, and Vite. It allows you to track the status of your orders and get updates on their progress.

## Features

- Track your orders
- Get updates on their progress
- View order details
- Search for orders using the search bar using tracking number
- Toggle between light and dark themes
- Fully reponsive UI that handles different breakpoints for mobile (default), tablet, and desktop

## Technologies

- React
- TypeScript
- Vite
- SCSS

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## Usage

1. Enter the tracking number in the search bar
2. Click the search button or press enter
3. The order details will be displayed if the tracking number is valid

## Deployment

The Project is integrated with and deployed on Cloudflare Pages at https://bosta-fe-task.pages.dev/.

## Other Notes

- The **localization feature was not implemented** due to time constraints.
- Similarly, the theme toggle feature is only present as a proof of concept and is could have used more work to get the colors right. the feature is present nonetheless.
- Sometimes, the data returned from the API is not consistent with the data in the mockup. This is due to the fact that the API is a mock API and the data is not always consistent. Hence at certain points, I assumed that only the data in the mockup is correct and used it as such. For example, some orders had no "TransitEvents" and hence I could not display any tracking details.
- A lot of effort was exerted into implementing the search feature correctly and consistently. This proved to be very difficult given how my solution is structured. In the end, I couldn't find a way to manage state between the search bar in the main screen and the searchbar in the modal without introducing a lot of complexity. **The search icon in the navbar is not clickable.** I needed more time to figure out how to efficiently handle this issue.
- A modal component was implemented but it is not used anywhere in the project (as of writing this).
