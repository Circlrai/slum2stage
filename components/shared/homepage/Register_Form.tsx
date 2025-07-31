"use client";

import React, { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image } from '@heroui/image';
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
    <section className="relative bg-black min-h-screen text-white">

      <div className="md:hidden absolute inset-0 z-0 h-[100dvh]">
        <div className="absolute inset-0 bg-black/10"></div>
        <Image
          loading="lazy"
          src="/assets/images/bottom.jpg"
          alt="Children at school"
          className="object-cover w-full h-full rounded-none"
          width={100}
          height={100}
        />
      </div>


      <div className="relative z-10 flex flex-col md:flex-row pt-12 lg:pt-0">

        <div className="w-full md:w-1/2 flex items-center justify-center p-4 lg:p-6 mt-6 ps-[2%]">
          <div className="w-full max-w-md bg-white text-black rounded-xl p-8 md:bg-opacity-100 bg-opacity-90">
            <h1 className="flex flex-col text-3xl lg:text-5xl font-sf-display font-semibold mb-8 lg:mb-4 text-slum_gray-800">
              Become a Volunter
            </h1>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <FormField
                  label="Name of guardian/parent"
                  htmlFor="guardian"
                  type="text"
                  id="guardian"
                  size="sm"
                  placeholder="FirstName LastName"
                  reqValue="*"
                  required
                  register={register("guardian", { required: true })}
                  isInvalid={!!errors.guardian}
                  errorMessage="Full name is required"
                />
              </div>
              <div className="space-y-2">
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
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm text-slum_gray_700 font-normal font-sans">
                  Number of Kids
                </label>
                <Select onValueChange={(val) => {
                  setSelectedKids(val)
                  setValue("kids", val)
                }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select number of kids" />
                  </SelectTrigger>
                  <SelectContent className='py-4'>
                    <SelectGroup>
                      <SelectLabel>No. of kids</SelectLabel>
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
                className={`hover:shadow-form rounded-full bg-primary py-3 px-8 text-base font-semibold text-white outline-none w-full ${isSubmitting || isSubmittingLocal ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {(isSubmitting || isSubmittingLocal) ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>


        <div className="hidden md:flex w-full md:w-1/2 relative h-full">
          <Image
            src="/assets/images/bottom.jpg"
            alt="Children at school"
            className="object-cover w-full h-full rounded-none"
          // width={100}
          // height={500}
          />
        </div>
      </div>


      <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <DialogContent className="flex flex-col sm:max-w-[425px] bg-white text-slum_gray_900 items-center justify-center">
          <DialogHeader>
            <DialogTitle className="flex flex-col gap-6 text-center text-xl font-semibold items-center justify-center">
              Message Sent Successfully!
              <CircleCheckBig className='flex w-20 h-20 text-primary items-center justify-center' />
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