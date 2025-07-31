// components/shared/form/Form_Field.tsx
"use client";
import React, { ReactElement } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@heroui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  type: string;
  id: string;
  variant?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  size: string;
  startcnt?: string | ReactElement;
  placeholder?: string;
  reqValue?: string;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  type,
  id,
  isInvalid,
  errorMessage,
  placeholder,
  startcnt,
  reqValue,
  required,
  minLen,
  maxLen,
  disabled,
  register,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={htmlFor} className="mb-2 text-sm md:text-base lg:text-xl text-black font-sf-display font-normal">
        {label} <sup className="text-danger">{reqValue}</sup>
      </Label>
      <Input
        type={type}
        id={id}
        variant="bordered"
        classNames={{
          inputWrapper: [
            "data-[hover=true]:border-slum_gray_300 font-sf-display font-normal",
            "group-data-[focus=true]:border-slum_gray_300",
            "rounded-[8px] font-sans",
          ],
        }}
        aria-label={label}
        size="md"
        placeholder={placeholder}
        startContent={startcnt}
        minLength={minLen}
        maxLength={maxLen}
        disabled={disabled}
        required={required}
        {...register}
      />
      {isInvalid && <div className="text-red-500 text-xs">{errorMessage}</div>}
    </div>
  );
};

export default FormField;
