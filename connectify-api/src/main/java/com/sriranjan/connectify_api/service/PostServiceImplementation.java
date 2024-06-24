package com.sriranjan.connectify_api.service;

import com.sriranjan.connectify_api.entity.PostEntity;
import com.sriranjan.connectify_api.model.Post;
import com.sriranjan.connectify_api.respository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImplementation implements PostService{

    private PostEntityRepository postEntityRepository;

    public PostServiceImplementation(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            if(post.getFile() != null && !post.getFile().equalsIgnoreCase("null")){
                postEntity.setImage(post.getFile());
            }
            else{
                postEntity.setImage(null);
            }

            postEntity = postEntityRepository.save(postEntity);

            post.setId(postEntity.getId());
            post.setFile(null);
            post.setImage(postEntity.getImage());

        } catch (Exception e) {
            throw new Exception("Could not save Post: " + e);
        }
        return null;
    }

    @Override
    public List<Post> getPost() {
        List<PostEntity> postEntities = postEntityRepository.findAll();

        List<Post> posts = new ArrayList<>();
        posts = postEntities.stream()
                .map((postEntity) -> Post.builder()
                        .id(postEntity.getId())
                        .timeStamp(postEntity.getTimeStamp())
                        .email(postEntity.getEmail())
                        .name(postEntity.getName())
                        .post(postEntity.getPost())
                        .image(postEntity.getImage())
                        .profilePic(postEntity.getProfilePic())
                        .build()
                ).collect(Collectors.toList());

        return posts;
    }
}
