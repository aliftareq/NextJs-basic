


const Comments = ({ comments }) => {
    console.log(comments)
    return (
        <div>
            <h1>{comments.length}</h1>
            {comments.map((comment, idx) => <h1 key={idx} className='my-5 mx-5'>{comment.body}</h1>)}
        </div>
    );
};

export default Comments;

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()

    return {
        props: {
            comments: data
        }
    }

}