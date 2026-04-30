import React from "react";
import InputField from "../shared/ui/InputField";
import SelectField from "../shared/ui/SelectField";
import useCustomForm from "@/hooks/useCustomForm";
import { signupDefaultValues, signupSchema } from "@/schemas/signupSchema";
import Button from "../shared/ui/Button";
import PasswordField from "../shared/ui/PasswordField";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import UseAuth from "@/hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: signupDefaultValues,
    schema: signupSchema,
    mode: "onChange",
  });
  const navigate = useNavigate();
  const { signup } = UseAuth();
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      await signup(data);
      navigate("/");
    } catch (err) {
      setError("root", {
        message:
          err.response?.data?.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center w-full p-6 md:px-8 md:py-4 max-w-md min-h-[400px] md:min-h-[600px]">
      <FormHeader
        head={"Sign Up"}
        subHead={"Join us and start your pet care journey!"}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {/* Username */}
        <InputField
          register={register}
          label="Username"
          id="username"
          placeholder="Enter your username"
          error={errors.username?.message}
        />
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
        {/* Confirm Password */}
        <PasswordField
          register={register}
          label="Confirm Password"
          id="confirmPassword"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
        />
        {/* Role */}
        <SelectField
          register={register}
          label="Role"
          id="role"
          options={[
            { value: "", label: "Select your role" },
            { value: "PET_OWNER", label: "Pet Owner" },
            { value: "SERVICE_PROVIDER", label: "Service Provider" },
          ]}
          error={errors.role?.message}
        />
        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          secondary={true}
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
        {errors.root && (
          <p className="text-red-500 text-sm flex items-center mb-1">
            {errors.root.message || "An error occurred. Please try again."}
          </p>
        )}
      </form>
      <FormFooter
        title={"Already have an account?"}
        distnation={"Sign In"}
        url={"/login"}
      />
    </div>
  );
};

export default SignupForm;
