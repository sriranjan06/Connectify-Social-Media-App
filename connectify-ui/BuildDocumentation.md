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
50. start designing footer part in Post.js component
51. add and design the like, comment and share icons to fit the post
52. start designing the right sidebar. GOTO index.js and create RightSidebar.js component and call it there
53. right sidebar must include contacts with the video, search and altmore icons
54. create component called Contacts.js 
55. call Contacts.js component into RightSidebar.js component
56. pass image source src and name as props through the Contacts.js components
57. dynamically display name and image in contacts.js component
58. create inputRef useRef in CreatePost.js for the text input of What's on your mind?
59. create hiddenFilesInput for the photos/videos logo on the createpost.js component to be able to add files
60. create useState imageToPost and initialize with null value
61. scroll down to what's on your mind add conditional div {imageToPost && <div></div>}
62. design it to display an image posted
63. in CreatePost.js, add onClick function for the Delete Button. import that delete button
64. write a function to handle the onClick={removeImage}
65. with the file input button, handle the file change via onChange={addImageToPost}
66. define addImageToPost() to load e.target.result along with other conditionals
67. the hidden button under what's on your mind must be able to handle the submit button onClick={handleSubmit}
68. define the handleSubmit()
69. first we prevent default values from loading, then if there's no value, we return nothing. Else, 
70. bundle all the input parameters and append them into a formData of type FormData();
71. within the same function, use axios to post the data, then the post function waits for a promise response which we use to clear the image and then we catch any errors if they occur. 
72. define the CONNECTIFY_ENDPOINT url variable for now. we'll add the end point once we create the backend service
73. now, since we need to pass props through different levels of components and we cannot directly pass props from a child to a grandparent component, we need to use a differt methodology to handle these services
74. we make use of the redux toolkit. selector is used to get the state and dispacth is used to send the state in react redux toolkit
75. inside public dir, create src -> app dir. inside app dir, create store.js file
76. inside src dir, create another dir features. inside features, create postSlice.js file
77. inside postSlice.js, we declare postSlice = createSlice where we have name as post, initial state as empty array and addPost and addAllPost as reducers
78. Then we export the actions which are addPost and addAllPost, the selectPost which is the state and the postSlice reducer
79. now go to store.js and import the postReducer
80. now go to CreatePost.js and include a new hook called const dispatch = useDispatch(); which is a redux toolkit hook
81. go to the axios promise response and dispatch(addPost(response.data)); to be able to handle it 
82. import addPost from postSlice
83. now go to postSlice and state.value.push(action.payload); within the addPost action
84. no we start working on backend
85. spring.start.io -> Java, Maven, JAR, 17 
86. dependencies -> spring data JPA, mysql driver, spring web, lombok
87. generate project and open in Intellij
88. we start with application.properties file -> write all of the necessary commands
89. open mysql workbench -> new schema -> create connectify_db 
90. src -> main -> java -> com.sriranjan.connectify_api -> create the following packages
91. controller, entity, model, repository, service
92. under entity package, add the following annotations: 
93. @Entity to mark as entity, @Table to make it a table with name = posts, @Data generates boiler plate code for getters and setters or POJOs (Plain Old Java Objects), @Builer is a creational design pattern that simplifies object creation, @NoArgsConstructor is to accept functions with no arguments (default constructors) and @AllArgsConstructor is to accept functions with arguments (parametrized constructors)
94. declare all the variables that are id, post, name, email, image, profilePic and timeStamp
95. @Id indictates that the variable declared below is a primary key, @GeneratedValue(generator="uuid") indicates how the primary key is generated. uuid stands for Universally Unique Identifier and is beneficial to generate primary keeps in distributed data. 
96. uuid2 offers a broader range data type to choose from. @GenericGenerator is used to define a custom generator
97. @Lob annotation specifies that the database should store those variables as a Large Object
98. now for the PostEntity entity, we need to create a PostEntityRepository interface under the repository package
99. the PostEntityRepository interface extends JpaRepository<PostEntity, String>{}
100. under service package, create an interface called PostService
101. create a class called PostServiceImplementation which implements PostService
102. annotate with @Service which indicates that that part of a code is a service. There are some stereotype annotations in Spring Boot like @Repository, @Controller, @Component and @Service which makes it easier to classify code
103. under the controller package, create the PostController class
104. in POstController, @CrossOrigin is used to allow connection with frontend at frontend port for data passing
105. @RestController annotation combines @Controller and @ResponseBody. @RestController simplifies the creation of RESTful web services
106. @RequestMapping maps request to controller methods. @RestController and @RequestMapping are usually used together. @RequestMapping has the api path
107. declare private PostService postService; within PostController and perform contructor injection
108. declare private PostEntityRepository postEntityRepository; and peform constructor injection within the PostServiceImplementation
109. in the model package, create a java class called Post and declare the following annotations @Data, @Builder, @NoArgsConstructor, @AllArgsConstructor
110. declare all necessary variables in post
111. back to PostController and create addPost method with parameter which Maps a String and String 
112. @PostMapping is used to annotate a method which stores new data into the backend
113. @RequestParam allows you to directly access and extract individual request parameters without having to handle the entire request body
114. we get request mapping from post and then we create an equivalent object and then we are passing that object to our backend service through postService.addPost()
115. we got to PostServiceImplementation define addPost()
116. throw exception try declare object of type PostEntity, BeanUtils.copyProperties from post to postEntity
117. if there is a file, then setImage to whatever that file is. Else setImage as null 
118. postEntityRepository.save(postEntity) -> whatever changes just took places will be persisted onto the entity repository
119. setId, setFile, setImage
120. got to PostController and add method signature for addPost there as well
121. then define getPost() in PostController and return postService.getPost(); @GetMapping
122. in postService interface, declare List<Post> getPost();
123. now go to postServiceImplementation class and define the getPost method
124. List of type postEntity findAll()
125. posts = new ArrayList<>
126. posts = postEntities.stream().map((postEntity) -> Post.builder.id().name().build()).collect(Collectors.toList())
127. return posts. This is how we get all the data from the database in the form of postEntity.findAll()
128. then we store all the data into an array called posts of object datatype and the way to do this is via stream(). map() is used to map entity and various attributes. 
129. const CONNECTIFY_ENDPOINT = "http://localhost:8080/api/v1/post"; which is the port where the backend api is running
130. instead of push in postSlice.js, adding unshift will make the latest post appear on top of the stack
131.  

