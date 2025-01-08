import Link from "next/link";
const ButtonToLogin = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link href={"/"}>
          <button className="px-4 py-2 bg-primary text-white  b-s-secondaty border border-secondary hover:text-black rounded-md shadow-md hover:bg-secondary ">
            <p>Ya estás registrado?</p>
            <p>Login</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ButtonToLogin;
