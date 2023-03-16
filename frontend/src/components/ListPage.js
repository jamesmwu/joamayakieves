import BubbleItem from "../components/BubbleItem";
import "../styles/Bubbles.css"

const ListPage = ({ searchResults }) => {
    const results = searchResults.map(bub => <BubbleItem key={bub._id} title={bub.title} author={bub.user} link={bub.link} about={bub.content} />);
    const content = results?.length ? results : <article><p>No Matching Opportunities</p></article>
// need to fix this bc th
    return (
        <div className="bubble-container">{content}</div>
    )
}

export default ListPage