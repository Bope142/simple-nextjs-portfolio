import PageTitle from "@/components/pageTitle/PageTitle";
import "../../public/style/main.scss";
import "./style.scss";
import { InputForm, MemoForm } from "@/components/formControll/Form";
import Button from "@/components/button/Button";

const SectionContactForm = () => {
  return (
    <form className="section-page contact-form">
      <InputForm typeInput="text" placeholder="Nom" nameInput="nameUser" />
      <InputForm typeInput="email" placeholder="Email" nameInput="emailUser" />
      <MemoForm placeholder="Votre message" name="msgUser" />
      <Button title="Envoyer le message" classStyle="btn-black" />
    </form>
  );
};
export default function ContactPage() {
  return (
    <main className="page-view" id="ContactPage">
      <PageTitle currentPage={"contact"} pageTitle={"Contact"}></PageTitle>
      <section className="content-page">
        <SectionContactForm />
      </section>
    </main>
  );
}
