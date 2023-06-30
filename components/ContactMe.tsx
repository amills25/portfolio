"use client";

import { PageInfo } from "@/typings";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: awmills25@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-4">
        Contact
      </h3>

      <div className="flex flex-col">
        <h4 className="my-4 text-4xl font-semibold text-center">
          <span className="underline decoration-[#61DBFB]/50">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="pb-4 space-y-2">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#61DBFB] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#61DBFB] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#61DBFB] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            name=""
            id=""
          />
          <button
            type="submit"
            className="bg-[#61DBFB] py-5 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
