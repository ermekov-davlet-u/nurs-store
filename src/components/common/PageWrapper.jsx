import Header from "../Header";



function PageWrapper({
    children
}) {
    return (
        <div className="page-wrapper">
            <Header />
            {
                children
            }
        </div>
    );
}

export default PageWrapper;