# Client Page

## Contains
- Data table for client info.
- Form for adding new clients
- Performing a GET request to `localhost:3000/api/clients` endpoint.
- POST request performed on `localhost:3000/api/clients/post` endpoint.

## Components
- Data Table (Pagination, search, filters, ability to remember search filters next time, view functionality)
- Form (Proper error handling of user input with proper user-friendly messages).

### Data table
Used shadcn UI library. Data table has features such as pagination, search, filter, and app can remember search and filters next time (used localstorage). The table has a view functionality by which user can select which rows remain visible.

Search is by email and app remembers it.

Filters (sort columns) available such as asc, desc, and hidden. App remembers it as well.

Extra options button opens a list. It contains options which allows user to copy the id of client (automatic copy to clipboard). We can set it to email as well. We can add more to this (currently set the rest to disabled).

Note: I actually encountered a bug in this UI component with its select component (bug only happens in the prod version, does not appear in dev environment). Planning to open a github issue on their github repo. Open to discuss about this bug.


### Form
Normal form with zod integrated to ensure schema is properly being followed. Flagging errors on incorrect inputs with useful error messages. 

Submit button would render a spinner when POST request is taking place. On success, the spinner is set to hidden and a toast pops up either on top or bottom right (depends on screen size), the form is also cleared and set back to default.
On failure (API failure), the spinner is set to hidden and a toast would pop up with a error message.

Cancel button would take a user back to the client table page. It also has its own toast popup.


### API Test
APIs have been tested. Proper error handling has been performed on APIs. Code surrounded by try-catch blocks with proper user messages for users on UI and proper messages for dev on console.
