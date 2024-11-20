import { useEffect, useState } from "react"

export default function RequestApp() {
    const fetchPosts = (callback) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => typeof callback == 'function' && callback(json))
    }
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetchPosts(posts => {
            setPosts(posts)
            setLoading(false)
        })
    }, [])
    if (isLoading)
        return (
        <div className="container">
            <span>Carregando...</span>
        </div>
    )
    return (
        <div className="container">
            <h1>Posts</h1>
            <ul>
                { posts.map(post => <li key={post.id}>
                    <p>{post.title}</p>
                    <small>{post.body}</small>
                    </li>) }
            </ul>
        </div>
    )
}