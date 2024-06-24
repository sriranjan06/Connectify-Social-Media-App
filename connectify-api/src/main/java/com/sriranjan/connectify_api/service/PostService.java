package com.sriranjan.connectify_api.service;

import com.sriranjan.connectify_api.model.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
