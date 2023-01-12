import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <Link to={"/"} className="text-4xl font-extrabold text-white">
          World Time
        </Link>
        <ul className="flex gap-4 text-white">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
}
