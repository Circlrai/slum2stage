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
  const { register, handleSubmit, reset, setValue, formState: { isSubmitting, errors } } = useForm<FormOneData>();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);



  const [selectedKids, setSelectedKids] = useState("");

  const onSubmit = async (data: FormOneData) => {
    setError(null);
    setIsSubmittingLocal(true);

    try {
      const payload = { ...data, kids: selectedKids };

      const response = await sendEmail(payload);

      if (response && response.message === "Email sent") {
        setIsSuccessModalOpen(true);
        reset();
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
              label="Name of guardian/parent"
              htmlFor="guardian"
              type="text"
              id="guardian"
              size="sm"
              placeholder="Enter Your Name"
              reqValue="*"
              required
              register={register("guardian", { required: true })}
              isInvalid={!!errors.guardian}
              errorMessage="Full name is required"
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
            />

            <FormField
              label="Email"
              htmlFor="email"
              type="email"
              id="email"
              size="sm"
              placeholder="Enter Your Email"
              reqValue="*"
              required
              register={register("email", { required: true })}
              isInvalid={!!errors.email}
              errorMessage="Email is required"
              inputClassName="text-white placeholder:text-gray-300"
              labelClassName="text-white"
            />

            <div className="space-y-2">
              <label className="block mb-2 text-sm md:text-base lg:text-xl text-white font-sf-display font-normal">
                Number of Kids
              </label>
              <Select
                onValueChange={(val) => {
                  setSelectedKids(val)
                  setValue("kids", val)
                }}
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
                    placeholder="Select number of kids"
                    className="text-white placeholder:text-gray-300 font-sf-display font-normal"
                  />
                </SelectTrigger>

                <SelectContent className="py-4 text-black bg-white border ">
                  <SelectGroup>
                    <SelectLabel className="text-black">No. of kids</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmittingLocal}
              className={`hover:shadow-form rounded-full bg-primary py-3 px-8 text-base font-semibold text-white w-full ${(isSubmitting || isSubmittingLocal) ? 'opacity-70 cursor-not-allowed' : ''
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
              Thank you for your interest in volunteering with us. We&apos;ll get back to you soon.
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