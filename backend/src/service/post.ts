import { PostRepository, postRepository } from '../data/repository/post';
import { DTO } from '../interface';

class PostService {
  constructor(private postRepo: PostRepository) {}

  async getAllPostById(userId: DTO.ID) {
    const posts = await this.postRepo.getAllPostById(userId);
    return posts;
  }
  async createPost(newPost: DTO.IPost): Promise<DTO.IPost> {
    const post = await this.postRepo.createPost(newPost);
    return post;
  }
}

export const postService = new PostService(postRepository);
