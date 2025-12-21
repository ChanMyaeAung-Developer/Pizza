import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import HookFormInput from "../component/form/HookFormInput";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const terminationSchema = z.object({
  emails: z
    .array(z.string())
    .min(1, "Email required"),

  template: z.string().min(1, ""),

  subject: z.string().min(1, "Subject required"),

  body: z.string().min(1, "Body required"),
});

const List= ({ isOpen, onClose }) => {

      const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(terminationSchema),
        defaultValues: {
          emails: [],
          template: "",
          subject: "",
          body: "",
        },
      });


      const onSubmit = (data) => {
        console.log("SUBMIT DATA =>", data);
        onClose();
      };

      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999990] bg-black/30 backdrop-blur-[1px]">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden">

            
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">Add Termination Email</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-black">
                <IoClose size={24} />
              </button>
            </div>

        
            <form
              onSubmit={handleSubmit(onSubmit)}
              
              className="p-6 space-y-4"
            >
            

            
              <div className="grid grid-cols-4 items-start gap-4">
                <label className="col-span-1 text-center mt-3 font-medium text-gray-700">
                  Email
                </label>

                <div className="col-span-3">
                  <Controller
                    name="emails"
                    control={control}
                    render={({ field }) => {
                      const { value, onChange } = field;
                      const [emailInput, setEmailInput] = useState("");

                      const handleEmailEnter = (e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();

                          const email = emailInput.trim();
                          if (!email) return;
                          if (value.includes(email)) return;

                          onChange([...value, email]); 
                          setEmailInput("");
                        }
                      };

                      const removeEmail = (index) => {
                        onChange(value.filter((_, i) => i !== index));
                      };

                      return (
                        <>
                          <div className="border rounded-md focus-within:ring-1 focus-within:ring-blue-500">
                            <input
                              type="email"
                              value={emailInput}
                              onChange={(e) => setEmailInput(e.target.value)}
                              onKeyDown={handleEmailEnter}
                              placeholder="Email "
                              className="w-full p-3 outline-none text-sm rounded-md"
                            />
                          </div>

                          <div className="flex flex-wrap gap-2 mt-2">
                            {value.map((email, index) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                              >
                                {email}
                                <button
                                  type="button"
                                  onClick={() => removeEmail(index)}
                                  className="hover:text-red-500 font-bold"
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>

                        
                          {errors.emails && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.emails.message}
                            </p>
                          )}
                        </>
                      );
                    }}
                  />
                </div>
              </div>

            
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-1 text-center font-medium text-gray-700">
                  Template
                </div>
                <div className="col-span-3">
                  <HookFormInput
                    register={register("template")}
                    errors={errors.template}
                    placeholder="Select template..."
                  />
                </div>
              </div>

            
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-1 text-center font-medium text-gray-700">
                  Subject
                </div>
                <div className="col-span-3">
                  <HookFormInput
                    register={register("subject")}
                    errors={errors.subject}
                    placeholder="Email subject"
                  />
                </div>
              </div>

            
              <div className="grid grid-cols-4 items-start gap-4">
                <div className="col-span-1 text-center font-medium text-gray-700 pt-2">
                  Body
                </div>
                <div className="col-span-3">
                  <HookFormInput
                    type="textarea"
                    register={register("body")}
                    errors={errors.body}
                    placeholder="Write your message here..."
                  />
                </div>
              </div>

            
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      );

    }
export default List;

