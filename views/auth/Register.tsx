"use client";

"use client";

import React, { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { FormOneData } from '@/types/formType';
import { sendEmail } from '@/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleCheckBig } from 'lucide-react';
import FormField from '@/components/shared/form/Form_Field';
import { PinterestMasonry } from '@/components/shared/Mansory_Grid';


const Register_Form = () => {
  const { register, handleSubmit, reset, setValue, formState: { isSubmitting, errors } } = useForm<FormOneData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      age: "",
      gender: ""
    }
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);



  const [selectedGender, setSelectedGender] = useState("");

  const onSubmit = async (data: FormOneData) => {
    setError(null);
    setIsSubmittingLocal(true);

    try {
      const payload = {
        ...data,
        gender: selectedGender || data.gender,
      };

      const response = await sendEmail(payload);

      if (response && response.message === "Email sent") {
        setIsSuccessModalOpen(true);
        reset();
        setSelectedGender("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Frontend error:", err);
    } finally {
      setIsSubmittingLocal(false);
    }
  };




  return (
    <>
      <div className="flex flex-col lg:flex-row w-full pt-24 justify-between lg:h-screen lg:overflow-hidden">
        <div className="w-full lg:w-3/5 px-4 pt-20 bg-white pb-4 lg:pb-20 lg:px-16
        lg:overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="space-y-4 mb-10 lg:ps-[16%] ">
            <h2
              className={`font-sf-display font-semibold text-[28px] md:text-[32px] lg:text-[56px]`}
            >
              Become a Volunteer
            </h2>
            {/* <p className="w-full lg:max-w-xl font-sf-display font-normal text-slum_gray_900 text-sm md:text-base lg:text-[25px] leading-[36px] lg:leading-[32px]">
              Join our  dance school and give your child the opportunity to learn, grow, and perform. Classes available for all ages and skill levels.
            </p> */}
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:px-32">
            <FormField
              label="Full name"
              htmlFor="fullName"
              type="text"
              id="fullName"
              size="sm"
              placeholder="Enter your full name"
              reqValue="*"
              required
              register={register("fullName", { required: true })}
              isInvalid={!!errors.fullName}
              errorMessage="Full name is required"
              inputClassName="placeholder:text-gray-400"

            />

            <FormField
              label="Email Address"
              htmlFor="email"
              type="email"
              id="email"
              size="sm"
              placeholder="Enter your email address"
              reqValue="*"
              required
              register={register("email", { required: true })}
              isInvalid={!!errors.email}
              errorMessage="Email is required"
              inputClassName="placeholder:text-gray-400"
            />

            <FormField
              label="Phone Number"
              htmlFor="phoneNumber"
              type="tel"
              id="phoneNumber"
              size="sm"
              placeholder="Enter your phone number"
              reqValue="*"
              required
              register={register("phoneNumber", { required: true })}
              isInvalid={!!errors.phoneNumber}
              errorMessage="Phone number is required"
              inputClassName="placeholder:text-gray-400"
            />

            <FormField
              label="Location"
              htmlFor="location"
              type="text"
              id="location"
              size="sm"
              placeholder="Enter your location"
              reqValue="*"
              required
              register={register("location", { required: true })}
              isInvalid={!!errors.location}
              errorMessage="Location is required"
              inputClassName="placeholder:text-gray-400"
            />

            <FormField
              label="Age"
              htmlFor="age"
              type="number"
              id="age"
              size="sm"
              placeholder="Enter your age"
              reqValue="*"
              required
              register={register("age", { required: true })}
              isInvalid={!!errors.age}
              errorMessage="Age is required"
              inputClassName="placeholder:text-gray-400"
            />

            <div className="space-y-2">
              <label className="block mb-2 text-sm md:text-base lg:text-xl font-sf-display font-normal">
                Gender
              </label>
              <Select
                onValueChange={(val) => {
                  setSelectedGender(val);
                  setValue("gender", val, { shouldValidate: true, shouldDirty: true });
                }}
                value={selectedGender}
              >
                <SelectTrigger
                  style={{
                    color: "#98A2B3",
                    borderColor: "#D0D5DD",
                    borderWidth: "2px",
                    borderRadius: "8px",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontSize: "1rem",
                    fontFamily: "font-sf-display",
                    fontWeight: 400,
                  }}
                >
                  <SelectValue
                    placeholder="Select gender"
                    className="placeholder:text-gray-400 font-sf-display font-normal"
                  />
                </SelectTrigger>

                <SelectContent className="py-4 text-black bg-white border ">
                  <SelectGroup>
                    <SelectLabel className="text-black">Gender</SelectLabel>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input
                type="hidden"
                {...register("gender", { required: true })}
              />
              {errors.gender && (
                <p className="text-sm text-red-200">Gender is required</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmittingLocal}
              className={`hover:shadow-form rounded-full bg-primary py-3 px-8 text-base md:text-lg lg:text-[25px] font-semibold text-white w-full ${(isSubmitting || isSubmittingLocal) ? 'opacity-70 cursor-not-allowed' : ''
                }`}
            >
              {(isSubmitting || isSubmittingLocal) ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>


        <div className="w-full lg:w-[34%] h-full flex-wrap">
          <PinterestMasonry />
        </div>
      </div >
      {/* Success Modal */}
      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="flex flex-col sm:max-w-[425px] bg-white text-slum_gray_900 items-center justify-center">
          <DialogHeader>
            <DialogTitle className="flex flex-col gap-6 text-center text-xl font-semibold items-center justify-center">
              Message Sent Successfully!
              <CircleCheckBig className='w-20 h-20 text-primary' />
            </DialogTitle>
            <DialogDescription className='text-center text-lg'>
              Thank you for your interest in joining Slum to Stage. We are building a community of individuals passionate about transforming the lives of children and at risk youth through arts and education. Your interest is recorded and our team will reach out to you.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>

  );
};

export default Register_Form;