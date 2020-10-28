import { DTO } from '../../interface';
import { Post } from '../models/post';

export class PostRepository {
  async getAllPostById(ID: DTO.ID): Promise<DTO.IPost[]> {
    const posts = await Post.find({ userId: ID }).populate('creator', ['firstName', 'lastName', 'photo']);
    return posts;
  }

  async createPost(newPost: DTO.IPost) {
    const post = new Post(newPost);
    await post.save(function (err, post) {
      if (err) return console.error(err);
      console.log(post);
    });
    return post;
  }
}

export const postRepository = new PostRepository();
