import toast from "solid-toast";
import { env } from "../../environment";
import googleIcon from "../assets/google-icon.svg";

const useQueryParams = (query: string = null!) => {
  const result: Record<string, string> = {};

  new URLSearchParams(query || window.location.search).forEach((value, key) => {
    result[key] = value;
  });

  return result;
};

export default function Login() {
  const { error } = useQueryParams();

  if (error) {
    toast.error("Unable to sign in, please try again or contact support.", {
      position: "bottom-right",
      duration: 6000,
    });

    // Delete error from query parameter to prevent this toast from reappearing on refresh
    const url = new URL(window.location.href);
    url.searchParams.delete("error");

    window.history.replaceState({}, document.title, url);
  }

  return (
    <div class="flex h-screen dark:bg-slate-900 justify-center items-center dark:text-white">
      <div class="dark:bg-slate-800 p-6 rounded-lg shadow dark:border dark:border-slate-700 space-y-6 max-w-sm w-full">
        <h1 class="text-xl font-bold justify-center flex">
          Sign in to your account
        </h1>
        <a
          href={`${env.IDENTITY_SERVICE_BASE_URL}/api/v1/oauth/authorize/google${window.location.search}`}
          class="flex py-2 text-sm justify-center border rounded-lg dark:border-slate-500 gap-2 cursor-pointer hover:dark:bg-slate-700 transition"
        >
          <img src={googleIcon} width={16} />
          Sign in with Google
        </a>
      </div>
    </div>
  );
}
