import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white w-65 flex flex-col fixed h-full">
      <Link to="/" className="text-4xl font-bold mx-10 my-10">Guido</Link>
      <ul className="ml-10">
        <li className="my-7">
          <Link to="/" className="text-2xl">
            Lessons
          </Link>
        </li>
        <li>
          <Link to="/practice" className="text-2xl">
            Practice
          </Link>
        </li>
      </ul>
    </nav>
  );
}
