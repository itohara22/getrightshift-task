import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignInButton, SignOutButton } from "./button";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className="h-16 z-10">
      <div className="grid place-items-center h-full w-[90vw] mx-auto text-text">
        <div className="flex items-center justify-between w-full">
          <section className="font-bold w-[20vw] py-2 border-b-2 text-text border-text hover:text-accent hover:cursor-pointer font-sans text-3xl hover:border-accent">
            <Link href="/">Logo</Link>
          </section>
          <section className="w-[200px]">
            <ul className="flex items-center justify-center gap-10 text-md font-semibold text-text bg-[#fffbf4] py-2">
              <li className="">
                <Link
                  href="/hotels"
                  className="hover:underline underline-offset-4"
                >
                  Hotels
                </Link>
              </li>
              {session ? (
                <li>
                  <SignOutButton />
                </li>
              ) : (
                <li>
                  <SignInButton />
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
