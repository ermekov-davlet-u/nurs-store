import PageWrapper from "../components/common/PageWrapper";
import TextEdit from "../components/ui-comp/edit/TextEdit";
import "../css/form.scss"

function FormPage() {
    return (
        <PageWrapper>
            <div className="form_page">
                <TextEdit></TextEdit>
                <TextEdit></TextEdit>
                <TextEdit></TextEdit>
                <TextEdit></TextEdit>
                <TextEdit></TextEdit>
            </div>
        </PageWrapper>
    );
}

export default FormPage;