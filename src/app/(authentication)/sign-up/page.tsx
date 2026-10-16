"use client";

import { signIn, signUp } from "@/lib/auth-client";
import { EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        typeof value === "string" ? value : value.name,
      ]),
    ) as Record<string, string>;

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (data) {
      redirect("/");
    }
  };

    const handleGoogleSignUp = async() => {
      const data = await signIn.social({
        provider: "google",
        callbackURL: "/"
      });
      if(data){
        redirect('/')
      }
    };

    const handleDiscordLogin = async () => {
      const data = await signIn.social({
        provider: "github",
      });
    };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#f0f5f1] px-4 py-10 sm:py-12">
      <div className="w-full max-w-[380px] lg:max-w-[420px] xl:max-w-[440px]">
        <div className="mb-6 text-center lg:mb-7">
          <h1 className="text-2xl font-bold tracking-tight text-[#202923] lg:text-[28px]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-1 text-xs text-[#737d75] lg:text-sm">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাখ দেখুন।
          </p>
        </div>

        <Form
          className="mx-auto flex w-full flex-col gap-4 rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] p-5 sm:p-6 lg:gap-5 lg:p-7"
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="name"
            className="w-full"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="mb-1 block text-xs font-medium text-[#27332a] lg:text-sm">
              নাম
            </Label>
            <Input
              className="h-[35px] w-full rounded-lg border border-[#e0e8e1] bg-transparent px-3 text-xs text-[#263129] outline-none transition focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10 lg:h-10 lg:text-sm"
              placeholder="যেমন: রহিম উদ্দিন"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter your email";
              }

              return null;
            }}
          >
            <Label className="mb-1 block text-xs font-medium text-[#27332a] lg:text-sm">
              ইমেইল
            </Label>
            <Input
              className="h-[35px] w-full rounded-lg border border-[#e0e8e1] bg-transparent px-3 text-xs text-[#263129] outline-none transition focus:border-[#079447] focus:ring-2 focus:ring-[#079447]/10 lg:h-10 lg:text-sm"
              placeholder="you@example.com"
            />
            <FieldError />
          </TextField>

          <TextField className="w-full" name="password">
            <Label className="mb-1 block text-xs font-medium text-[#27332a] lg:text-sm">
              পাসওয়ার্ড
            </Label>
            <InputGroup className="flex h-[35px] w-full items-center overflow-hidden rounded-lg border border-[#e0e8e1] bg-transparent transition focus-within:border-[#079447] focus-within:ring-2 focus-within:ring-[#079447]/10 lg:h-10">
              <InputGroup.Input
                name="password"
                className="h-full w-full min-w-0 border-0 bg-transparent px-3 text-xs text-[#263129] outline-none lg:text-sm"
                type={isVisible1 ? "text" : "password"}
                placeholder="কমপক্ষে ৮ অক্ষর"
              />
              <InputGroup.Suffix className="pe-1">
                <Button
                  isIconOnly
                  aria-label={isVisible1 ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  className="text-[#69746b]"
                  onPress={() => setIsVisible1(!isVisible1)}
                >
                  {isVisible1 ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <TextField className="w-full" name="password">
            <Label className="mb-1 block text-xs font-medium text-[#27332a] lg:text-sm">
              পাসওয়ার্ড নিশ্চিত করুন
            </Label>
            <InputGroup className="flex h-[35px] w-full items-center overflow-hidden rounded-lg border border-[#e0e8e1] bg-transparent transition focus-within:border-[#079447] focus-within:ring-2 focus-within:ring-[#079447]/10 lg:h-10">
              <InputGroup.Input
                name="password"
                className="h-full w-full min-w-0 border-0 bg-transparent px-3 text-xs text-[#263129] outline-none lg:text-sm"
                type={isVisible2 ? "text" : "password"}
                placeholder="আবার লিখুন"
              />
              <InputGroup.Suffix className="pe-1">
                <Button
                  isIconOnly
                  aria-label={isVisible2 ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  className="text-[#69746b]"
                  onPress={() => setIsVisible2(!isVisible2)}
                >
                  {isVisible2 ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <div className="flex w-full flex-col gap-4 lg:gap-5">
            <Button
              type="submit"
              className="h-9 w-full rounded-lg bg-[#078b43] text-xs font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067b3b] active:translate-y-px lg:h-11 lg:text-sm"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>

            <div className="flex items-center gap-3 text-xs text-[#707971] lg:text-sm">
              <div className="h-px flex-1 bg-[#dfe5df]" />
              <span>অথবা</span>
              <div className="h-px flex-1 bg-[#dfe5df]" />
            </div>

            <div className="grid w-full grid-cols-1 gap-2 min-[360px]:grid-cols-2">
              <button
                onClick={() => handleGoogleSignUp()}
                type="button"
                className="flex h-[35px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#e0e8e1] bg-transparent px-2 text-xs font-medium text-[#263129] transition hover:bg-[#f1f5f1] lg:h-10 lg:text-sm"
              >
                <svg
                  aria-label="Google logo"
                  width="14"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                <span>Google দিয়ে চালিয়ে যান</span>
              </button>

              <button
              onClick={()=>{handleDiscordLogin()}}
                type="button"
                className="flex h-[35px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#e0e8e1] bg-transparent px-2 text-xs font-medium text-[#263129] transition hover:bg-[#f1f5f1] lg:h-10 lg:text-sm"
              >
                <svg
                  aria-label="GitHub logo"
                  width="14"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.9 11.15,6.84 12,6.84C12.85,6.84 13.71,6.9 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 15.17,21.5C19.14,20.16 22,16.42 22,12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
                <span>GitHub দিয়ে চালিয়ে যান</span>
              </button>
            </div>

            <p className="text-center text-xs text-[#707971] lg:text-sm">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-[#079447] transition hover:text-[#056f36] hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </Form>

        <div className="mt-5 text-center lg:mt-6">
          <Link
            href="/"
            className="text-xs text-[#7b847c] transition hover:text-[#079447] lg:text-sm"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
