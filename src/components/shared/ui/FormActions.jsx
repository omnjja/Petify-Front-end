import React from "react";
import Button from "./Button";

const FormActions = ({
  onCancel,
  isSubmitting,
  submitLabel = "Save",
  cancelLabel = "Cancel",
}) => (
  <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
    <Button cancel className="w-full sm:w-fit" onClick={onCancel}>
      {cancelLabel}
    </Button>
    <Button
      type="submit"
      primary
      disabled={isSubmitting}
      className="w-full sm:w-fit"
    >
      {isSubmitting ? `${submitLabel.replace(/e$/, "")}ing...` : submitLabel}
    </Button>
  </div>
);

export default FormActions;
