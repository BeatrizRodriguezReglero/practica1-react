import style from './list.module.css'

const List =()=>{
    return <ul className={`${style.list}`}>
        <li>Tutorials by industry experts</li>
        <li>Peer & expert code review</li>
        <li>Coding exercises</li>
        <li>Access to our GitHub repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New videos every week</li>
    </ul>
}
export default List

