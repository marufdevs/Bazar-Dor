"use client";
import { changePassword, signOut } from "@/lib/auth-client";
import { Eye, EyeSlash, FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldGroup,
  Fieldset,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const [isVisibleold, setIsVisibleold] = useState(false);
  const [isVisiblenew, setIsVisiblenew] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const oldPassword = String(data.oldPassword ?? "");
    const newPassword = String(data.newPassword ?? "");
    if (!oldPassword || !newPassword) {
      toast.warning("Both password fields are required.");
      return;
    }
    const { data: resData, error } = await changePassword({
      currentPassword: oldPassword,
      newPassword: newPassword,
      revokeOtherSessions: true,
    });

    if (error) {
      toast.error(error.message || "Something went wrong!");
      return;
    }

    console.log("Password changed successfully:", resData);
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
                Update your Password
              </h2>
            </div>
          </div>

          <button
            onClick={async () => {
                try{

                    await signOut();
                    toast.success("SuccessFully Logouted");
                } catch{
                    toast.error("Failed to log out!")
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
                <TextField className="w-full max-w-[280px]" name="oldPassword">
                  <Label>Old Password</Label>
                  <InputGroup>
                    <InputGroup.Input
                      name="oldPassword"
                      className="w-full max-w-[280px]"
                      type={isVisibleold ? "text" : "password"}
                    />
                    <InputGroup.Suffix className="pe-0">
                      <Button
                        isIconOnly
                        aria-label={
                          isVisibleold ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        onPress={() => setIsVisibleold(!isVisibleold)}
                      >
                        {isVisibleold ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
                </TextField>
                <TextField className="w-full max-w-[280px]" name="newPassword">
                  <Label>New Password</Label>
                  <InputGroup>
                    <InputGroup.Input
                      name="newPassword"
                      className="w-full max-w-[280px]"
                      type={isVisiblenew ? "text" : "password"}
                    />
                    <InputGroup.Suffix className="pe-0">
                      <Button
                        isIconOnly
                        aria-label={
                          isVisiblenew ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        onPress={() => setIsVisiblenew(!isVisiblenew)}
                      >
                        {isVisiblenew ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
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
                <Button type="reset" variant="secondary" className="hidden">
                  Cancel
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
