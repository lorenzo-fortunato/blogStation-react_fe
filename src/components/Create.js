import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('mario');
const [isPending, setIsPending] = useState(false);
const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    fetch('http://localhost:8080/blogs/add', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("new blog added");
        setIsPending(false);
        // history.go(-1);   // torna indietro alla pagna subito precedente
        history.push('/');      // torna alla rout indicta, in questo caso alla home
    })

}

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;