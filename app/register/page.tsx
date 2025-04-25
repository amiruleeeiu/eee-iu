"use client";

import Input from "@/components/form/input";
import { useGetUsersQuery, usePostUserMutation } from "@/services/apiSlice";
import { Controller, FormProvider, useForm } from "react-hook-form";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const sessionOptions = [
  { label: "2011-2012", value: "2011-2012" },
  { label: "2012-2013", value: "2012-2013" },
  { label: "2013-2014", value: "2013-2014" },
  { label: "2014-2015", value: "2014-2015" },
];

export default function RegisterPage() {
  const methods = useForm();

  const [postUser] = usePostUserMutation();

  const { data } = useGetUsersQuery("");

  const onSubmit = (data: any) => {
    console.log("Submitted:", data);
    postUser(data);
  };

  console.log(data);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  console.log(methods?.getValues());

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-5xl">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}

              <Input name="name" placeholder="Enter Name" />

              {/* Gender */}
              <div>
                <label className="block text-md text-gray-700 mb-1">
                  Gender
                </label>
                <Controller
                  control={control}
                  name="gender"
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-3 py-[10px] border border-gray-300 rounded focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-blue-700 focus:border-blue-500 transition duration-700 ease-in-out"
                    >
                      <option value="">Select Gender</option>
                      {genderOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.gender.message?.toString()}
                  </p>
                )}
              </div>

              {/* Phone */}
              <Input name="phone" placeholder="Phone No" />

              {/* Email */}
              <Input name="email" placeholder="Email" />

              {/* Session */}

              <div>
                <label className="block text-md text-gray-700 mb-1">
                  Session
                </label>
                <Controller
                  control={control}
                  name="session"
                  rules={{ required: "Session is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-3 py-[10px] border border-gray-300 rounded focus:shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-blue-700 focus:border-blue-500 transition duration-700 ease-in-out"
                    >
                      <option value="">Select Session</option>
                      {sessionOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.session && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.session.message?.toString()}
                  </p>
                )}
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="input-style"
                  {...register("profile_picture")}
                />
              </div>

              {/* Designation */}
              <Input name="designation" placeholder="Designation" />

              {/* Organization */}
              <Input name="organization" placeholder="Organization" />
            </div>
            {/* Present Address */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Present Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="present.district" placeholder="District" />
                <Input name="present.thana" placeholder="Thana" />
                <Input name="present.postcode" placeholder="Post Code" />
                <Input name="present.village" placeholder="Village/Basha" />
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Permanent Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="permanent.district" placeholder="District" />
                <Input name="permanent.thana" placeholder="Thana" />
                <Input name="permanent.postcode" placeholder="Post Code" />
                <Input name="permanent.village" placeholder="Village/Basha" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Register
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
