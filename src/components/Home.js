import BlogList from "./BlogList";
import useFetch from "../customHooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8080/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs!" /> }
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario' )} title="Mario's blogs"/> */}
        </div>
     );
}
 
export default Home;