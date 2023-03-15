import BubbleItem from "../components/BubbleItem";

const ListPage = ({ searchResults }) => {
    const results = searchResults.map(bub => <BubbleItem key={bub._id} title={bub.title} author={bub.user} link={bub.link} about={bub.content} />);

    const content = results?.length ? results : <article><p>No Matching Opportunities</p></article>
// need to fix this bc th
    return (
        <main>{content}</main>
    )
}

export default ListPage