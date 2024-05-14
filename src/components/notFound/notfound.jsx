import { Link } from "react-router-dom";
import "./notFound.scss";

export function NotFoundPage() {
  return (
    <section className="notFound w-full h-svh flex align-center justify-center">
      <div className="mockup-window aspect-square border w-1/2 max-w-xl min-w-72 m-auto bg-slate-700">
        <div className="bg-slate-200 font-medium flex flex-col p-10 align-center justify-center h-full w-full px-4 py-16 bg-base-200">
            <h1 className="font-semibold mx-auto w-fit text-7xl text-base-50">4<span className="text-red-600">0</span>4</h1>
            <span className="mx-auto w-fit">Pagina não encontrada</span>
            <Link to={"/"} className="btn btn-outline btn-primary w-fit uppercase tracking-widest mx-auto mt-5">Voltar</Link>
        </div>
      </div>
    </section>
  );
}
