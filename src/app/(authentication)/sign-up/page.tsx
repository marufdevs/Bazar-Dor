"use client";

import { signUp } from "@/lib/auth-client";
import { Check, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { Eye } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = Object.fromEntries(formData.entries())
        const{data:resData, err} = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.image
        })

    };

    return (
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

            <TextField
                isRequired
                name="name"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label>Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }

                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="image"
                type="url"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }

                    return null;
                }}
            >
                <Label>Image</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
            </TextField>

            <TextField className="w-full max-w-[280px]" name="password">
                <Label>Password</Label>
                <InputGroup>
                    <InputGroup.Input
                        className="w-full max-w-[280px]"
                        type={isVisible ? "text" : "password"}
                        value={isVisible ? "87$2h.3diua" : "••••••••"}
                    />
                    <InputGroup.Suffix className="pe-0">
                        <Button
                            isIconOnly
                            aria-label={isVisible ? "Hide password" : "Show password"}
                            size="sm"
                            variant="ghost"
                            onPress={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                        </Button>
                    </InputGroup.Suffix>
                </InputGroup>
            </TextField>



            <div className="flex gap-2">
                <Button type="submit">
                    <Check />
                    Submit
                </Button>
            </div>
        </Form>
    );
}