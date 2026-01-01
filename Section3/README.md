## Section 3 NextJS Essentials (App Router)
86. Module Introduction: An overview of what will be covered in the NextJS Essentials (App Router) section.

87. Starting Setup: Instructions on getting the initial project environment ready for development.

88. Understanding File-based Routing & React Server Components: An introduction to how Next.js handles navigation through the file system and a look at the core concept of Server Components.

89. Adding Another Route via the File System, Maximilian Schwarzmüller demonstrates that you create a new route by adding a folder to the app directory and placing a page.js file inside it to define the UI.

90. Navigating Between Pages - Wrong & Right Solution, how to link routes correctly in Next.js by using the LINK element.

91. Working with reserved files like layouts and pages, layouts: 
In a Next.js project using the App Router, a layout page is a reserved file (layout.js) that defines a common UI shell—such as headers or footers—shared across multiple pages to maintain state and prevent unnecessary re-renders during navigation. In a Next.js project, the Root Layout is the top-level shell that must contain <html> and <body> tags for the entire application, while Nested Layouts are created in sub-folders to apply specific UI (like a sidebar) only to the routes within that particular folder.
pages: n a Next.js project, a page is a reserved file (page.js) that defines the unique content and UI for a specific route, acting as the innermost component nested within your layouts. which is incharge of handling the render of what content on each page.

92. how to use the children prop within a Layout to wrap multiple pages with shared UI elements, ensuring a consistent structure across different routes. and the difference between pages and components 

93. Understanding the different reserved files 

94. Dynamic Routes and how to configure with default props and accessing the params property(server comp), or useParams hook(client comp) 