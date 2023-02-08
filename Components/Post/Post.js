import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <div className="card mx-auto bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <div className="card-actions justify-start">
                        <Link href={`Posts/${post?.id}`}><button className="btn">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;