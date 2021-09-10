import errorImage from "../../images/404-error.png";
import "./NotFoundView.css";

export default function NotFoundView() {
  return (
    <main role="alert" className="">
      <img src={errorImage} width="650" alt="Error" className="" />
      <h1 className="">Page not found </h1>
    </main>
  );
}
