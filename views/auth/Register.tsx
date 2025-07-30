"use client";
import { useForm } from "react-hook-form";
import FormField from "@/components/shared/form/Form_Field";
import { Label } from "@/components/ui/label";
import { PinterestMasonry } from "@/components/shared/Mansory_Grid";
import { useState } from "react";
import { FormTwoData } from "@/types/formType";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleCheckBig } from 'lucide-react';
import { registrationEmail } from "@/utils/registerEmail";




export function DanceRegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<FormTwoData>();


  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const selectedCategory = watch("category");
  const selectedStyle = watch("danceStyle");

  const categoryOptions = [
    { id: "adult", value: "Adult", label: "Adult" },
    { id: "kids", value: "Kids and Teens", label: "Kids and Teens" },
  ];

  const danceStyleOptions = [
    { id: "ballet", value: "Ballet", label: "Ballet" },
    { id: "contemporary", value: "Contemporary", label: "Contemporary" },
    { id: "hiphop", value: "Hip-Hop", label: "Hip-Hop" },
    { id: "afro", value: "Afro dance", label: "Afro dance" },
  ];

  const onSubmit = async (data: FormTwoData) => {
    setError(null);
    setIsSubmittingLocal(true);

    try {
      const response = await registrationEmail(data);
      console.log("Form Submitted:", data);
      if (response && response.message === "Email sent") {
        // Simulate success
        setIsSuccessModalOpen(true);
        reset();
      } else {
        throw new Error("Failed to send message");
      }

    } catch (err) {
      setError("Failed to send message. Please try again.");
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
              Tiny Feets, Big Moves.
            </h2>
            <p className="w-full lg:max-w-xl font-sf-display font-normal text-slum_gray_900 text-sm md:text-base lg:text-[25px] leading-[36px] lg:leading-[32px]">
              Join our  dance school and give your child the opportunity to learn, grow, and perform. Classes available for all ages and skill levels.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:px-32">
            <div className="space-y-2">
              <FormField
                label="Full Name (Surname first)"
                htmlFor="fullName"
                type="text"
                id="fullName"
                size="sm"
                placeholder="Ogunjobi Michelle"
                reqValue="*"
                required
                register={register("fullName", { required: true })}
                isInvalid={!!errors.fullName}
                errorMessage="Full name is required"
              />
            </div>

            <div className="space-y-2">
              <FormField
                label="Date of Birth"
                htmlFor="dateOfBirth"
                type="text"
                id="dateOfBirth"
                size="sm"
                placeholder="18 Nov, 2012"
                reqValue="*"
                required
                register={register("dateOfBirth", { required: true })}
                isInvalid={!!errors.dateOfBirth}
                errorMessage="Date of birth is required"
              />
            </div>

            <div className="space-y-2">
              <FormField
                label="Age"
                htmlFor="age"
                type="text"
                id="age"
                size="sm"
                placeholder="10"
                reqValue="*"
                required
                register={register("age", { required: true })}
                isInvalid={!!errors.age}
                errorMessage="Age is required"
              />
            </div>

            <div className="space-y-2">
              <FormField
                label="Parent's/Guardian's name"
                htmlFor="parentName"
                type="text"
                id="parentName"
                size="sm"
                placeholder="Mr Ogunjobi Israel"
                reqValue="*"
                required
                register={register("parentName", { required: true })}
                isInvalid={!!errors.parentName}
                errorMessage="Parent's name is required"
              />

              <FormField
                label="Address"
                htmlFor="address"
                type="text"
                id="address"
                size="sm"
                placeholder="Fari Street Garki"
                reqValue="*"
                required
                register={register("address", { required: true })}
                isInvalid={!!errors.address}
                errorMessage="Address is required"
              />
            </div>

            <div className="space-y-2">
              <FormField
                label="Email"
                htmlFor="email"
                type="email"
                id="email"
                size="sm"
                placeholder="olinicjunti@edu.com"
                reqValue="*"
                required
                register={register("email", { required: true })}
                isInvalid={!!errors.email}
                errorMessage="Email is required"
              />
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
              <Label className="mb-2 text-sm md:text-base lg:text-xl text-black font-sf-display font-normal">Category</Label>
              <div className="flex gap-4">
                {categoryOptions.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`border px-6 py-2 rounded-full font-sf-display font-normal ${selectedCategory === category.value ? "bg-primary text-white" : "border-gray-300"
                      }`}
                    onClick={() => setValue("category", category.value)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dance Style Selection */}
            <div className="space-y-2">
              <Label className="mb-2 text-sm md:text-base lg:text-xl text-black font-sf-display font-normal"> Dance Style</Label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {danceStyleOptions.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    className={`border px-4 py-2 rounded-full font-sf-display font-normal ${selectedStyle === style.value ? "bg-primary text-white" : "border-gray-300"
                      }`}
                    onClick={() => setValue("danceStyle", style.value)}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center mx-auto mt-4">
              <button
                type="submit"
                disabled={isSubmitting || isSubmittingLocal}
                className={`hover:shadow-form rounded-full bg-primary py-3 px-8 text-base font-semibold text-white outline-none w-full ${isSubmitting || isSubmittingLocal ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {(isSubmitting || isSubmittingLocal) ? 'Loading...' : 'REGISTER'}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-[34%] h-full flex-wrap">
          <PinterestMasonry />
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
              Thank you for taking the bold step. Our support team will reach out to you soon.
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
}
