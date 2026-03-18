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
import FormField from '../form/Form_Field';



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
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          loading="lazy"
          src="/assets/images/bottom.jpg"
          alt="Children at school"
          className="object-cover w-full h-full"
          width={1000}
          height={600}
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Main Content: Centered Form on Image */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-xl bg-white/40 backdrop-blur-sm rounded-xl p-8">
          <h1 className="text-3xl lg:text-5xl font-sf-display font-semibold mb-8 text-slum_gray-800 text-white">
            Become a Volunteer
          </h1>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
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
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
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
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
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
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
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
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
            />

            <div className="space-y-2">
              <label className="block mb-2 text-sm md:text-base lg:text-xl text-white font-sf-display font-normal">
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
                    color: "#D1D5DB",
                    borderColor: "#ffffff",
                    borderWidth: "2px",
                    borderRadius: "8px",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    fontSize: "1rem",
                    fontFamily: "font-sf-display",
                    fontWeight: 400,
                  }}
                >
                  <SelectValue
                    placeholder="Select gender"
                    className="text-white placeholder:text-gray-300 font-sf-display font-normal"
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
      </div>

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
    </section>

  );
};

export default Register_Form;
