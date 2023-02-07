import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
    const router = useRouter()
    const handleback = () => {
        router.push('/Posts')
    }
    return (
        <div className="card my-16 mx-8 bg-base-100 shadow-xl image-full">
            <div className="card-body">
                <p className="text-start">PostId : {post.id}</p>
                <h2 className="card-title">Headline : {post.title}</h2>
                <p><b className="text-yellow-300">Details:</b> {post.body}</p>
                <button onClick={handleback} className="btn w-48">Back To Posts</button>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts?.map(post => {
        return {
            params: {
                postId: `${post?.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const { params } = context

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }
}




export default PostDetails;