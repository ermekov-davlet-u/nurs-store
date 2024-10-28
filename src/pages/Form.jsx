import PageWrapper from "../components/common/PageWrapper";
import TextEdit from "../components/ui-comp/edit/TextEdit";
import "../css/form.scss"

function FormPage() {
    return (
        <PageWrapper>
            <div className="form-page">
                <div className="form-page_title">
                    Создание нового продукта
                </div>
                <div className="form-page_inp_groups">
                    <TextEdit></TextEdit>
                    <TextEdit></TextEdit>
                    <TextEdit></TextEdit>
                    <TextEdit></TextEdit>
                    <TextEdit></TextEdit>
                </div>
            </div>
        </PageWrapper>
    );
}

export default FormPage;