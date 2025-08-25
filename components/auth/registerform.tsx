'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    buildClubId: "",
    registerNumber: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      window.location.href = "/auth/login"; // redirect after successful register
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-lg shadow-2xl rounded-2xl">
        <CardHeader className="flex flex-col items-center">
          <img
            src="/lononobg.png"
            alt="Logo"
            className="w-30 h-20 mb-3"
          />
          <CardTitle className="text-2xl font-bold text-gray-800">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <Input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Build Club IITM ID */}
            <div>
              <Input
                name="buildClubId"
                type="text"
                placeholder="Build Club IITM ID"
                value={form.buildClubId}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "http://121.242.232.216:3000/registration/",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
                className="text-blue-500 text-sm mt-2 underline cursor-pointer"
              >
                Don’t have an ID? Generate Now
              </button>
            </div>

            {/* Register Number */}
            <Input
              name="registerNumber"
              type="text"
              placeholder="Register Number"
              value={form.registerNumber}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Password */}
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </CardFooter>
      </Card>
    </div>
  );
}
