import Post from "@/Components/Post/Post";


const Posts = (props) => {
    const { Posts } = props
    console.log(Posts)
    return (
        <div>
            <h1 className="text-2xl font-semibold">the number of post length {Posts.length}</h1>
            {Posts?.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();
    //console.log(data)
    return {
        props: {
            Posts: data
        }
    }
}