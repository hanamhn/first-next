import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";

class Index extends Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = res;
    return { posts: data };
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Our Index Page!!!</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// const Index = ({ posts }) => {
//   return (
//     <div>
//       <h1>Our Index Page!!!</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Index.getInitialProps = async (ctx) => {
//   // https://jsonplaceholder.typicode.com/posts
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   const { data } = res;
//   return { posts: data };
// };

export default Index;
