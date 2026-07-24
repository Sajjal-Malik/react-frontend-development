import ArticleCard from "./ArticleCard";
import { type Blog } from "../types";
import { useBlogs } from "../shared/BlogContext";

interface ArticleListProps {
    onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
    const { blogs, deleteBlog } = useBlogs();

    return (
        <div className="ml-20">
            {blogs.map((blog) => (
                <ArticleCard
                    key={blog.id}
                    article={blog}
                    onDelete={() => deleteBlog(blog.id)}
                    onEdit={() => onEdit(blog)}
                />
            ))}
        </div>
    );
};

export default ArticleList;