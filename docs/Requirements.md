**Assessment for Junior Software Developer**

**Task: Vue.js Application with Mocked Backend API Integration**

**Requirements:**

1. **Setup:**
    - Fork this GitHub repository: [Backend API](https://github.com/carlsteenkamp/probable-octo-chainsaw.git)
    - Create a new Vue.js project using Vue CLI or any other preferred method.

2. **Vue.js Application:**
    - Create a single-page application (SPA) with Vue.js.
    - Include at least two components (e.g., one for displaying data and one for form/input).
    - Use Vue Router to navigate between different views (if applicable).

3. **Backend API Integration:**
    - The backend API is available at `localhost:3030` when you run the docker container.
    - Implement functionality to fetch data from the API and display it in your Vue.js application. 
      - Have a look at the `mocks` folder to see what paths and requests are available. Feel free to add more data to these mocks.
      - New json files can be added with different mock data if you wish
    - Display the fetched data in a meaningful way, using appropriate Vue.js features (e.g., v-for for lists).
    - Implement a form or input component that allows users to interact with the backend API (e.g., submitting new data).

4. **Error Handling:**
    - Implement error handling for API requests. Display meaningful error messages to the user in case of API failures.

5. **Additional Features (Optional, for bonus points):**
    - Implement pagination for the displayed data.
    - Add loading indicators to show when data is being fetched.
    - Implement a feature to filter or search through the displayed data.
    - bonus, bonus points if the app can remember search filters next time
    - At Elmer's we make use of `https://primevue.org/`. Would be nice if you could also use it.

6. **Documentation:**
    - Update README.md explaining how to run the Vue.js and Backend applications locally.
    - Include any additional instructions for the developer to understand the code and project structure.

**Evaluation Criteria:**

The assessment will be evaluated based on the following criteria:

1. **Vue.js Proficiency:**
    - Effective use of Vue.js features and components.
    - Proper use of Vue Router for navigation.

2. **Backend API Integration:**
    - Successful integration with the provided backend API.
    - Proper handling of API responses and errors.

3. **Code Quality:**
    - Well-organized and readable code.
    - Effective use of Vue.js best practices.

4. **Functionality:**
    - Successful implementation of data display and interaction features.
    - Implementation of additional features for bonus points (if applicable).

5. **Documentation:**
    - Clear and concise README.md.
    - Additional documentation or comments within the code as needed.
    - Clear instructions on how to run it

**Submission:**
Use git and approach making changes to code the same way you would have in a professional environment. 
You would have worked on your own feature branch, so open a pull request into master / develop branch on your forked repository.
Add carls@elmersmfg.com as reviewer on a pull request please.
