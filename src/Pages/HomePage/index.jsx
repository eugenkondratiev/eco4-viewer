// eslint-disable-next-line react/prop-types
const HomePage = ({ blr }) => {
    return (
        <>
            <h2>Home page</h2>
            {blr && <h3>{blr}</h3>}
        </>
    )
}
export default HomePage 
