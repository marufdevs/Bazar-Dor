"use client";

import React from "react";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const name = String(data.name ?? "");
    const { data: user, error } = await updateUser({
      name: name,
    });
    if (error) {
      toast.error(error.message || "Profile update failed!");
      return;
    }

    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-[#F0F5F0] px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#26332B]">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-[#727A74]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EEF1EE]">
              <span>Image</span>
            </div>
            <div className="min-w-0">
              <h2 className="break-words text-lg font-semibold text-[#26332B]">
                {session?.user?.name}
              </h2>
              <p className="break-all text-sm text-[#727A74]">
                {session?.user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={async () => {
              try {
                await signOut();
                toast.success("SuccessFully Logouted");
                router.replace("/");
              } catch {
                toast.error("Failed to log out!");
              }
            }}   
            className="shrink-0 self-start rounded-lg border border-red-400 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 sm:self-center"
          >
            ↩ সাইন আউট
          </button>
        </div>

        <div className="rounded-2xl border border-[#DFE8DF] bg-[#FAFCFA] p-5 sm:p-8">
          <span className="mb-8 block text-base font-semibold text-[#26332B]">
            তথ্য
          </span>

          <Form className="w-full" onSubmit={onSubmit}>
            <Fieldset className="w-full border-0 p-0">
              <Fieldset.Legend className="sr-only">
                Profile Settings
              </Fieldset.Legend>
              <Description className="sr-only">
                Update your profile information.
              </Description>

              <FieldGroup className="w-full gap-3">
                <TextField
                  className="w-full"
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-1 text-sm font-medium text-[#26332B]">
                    নাম
                  </Label>
                  <Input
                    placeholder=""
                    className="h-10 w-full rounded-lg border border-[#DFE8DF] bg-transparent px-3 outline-none focus-within:border-[#07883F]"
                  />
                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-3 flex w-full flex-col gap-3">
                <Button
                  type="submit"
                  className="h-9 w-full rounded-lg bg-[#07883F] text-sm font-medium text-white shadow-md transition hover:bg-[#067735]"
                >
                  <FloppyDisk />
                  আপডেট
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
          <div className="mt-2 flex justify-end">
            <Link
              href="/reset-password"
              className="text-xs font-medium  lg:text-sm"
            >
              Update Password?{" "}
              <span className="text-[#079447] transition hover:text-[#067735] hover:underline">
                Clik here
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
