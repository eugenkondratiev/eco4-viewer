import Block from '../../Components/Block';


// eslint-disable-next-line react/prop-types
const HomePage = ({ blr }) => {
    return (
        <>
            {/* <h2>Home page</h2> */}
            {blr && <h3>{blr}</h3>}
            <Block header="Вибачте">
                <p>Розділ в розробці</p>
                <p>Скористайтеся тимчасовим сервісом</p>
                <a href="http://178.158.238.89:3000/4" target="_blank" rel="noopener noreferrer">Перейти</a>
            </Block>
        </>
    )
}
export default HomePage 
