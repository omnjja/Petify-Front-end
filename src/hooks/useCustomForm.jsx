import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useCustomForm = ({ defaultValues = {}, schema, mode = "onChange" }) => {
  return useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: mode,
    reValidateMode: "onChange",
  });
};

export default useCustomForm;
