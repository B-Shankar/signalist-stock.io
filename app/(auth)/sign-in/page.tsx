'use client';

import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    })
    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1 className="form-title">Log In Your Account </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="john.doe@example.com"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: 'Email is required',
                        maxLength: { value: 100, message: 'Email is too long' },
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' }
                    }}
                />

                <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter strong password"
                    register={register}
                    error={errors.password}
                    validation={{
                        required: 'Password is required',
                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                        maxLength: { value: 25, message: 'Password must not exceed 25 characters' }
                    }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? "Logging In" : 'Log In' }
                </Button>
                <FooterLink text="Don't have an account?" href="/sign-up" linkText="Sign up" />
            </form>
        </>
    )
}
export default SignIn
