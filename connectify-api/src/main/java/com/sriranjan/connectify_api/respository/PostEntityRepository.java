package com.sriranjan.connectify_api.respository;

import com.sriranjan.connectify_api.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {

}
