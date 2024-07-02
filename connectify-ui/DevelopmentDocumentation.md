# Connectify Full Stack Application Development Documentation

## Frontend Setup

1. **Initialize Next.js Application**
    ```bash
    npx create-next-app@12.1.0 connectify-ui
    ```

2. **Modify `index.js`**
    - Remove `<main/>` content
    - Remove `<footer/>` content
    - Change the title to "Connectify"
    - Remove image and CSS import on the `index.js` file

3. **Clean Up Styles**
    - Remove the `Home.module.css` file from the styles folder
    - Remove all styling from the `global.css` file and keep it blank

4. **Setup Tailwind CSS**
    - Follow the documentation at [tailwindcss.com](https://tailwindcss.com/docs/guides/nextjs)
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

5. **Configure Template Paths**
    - Add template paths to `tailwind.config.js`
    ```javascript
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

6. **Add Tailwind CSS Directives to `globals.css`**
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

7. **Restart Application**
    ```bash
    npm run dev
    ```

8. **Install React Icons**
    ```bash
    npm install react-icons --save
    ```

9. **Install NextAuth.js**
    ```bash
    npm install next-auth@4.2.1
    ```

10. **Install Axios**
    ```bash
    npm install axios
    ```

11. **Install React Redux**
    ```bash
    npm install react-redux
    ```

12. **Install Redux Toolkit**
    ```bash
    npm install @reduxjs/toolkit
    ```

13. **Install VSCode Extensions**
    - ES7 React/Redux
    - Tailwind CSS
    - Prettier

14. **Add Header Component**
    - Create a `Header` component and include it in `index.js` above the `<main>` component
    - The `Header` component contains three sub-components: `left`, `center`, and `right`

15. **Style Header Component**
    - Use Tailwind CSS to style the header
    - Add an image and a search bar in the `left` section
    - Ensure the center section takes the maximum amount of space using `flex-grow`
    - Add and style icons in the `right` section

16. **Create Sidebar Component**
    - Create a `Sidebar` component and include it in the `<main>` tag of `index.js`
    - Create a `SidebarItems.js` component for dynamic rendering of sidebar items
    - Pass icons and values as props from `Sidebar.js` to `SidebarItems.js`

17. **Implement Google Provider Authentication**
    - Use NextAuth.js to implement Google provider authentication
    - Use the `useSession` hook in `Header.js` to get the signed-in user's name and profile picture
    - Make the image link and name dynamic in both `Header.js` and `Sidebar.js`

18. **Create Feed Component**
    - Create a `Feed.js` component with two child components: `CreatePost.js` and `Posts.js`
    - `CreatePost.js` includes the user image and a form for creating posts
    - `Posts.js` contains the posts, each rendered by a `Post.js` component

19. **Style CreatePost Component**
    - Use the `useSession` hook to obtain the user image
    - Import the `Image` tag from Next.js
    - Add and style icons for video camera, photos, and emojis

20. **Style Post Component**
    - Dynamically call user photo and username
    - Use `Date().toLocaleString()` to display the date and time
    - Add and style text and image placeholders
    - Add and style like, comment, and share icons

21. **Create Right Sidebar Component**
    - Create a `RightSidebar.js` component and include it in `index.js`
    - The right sidebar includes contacts with video, search, and altmore icons
    - Create a `Contacts.js` component and include it in `RightSidebar.js`
    - Pass image source and name as props to `Contacts.js` and display them dynamically

22. **Handle File Input in CreatePost**
    - Use `useRef` for the text input in `CreatePost.js`
    - Create `hiddenFilesInput` for adding photos/videos
    - Use `useState` to manage `imageToPost`
    - Conditionally render an image div if `imageToPost` is not null
    - Add `onClick` function to delete the image
    - Handle file input changes with `onChange={addImageToPost}`
    - Define `addImageToPost()` to load the image
    - Handle form submission with `handleSubmit()`

23. **Define API Endpoint**
    - Define `CONNECTIFY_ENDPOINT` URL variable for the backend endpoint
    ```javascript
    const CONNECTIFY_ENDPOINT = "http://localhost:8080/api/v1/post";
    ```

24. **Use Redux Toolkit for State Management**
    - Create a `store.js` file in `src/app`
    - Create a `postSlice.js` file in `src/features`
    - Define `postSlice` with `addPost` and `addAllPost` reducers
    - Export actions, selectors, and reducer from `postSlice.js`
    - Import and use the `postReducer` in `store.js`

25. **Dispatch Redux Actions in CreatePost**
    - Use `useDispatch` hook in `CreatePost.js`
    - Dispatch `addPost` action after a successful Axios response
    - Import `addPost` from `postSlice`

26. **Update Post State in Redux**
    - Update `postSlice` to handle `addPost` action by pushing the new post to the state

## Backend Setup

1. **Initialize Spring Boot Application**
    - Use [Spring Initializr](https://start.spring.io/) with the following settings:
      - Project: Maven
      - Language: Java
      - Spring Boot: 2.7.1
      - Packaging: JAR
      - Java: 17
    - Add dependencies:
      - Spring Data JPA
      - MySQL Driver
      - Spring Web
      - Lombok

2. **Configure Application Properties**
    - Add necessary configuration in `application.properties`
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/connectify_db
    spring.datasource.username=root
    spring.datasource.password=password
    spring.jpa.hibernate.ddl-auto=update
    ```

3. **Create Database Schema**
    - Open MySQL Workbench and create a new schema `connectify_db`

4. **Create Backend Packages**
    - Create packages under `src/main/java/com/sriranjan/connectify_api`:
      - controller
      - entity
      - model
      - repository
      - service

5. **Define Entity Class**
    - Create `PostEntity` class under `entity` package with the following annotations:
      ```java
      @Entity
      @Table(name = "posts")
      @Data
      @Builder
      @NoArgsConstructor
      @AllArgsConstructor
      public class PostEntity {
          @Id
          @GeneratedValue(generator = "uuid")
          @GenericGenerator(name = "uuid", strategy = "uuid2")
          private String id;
          private String post;
          private String name;
          private String email;
          private String image;
          private String profilePic;
          private String timeStamp;
          @Lob
          private byte[] file;
      }
      ```

6. **Create Repository Interface**
    - Create `PostEntityRepository` interface under `repository` package
    ```java
    public interface PostEntityRepository extends JpaRepository<PostEntity, String> {}
    ```

7. **Define Service Interface and Implementation**
    - Create `PostService` interface under `service` package
    ```java
    public interface PostService {
        Post addPost(Map<String, String> requestParams);
        List<Post> getPosts();
    }
    ```

    - Create `PostServiceImplementation` class under `service` package
    ```java
    @Service
    public class PostServiceImplementation implements PostService {
        private final PostEntityRepository postEntityRepository;

        @Autowired
        public PostServiceImplementation(PostEntityRepository postEntityRepository) {
            this.postEntityRepository = postEntityRepository;
        }

        @Override
        public Post addPost(Map<String, String> requestParams) {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(requestParams, postEntity);
            postEntity.setImage(requestParams.get("file") != null ? requestParams.get("file") : null);
            postEntityRepository.save(postEntity);
            return Post.builder()
                    .id(postEntity.getId())
                    .post(postEntity.getPost())
                    .name(postEntity.getName())
                    .email(postEntity.getEmail())
                    .image(postEntity.getImage())
                    .profilePic(postEntity.getProfilePic())
                    .timeStamp(postEntity.getTimeStamp())
                    .build();
        }

        @Override
        public List<Post> getPosts() {
            List<PostEntity> postEntities = postEntityRepository.findAll();
            return postEntities.stream()
                    .map(postEntity -> Post.builder()
                            .id(postEntity.getId())
                            .post(postEntity.getPost())
                            .name(postEntity.getName())
                            .email(postEntity.getEmail())
                            .image(postEntity.getImage())
                            .profilePic(postEntity.getProfilePic())
                            .timeStamp(postEntity.getTimeStamp())
                            .build())
                    .collect(Collectors.toList());
        }
    }
    ```

8. **Define Controller Class**
    - Create `PostController` class under `controller` package
    ```java
    @CrossOrigin(origins = "http://localhost:3000")
    @RestController
    @RequestMapping("/api/v1/posts")
    public class PostController {
        private final PostService postService;

        @Autowired
        public PostController(PostService postService) {
            this.postService = postService;
        }

        @PostMapping
        public Post addPost(@RequestParam Map<String, String> requestParams) {
            return postService.addPost(requestParams);
        }

        @GetMapping
        public List<Post> getPosts() {
            return postService.getPosts();
        }
    }
    ```

9. **Define Model Class**
    - Create `Post` class under `model` package
    ```java
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public class Post {
        private String id;
        private String post;
        private String name;
        private String email;
        private String image;
        private String profilePic;
        private String timeStamp;
        private byte[] file;
    }
    ```

10. **Run Spring Boot Application**
    - Run the application and ensure the backend services are up and running

## Final Steps

1. **Connect Frontend to Backend**
    - Ensure the frontend makes requests to the backend using the defined `CONNECTIFY_ENDPOINT`

2. **Testing and Deployment**
    - Test the entire application to ensure all features are working as expected
    - Deploy the application using your preferred deployment method
