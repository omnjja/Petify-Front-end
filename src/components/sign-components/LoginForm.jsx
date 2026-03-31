import React, { useState } from "react";
import InputField from "../public-components/InputField";
import useCustomForm from "@/hooks/useCustomForm";
import { loginDefaultValues, loginSchema } from "@/schemas/signupSchema";
import Button from "../public-components/Button";
import PasswordField from "../public-components/PasswordField";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import ForgotPassword from "./ForgotPassword";

const LoginForm = () => {
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: loginDefaultValues,
    schema: loginSchema,
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      // await login(payload);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      reset();
    } catch (error) {
      setError("root", {
        message:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center w-full p-6 md:px-8 md:py-4 max-w-md min-h-[400px] md:min-h-[600px]">
      <FormHeader
        head={"Sign In"}
        subHead={"Welcome back! Please login to your account."} //Please login to continue to your account
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* Email */}
        <InputField
          register={register}
          label="Email"
          id="email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        {/* Password */}
        <PasswordField
          register={register}
          label="Password"
          id="password"
          placeholder="Enter your password"
          error={errors.password?.message}
        />
        {/* Forgot Password Link */}
        <div className="flex justify-end mb-2">
          <button
            type="button"
            className="text-sm text-[#FD7E14] hover:underline"
            onClick={() => setOpenForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </div>
        {/* Submit Button */}
        <Button
          text={isSubmitting ? "Signing In..." : "Sign In"}
          type="submit"
          fullWidth
          disabled={isSubmitting}
        />
        {errors.root && (
          <p className="text-red-500 text-sm flex items-center mb-1">
            {errors.root.message || "An error occurred. Please try again."}
          </p>
        )}
      </form>
      <FormFooter
        title={"Don't have an account?"}
        distnation={"Sign Up"}
        url={"/signup"}
      />
      <ForgotPassword
        open={openForgotPassword}
        setOpen={setOpenForgotPassword}
      />
    </div>
  );
};

export default LoginForm;
