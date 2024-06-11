1. npx create-next-app@12.1.0 connectify-ui
2. go to index.js and remove <main/> content, <footer/> content and change title to Connectify
3. remove image and css import on the index.js file
4. Remove the Home.module.css file from the styles folder
5. Remove all styling from the global.css file and keep it blank
6. go to tailwindcss.com documentation, framework guide, and nextjs
7. npm install -D tailwindcss postcss autoprefixer
8. npx tailwindcss init -p
9. configure template paths by adding the info into tailwind.config.js file
8. add styling directives into globals.css 
9. restart application
10. go to react-icons and add dependancy into project
11. npm install react-icons --save
12. go to next-auth and get started, npm 
13. npm install next-auth@4.2.1
14. go to Axios npm 
15. npm install axios
16. got to react-redux
17. npm install react-redux
18. go to redux toolkit 
19. npm install @reduxjs/toolkit
20. extensions - es7 - react/redux, tailwind CSS, prettier
21. add Header component in index.js file above main component
22. inside header component, we build three components namely -> left, center and right
23. start styling header div -> read docs for each attribute used from tailwind css
24. start designing left, add image and add image into domain inside next.config.js, add search bar and design all of these
25. TailwindCSS is mobile first, therefore we add hidden first to the input tag and then the further parameters 
26. start designing center
27. flex-grow means it takes maximum amount of space. We want the center to take the maximum amount of space
28. design right part of the header, call and design all logos
29. create a sidebar component for the main tag in index.js
30. include images and design appropriately 
31. create component called sidebaritems.js for dynamic rendering of items in the sidebar
32. pass Icons and value as props from Sidebar.js component to SidebarItems.js component
33. use Icons and value props within the SidebarItems.js component
34. in sidebar.js component, add icons and corresponding values for sidebaritems.js 
35. nextauth implementation for google provider authentication
36. now to get the signed in user's name and profile picture for the header, we must use the useSession hook in header.js file
37. make the image link and the name in Header.js a dynamic component and update the values
38. make the image link and name dynamic in sidebar.js as well
39. create a new component called Feed.js 
40. feed must have two child components that are CreatePost.js and Posts.js 
41. CreatePost.js has the user image, and post option where we use the form tag
42. we need the useSession hook to obtain user image and also import Image tag from next/image
43. add the video camera, photos and emojis icons and style them in CreatePost.js 
44. create a new component called posts.js 
45. create another component called post.js which is child component of posts.js 
46. start designing post.js component
47. call userphoto and username for posts dynamically
48. use Date().toLocalString() API to call date and time 
49. add paragraph text and call image through link for static post placeholder