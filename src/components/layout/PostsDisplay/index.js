import Container from "../Container";
import PostCard from "../PostCard";
import Loading from "../Loading";

function PostsDisplay({ posts }) {
  return (
    <Container customClass="center">
      {posts ? (
        <>
          {posts.map((post) => (
            <PostCard
              id={post.id}
              titulo={post.titulo}
              resumo={post.resumo}
              imagem={post.imagem}
            ></PostCard>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default PostsDisplay;
