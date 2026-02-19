# TaskFlow

A modern, accessible task management application built with React 19 and designed to help users organize and track their daily tasks efficiently.

**Author:** Sotunde Emmanuel ([@Adefenwa](https://github.com/Adefenwa))

**Live Demo:** [https://taskk-flow.vercel.app/](https://taskk-flow.vercel.app/)

**Repository:** [Github/Adefenwa/todo-app](https://github.com/Adefenwa/todo-app)

---

## Project Description

TaskFlow is a feature-rich todo application that demonstrates modern React development practices and accessibility standards. The application provides a clean, intuitive interface for managing tasks with robust filtering, search capabilities, and comprehensive error handling.

Built as part of a frontend engineering assessment, TaskFlow showcases proficiency in React ecosystem tools, API integration, state management, and accessible web development.

---

## Features

### Core Features

- **User Authentication**: Secure registration and login system with JWT token-based authentication
- **Task List with Pagination**: Browse tasks with server-side pagination (10 items per page) and intuitive navigation controls
- **Task Detail View**: Dedicated pages for viewing comprehensive information about individual tasks
- **Full CRUD Operations**: Create, read, update, and delete tasks with real-time updates
- **User-Specific Tasks**: Users only see and manage their own tasks (filtered by ownership)
- **Search Functionality**: Real-time search to filter tasks by title/name
- **Status Filtering**: Filter tasks by completion status (All, To Do, In Progress, Done)
- **Modal-Based Forms**: Clean, accessible modals for creating and editing tasks
- **Error Handling**: Comprehensive error boundaries to gracefully handle runtime errors
- **Accessibility**: WCAG AA compliant with proper semantic HTML, ARIA attributes, and keyboard navigation support
- **Responsive Design**: Mobile-first design that works seamlessly across all device sizes
- **Loading States**: Proper loading indicators using React Suspense for improved user experience
- **404 Page**: Custom not found page for invalid routes

### Technical Features

- React 19 with functional components and hooks
- Suspense for data fetching and code splitting
- Error boundaries for error recovery
- React Router for client-side routing
- Tanstack Query for efficient data fetching, caching, and mutations
- Lazy-loaded components for optimized performance
- **JWT-based authentication with localStorage persistence**
- **Protected routes with automatic login redirect**
- **CRUD operations with optimistic updates**
- **Client-side filtering by task ownership**
- **SEO optimization with dynamic meta tags and titles**
- **Page-specific meta descriptions for better search engine visibility**
- Semantic HTML5 structure
- Accessible form controls and navigation

---

## Technology Stack

### Core Technologies

**React 19**

- Chosen for its component-based architecture, hooks ecosystem, and modern features like Suspense
- Enables building reusable, maintainable UI components
- Excellent developer experience with fast refresh and debugging tools

**React Router v6**

- Industry-standard routing solution for React applications
- Provides declarative routing with nested routes support
- Enables clean URL structure and browser history management

**Tanstack Query (React Query)**

- Powerful data synchronization library for React
- Automatic caching, background refetching, and request deduplication
- Simplifies complex async state management
- Built-in support for loading states, error handling, and optimistic updates
- Works seamlessly with React Suspense

**Tailwind CSS**

- Utility-first CSS framework for rapid UI development
- Ensures consistent design system across the application
- Mobile-first responsive design utilities
- Smaller bundle size compared to traditional CSS frameworks
- Easy to maintain and customize

### Supporting Libraries

**unHead**

- Modern document head management for React
- Dynamic meta tags and title updates per route
- SEO optimization with minimal overhead
- Better performance than traditional solutions like React Helmet
- Server-side rendering compatible

**Lucide React**

- Modern, consistent icon set
- Tree-shakeable for optimal bundle size
- Accessible SVG icons

**React Hook Form**

- Performant form validation and handling
- Minimal re-renders for better performance
- Simple API with excellent TypeScript support

**React Error Boundary**

- Robust error handling solution
- Provides error recovery mechanisms
- Better user experience when errors occur

---

## Setup Instructions

### Prerequisites

- Node.js 18+ or Bun 1.0+
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd taskflow
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

**Key Dependencies:**

- React 19
- React Router v6
- Tanstack Query (React Query)
- Tailwind CSS
- unHead (for SEO)
- React Error Boundary
- Lucide React (icons)

3. Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using bun
bun run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

### Environment Setup

No environment variables are required for basic functionality. The application connects to the public API at `https://api.oluwasetemi.dev`.

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with hot module replacement at `http://localhost:5173`

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist` folder

### Preview

```bash
npm run preview
```

Previews the production build locally

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality and adherence to coding standards

---

## Project Structure

```
taskflow/
├── public/              # Static assets
├── src/
│   ├── api/            # API client and endpoint functions
│   │   ├── client.js   # Base API client with auth headers
│   │   ├── tasks.js    # Task CRUD operations
│   │   └── auth.js     # Authentication endpoints
│   ├── components/     # Reusable components
│   │   ├── TaskList.jsx
│   │   ├── CreateTaskModal.jsx
│   │   ├── EditTaskModal.jsx
│   │   ├── Loading.jsx
│   │   └── ErrorFallback.jsx
│   ├── pages/          # Route pages
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── TaskDetail.jsx
│   │   ├── ErrorPage.jsx
│   │   └── ErrorTest.jsx
│   ├── lib/            # Utility functions
│   │   └── auth.js     # Auth helper functions
│   ├── App.jsx         # Root component with routes
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Key Features Implementation

### API Integration

The application integrates with a RESTful API using Tanstack Query for efficient data fetching:

- **Automatic Caching**: Reduces unnecessary API calls by caching responses
- **Background Refetching**: Keeps data fresh by refetching in the background
- **Optimistic Updates**: Provides instant feedback for better UX
- **Error Retry**: Automatically retries failed requests

### Pagination

Server-side pagination implementation:

- Fetches only the required data per page (10 items)
- Previous/Next navigation with disabled states at boundaries
- Page number display with total pages count
- Accessible navigation with proper ARIA labels

### Search and Filtering

Client-side filtering for instant results:

- Real-time search as you type
- Filter by task status (All, To Do, In Progress, Done)
- Combines search and filter criteria
- Accessible form controls with proper labels

### Accessibility Features

- Semantic HTML5 elements (main, nav, article, etc.)
- ARIA attributes for screen readers (aria-label, aria-live, role)
- Keyboard navigation support
- Focus management
- Color contrast compliance (WCAG AA)
- Alt text for images and icons
- Skip navigation links
- Descriptive link text

### Error Handling

Comprehensive error handling strategy:

- Error Boundary catches React component errors
- Query error states for API failures
- Custom 404 page for invalid routes
- Test route to demonstrate error boundary functionality
- User-friendly error messages
- Recovery options (retry, go back)

### SEO Implementation

Dynamic SEO optimization using unHead:

**Dynamic Page Titles**

- Each route has a unique, descriptive title
- Format: "Page Name - TaskFlow"
- Updates automatically on navigation

**Meta Descriptions**

- Custom descriptions for each page
- Optimized for search engine snippets
- Includes relevant keywords and context

**Implementation Examples:**

```javascript
// Task List Page
useHead({
  title: "Task List - TaskFlow",
  meta: [
    { name: "description", content: "View and manage your tasks in TaskFlow." },
  ],
});

// Task Detail Page
useHead({
  title: `${task?.name || "Task Details"} - TaskFlow`,
  meta: [
    {
      name: "description",
      content: `View details for: ${task?.name || "task"}`,
    },
  ],
});

// Home Page
useHead({
  title: "TaskFlow - Modern Task Management",
  meta: [
    {
      name: "description",
      content: "TaskFlow is a modern task management app.",
    },
  ],
});
```

**Benefits:**

- Improved search engine rankings
- Better social media sharing previews
- Enhanced user experience with clear browser tab titles
- Dynamic updates based on content (e.g., task name in detail page)

### Authentication Implementation

JWT-based authentication with secure token management:

**Registration Flow:**

```javascript
// User fills registration form
register({ name, email, password })
  ↓
// API validates and creates account
  ↓
// Success: Redirect to login page
navigate("/login")
```

**Login Flow:**

```javascript
// User provides credentials
login({ email, password })
  ↓
// API validates and returns token + user data
{ user: {...}, accessToken: "...", refreshToken: "..." }
  ↓
// Store in localStorage
localStorage.setItem("authToken", data.accessToken)
localStorage.setItem("user", JSON.stringify(data.user))
  ↓
// Reload to sync state
window.location.reload()
```

**Protected Routes:**

```javascript
// Check authentication before rendering
const currentUser = getCurrentUser();

if (!currentUser) {
  navigate("/login");
  return null;
}

// Render protected content
```

**Token Injection:**

```javascript
// API client automatically adds token to requests
const token = localStorage.getItem("authToken");

if (token) {
  headers.Authorization = `Bearer ${token}`;
}
```

**Features:**

- Secure password requirements (uppercase, special characters)
- Inline error messages for better UX
- Automatic login redirect for protected routes
- Token persistence across page reloads
- Logout with state cleanup

### CRUD Operations

Full create, read, update, delete functionality with Tanstack Query mutations:

**Create Task:**

```javascript
const mutation = useMutation({
  mutationFn: (taskData) => createTask(taskData),
  onSuccess: () => {
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey[0] === "tasks",
    });
    navigate("/tasks");
  },
});

// Usage: mutation.mutate({ name, description, status })
```

**Update Task:**

```javascript
const mutation = useMutation({
  mutationFn: (taskData) => updateTask(task.id, taskData),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["task", task.id] });
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    onClose();
  },
});

// PATCH request preserves unchanged fields
```

**Delete Task:**

```javascript
const mutation = useMutation({
  mutationFn: (taskId) => deleteTask(taskId),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
    navigate("/tasks"); // Redirect from detail page
  },
});

// Includes confirmation dialog for safety
```

**Features:**

- Modal-based forms for create/edit
- Pre-populated fields for editing
- Automatic cache invalidation
- Optimistic UI updates
- Confirmation dialogs for destructive actions
- Loading states during mutations
- Error handling with user-friendly messages

**User Ownership:**

```javascript
// Filter tasks by current user
const filteredTasks =
  data?.tasks.filter((task) => {
    return task.owner === currentUser?.id;
  }) || [];
```

Users can only see and manage their own tasks, ensuring data privacy and security.

---

## Screenshots

### Task List Page

[TaskList](./src/assets/screenshots/task-list.png)

### Task Detail Page

[TaskDetail](./src/assets/screenshots/task-detail.png)

### Search and Filter

[Search&Filter](./src/assets/screenshots/search-filering.png)

### Responsive Design

[Mobile-View](./src/assets/screenshots/mobile-view.png)

### Error Handling

[Error-Test](./src/assets/screenshots/error-test.png)

---

## Development Challenges and Solutions

This section documents key challenges encountered during development and their solutions, providing valuable insights for future developers.

### Challenge 1: Authentication Token Field Name Mismatch

**Problem:**  
The application was unable to authenticate API requests after login. The token was being saved as `undefined` in localStorage, causing all protected operations (create, update, delete) to fail with 401 Unauthorized errors.

**Root Cause:**  
The login API returned the authentication token in a field named `accessToken`, but the code was attempting to access it as `data.token`. This mismatch resulted in `undefined` being stored.

```javascript
// API Response
{ user: {...}, accessToken: "...", refreshToken: "..." }

// Wrong implementation
localStorage.setItem("authToken", data.token);  // undefined!

// Correct implementation
localStorage.setItem("authToken", data.accessToken);  // ✅
```

**Solution:**

- Used `console.log` to inspect the actual API response structure
- Identified the correct field name (`accessToken`)
- Updated all authentication code to use the correct field name

**Lesson Learned:**  
Never assume API response structure. Always inspect actual responses and handle field names explicitly. Consider adding TypeScript for type safety.

---

### Challenge 2: Tasks Created Without Owner Assignment

**Problem:**  
Newly created tasks had `owner: null`, causing them to not appear in the filtered task list even though they were successfully created.

**Root Cause:**  
The authentication token wasn't being included in the request headers when creating tasks, so the API couldn't identify which user was creating the task.

**Debugging Process:**

1. Added console logs to verify token was in localStorage: `undefined`
2. Checked token immediately after login: Present ✅
3. Checked token when modal opened: `undefined` ❌
4. Discovered that React navigation (`navigate("/")`) doesn't trigger a page reload
5. Without reload, components couldn't read the newly saved token from localStorage

**Solution:**  
Added `window.location.reload()` after login to ensure fresh state:

```javascript
onSuccess: (data) => {
  localStorage.setItem("authToken", data.accessToken);
  localStorage.setItem("user", JSON.stringify(data.user));
  navigate("/");
  window.location.reload();  // Force reload to sync localStorage
},
```

**Alternative Approaches Considered:**

- Context API for auth state (more complex)
- Custom event listeners for localStorage changes (overkill)
- Navigate directly to `/tasks` instead of homepage (UX preference)

**Lesson Learned:**  
localStorage changes don't trigger React re-renders. When authentication state changes, either force a reload or use React state management (Context, Redux) for auth.

---

### Challenge 3: React Query Cache Invalidation Not Working

**Problem:**  
After creating a new task, the task list wouldn't update automatically even though `invalidateQueries` was called.

**Root Cause:**  
Query key mismatch. The task list query used `["tasks", page]` but invalidation targeted only `["tasks"]`.

```javascript
// Query in TaskList
const { data } = useQuery({
  queryKey: ["tasks", page], // Key includes page number
  queryFn: () => getTasks(page, 10),
});

// Invalidation in CreateTaskModal (WRONG)
queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Doesn't match!

// Correct invalidation
queryClient.invalidateQueries({
  predicate: (query) => query.queryKey[0] === "tasks", // Matches all task queries
});
```

**Solution:**  
Used a predicate function to invalidate all queries starting with `"tasks"`, regardless of page number.

**Lesson Learned:**  
When using dynamic query keys (with parameters like page, id), use predicates or partial matching for invalidation.

---

### Challenge 4: DELETE Endpoint Returns Empty Response

**Problem:**  
Application crashed with error: "Failed to execute 'json' on 'Response': Unexpected end of JSON input" when deleting tasks.

**Root Cause:**  
The DELETE endpoint returns HTTP 204 No Content with an empty body, but the API client was always trying to parse responses as JSON.

```javascript
// Original problematic code
export async function apiClient(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {...});
  if (!response.ok) throw new Error(...);
  return response.json();  // ❌ Fails on empty response!
}

// Fixed version
export async function apiClient(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {...});
  if (!response.ok) throw new Error(...);

  if (response.status === 204) {
    return { success: true };  // Handle empty response
  }

  return response.json();  // Parse JSON only if there's content
}
```

**Solution:**  
Added a check for 204 status codes before attempting to parse JSON.

**Lesson Learned:**  
Always handle different HTTP status codes appropriately. DELETE, PUT, and PATCH operations often return 204 No Content.

---

### Challenge 5: Error Boundaries Not Catching Errors

**Problem:**  
Test error button didn't trigger the ErrorBoundary, even with a properly configured error boundary component.

**Root Cause:**  
Error Boundaries in React only catch errors during rendering, not in event handlers.

```javascript
// This DOESN'T work
<button
  onClick={() => {
    throw new Error("Test");
  }}
>
  Trigger Error
</button>;

// This WORKS
const [shouldError, setShouldError] = useState(false);

if (shouldError) {
  throw new Error("Test error!");
}

<button onClick={() => setShouldError(true)}>Trigger Error</button>;
```

**What Error Boundaries DON'T Catch:**

- Event handler errors (onClick, onChange, etc.)
- Asynchronous code (setTimeout, promises)
- Server-side rendering errors
- Errors in the error boundary itself

**What Error Boundaries DO Catch:**

- Errors during rendering
- Errors in lifecycle methods
- Errors in constructor

**Solution:**  
Used state to trigger errors during the render phase instead of directly in event handlers.

**Lesson Learned:**  
Use Error Boundaries for rendering errors. Use try-catch blocks for event handlers and async operations.

---

### Challenge 6: Password Validation Requirements Not Clear

**Problem:**  
Registration failed with 422 error: "Password validation failed: Password must contain at least one uppercase letter, Password must contain at least one special character."

**Solution:**

- Implemented inline error display instead of alert boxes
- Added password requirements hint below the input field
- Used controlled error state for better UX:

```javascript
const [error, setError] = useState("");

const mutation = useMutation({
  mutationFn: (userData) => register(userData),
  onError: (error) => {
    setError(error.message);  // Display inline
  },
});

// Clear error when user types
onChange={(e) => {
  setPassword(e.target.value);
  setError("");  // Clear error on input
}}

// Display error in UI
{error && (
  <p className="text-red-500 text-xs italic mt-2" role="alert">
    {error}
  </p>
)}
```

**Lesson Learned:**

- Provide clear validation requirements upfront
- Display errors inline, close to the relevant field
- Clear errors when user starts correcting them

---

### Challenge 7: Client-Side vs Server-Side Filtering

**Problem:**  
After implementing authentication, users could see ALL tasks from all users, which was a privacy issue.

**Solution:**  
Implemented client-side filtering by owner ID:

```javascript
const currentUser = getCurrentUser();

const filteredTasks =
  data?.tasks.filter((task) => {
    const isMyTask = task.owner === currentUser?.id; // Ownership filter
    const matchesSearch = task.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    return isMyTask && matchesSearch && matchesStatus; // All conditions must pass
  }) || [];
```

**Why Client-Side:**

- API returns all tasks (no server-side filtering available)
- Quick implementation
- No additional API endpoints needed
- Works well for reasonable dataset sizes

**Potential Improvement:**  
In production with thousands of tasks, server-side filtering would be more efficient.

**Lesson Learned:**  
Choose filtering strategy based on dataset size and API capabilities. Client-side works for small to medium datasets; server-side is essential for large datasets.

---

### Challenge 8: React Router Navigation Not Syncing State

**Problem:**  
After login, navigating to homepage showed "Register/Login" buttons instead of "Create/View Todos" buttons, even though user was authenticated.

**Root Cause:**  
React Router's `navigate()` doesn't reload the page, so components don't re-read from localStorage.

**Solution:**  
Combined navigation with page reload for authentication state changes:

```javascript
navigate("/");
window.location.reload(); // Ensures fresh read from localStorage
```

**Trade-offs:**

- **With reload:** Slower, but guarantees fresh state
- **Without reload:** Faster, but requires state management solution

**Lesson Learned:**  
For authentication flows, either use React state management (Context, Redux) or force page reload after login/logout. Don't rely on localStorage alone without reload.

---

## Key Takeaways

1. **Always Inspect API Responses:** Don't assume field names; verify actual response structure
2. **Handle All HTTP Status Codes:** Different endpoints return different status codes; handle each appropriately
3. **Understand React Query Cache Keys:** Use predicates for flexible cache invalidation
4. **Know Error Boundary Limitations:** Use try-catch for event handlers, Error Boundaries for rendering errors
5. **Provide Clear Error Messages:** Display validation errors inline with helpful guidance
6. **Consider localStorage Limitations:** React doesn't track localStorage changes; reload or use state management
7. **Debug Systematically:** Use console.log strategically to trace data flow
8. **Test Edge Cases:** Empty responses, missing fields, null values, etc.

---

## Future Improvements

Given more development time, the following features would enhance the application:

### High Priority

1. **Server-Side Filtering and Search**
   - Move filtering logic to API for better performance at scale
   - Implement server-side search with debouncing
   - Add indexed database search for large datasets
   - Pagination that preserves filters and search

2. **Optimistic Updates**
   - Instant UI feedback for create/update/delete operations
   - Automatic rollback on API failures
   - Reduce perceived latency

3. **Better State Management**
   - Replace localStorage + reload with React Context for auth
   - Eliminate page reloads for better UX
   - Centralized auth state across components

4. **Enhanced Error Handling**
   - More specific error messages based on error codes
   - Retry mechanisms for failed requests
   - Offline error queue

### Medium Priority

5. **Dark Mode Support**
   - Toggle between light and dark themes
   - Respect system preferences
   - Persistent theme selection in localStorage

6. **Task Categories and Tags**
   - Organize tasks by categories
   - Add multiple tags per task
   - Filter by categories and tags
   - Color-coded organization

7. **Due Dates and Reminders**
   - Set due dates for tasks
   - Visual indicators for overdue tasks
   - Browser notifications for upcoming deadlines
   - Calendar view integration

8. **Advanced Filtering and Sorting**
   - Date range filtering
   - Priority-based filtering
   - Saved filter presets
   - Sort by multiple criteria (date, priority, status)
   - Combined filters with AND/OR logic

9. **Bulk Operations**
   - Select multiple tasks
   - Bulk status updates
   - Bulk delete with confirmation
   - Bulk tag assignment

### Lower Priority

10. **Task Analytics**
    - Completion statistics
    - Productivity charts
    - Task history and trends
    - Export functionality (CSV, PDF)

11. **Progressive Web App (PWA)**
    - Offline support with service workers
    - App installation capability
    - Background sync when reconnected
    - Push notifications

12. **Collaboration Features**
    - Share tasks with other users
    - Real-time updates via WebSocket
    - Task assignments
    - Comments and activity history
    - @mentions in descriptions

13. **Enhanced UI/UX**
    - Drag-and-drop task reordering
    - Keyboard shortcuts (Ctrl+N for new task, etc.)
    - Customizable themes and colors
    - Smooth animations and transitions
    - Quick actions on hover

14. **Advanced Features**
    - Subtasks and task dependencies
    - Recurring tasks
    - Task templates
    - Time tracking
    - File attachments
    - Integration with calendar apps

### Technical Improvements

15. **Performance Optimization**
    - Implement virtual scrolling for large lists
    - Image lazy loading
    - Code splitting at component level
    - Bundle size optimization
    - Reduce re-renders with React.memo

16. **Testing**
    - Unit tests with Vitest
    - Integration tests with React Testing Library
    - E2E tests with Playwright
    - Visual regression testing

17. **DevOps**
    - CI/CD pipeline
    - Automated deployments
    - Error tracking (Sentry)
    - Performance monitoring
    - A/B testing framework

18. **Accessibility Enhancements**
    - Screen reader testing and improvements
    - High contrast mode
    - Reduced motion preference
    - Voice command support
    - Multi-language support (i18n)

19. **Security Improvements**
    - Implement refresh token rotation
    - Add CSRF protection
    - Rate limiting on auth endpoints
    - Content Security Policy headers
    - Security audit and penetration testing

20. **Developer Experience**
    - TypeScript migration for type safety
    - Storybook for component documentation
    - ESLint and Prettier configuration
    - Husky pre-commit hooks
    - Comprehensive API documentation

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

## Performance Considerations

- Code splitting with React.lazy for optimal initial load
- Lazy loading of route components
- Efficient re-rendering with React Query caching
- Optimized bundle size with tree-shaking
- Memoization of expensive computations

---

## Accessibility Compliance

TaskFlow adheres to WCAG 2.1 Level AA standards:

- Keyboard navigation throughout the application
- Screen reader compatibility
- Sufficient color contrast ratios
- Semantic HTML structure
- ARIA labels and landmarks
- Focus indicators
- Error identification and suggestions

---

## License

This project is developed as part of a frontend engineering assessment.

---

## Acknowledgments

- API provided by [Oluwasetemi](https://api.oluwasetemi.dev)
- Icons by Lucide React
- Built with Vite for optimal development experience

---

## Contact

**Sotunde Emmanuel**

- GitHub: [@Adefenwa](https://github.com/Adefenwa)
- Email: [Sotunde](https://mailto:sotundeemmanuel@gmail.com)

For questions, feedback, or contributions, please open an issue in the repository.
