import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
const { id } = useParams();
const { data: blog, error, isPending } = useFetch(`http://localhost:8080/blogs/${id}`);
const history = useHistory();

const handleClick = () => {
    fetch(`http://localhost:8080/blogs/${blog[0].id}`, {
        method: 'DELETE'
    }).then(() => {
        history.push('/');
    })
}

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog[0].title }</h2>
                    <p>Written by { blog[0].author }</p>
                    <div>{ blog[0].body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;