import Image from "next/image";
import Register_Form from "./homepage/Register_Form";

export default function VolunteerRegistration() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          loading="lazy"
          src="/placeholder.svg"
          alt="Children at school"
          fill
          className="object-cover"
          priority
        />
      </div>


      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Main content */}
      <div className="relative z-20">
        {/* Form section */}
        <Register_Form />
      </div>
    </div>
  );
}
