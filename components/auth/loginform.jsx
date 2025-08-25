"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      window.location.href = "/landing";
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardHeader className="flex flex-col items-center">
          <img
            src="/lononobg.png"
            alt="Logo"
            className="w-34 h-24 mb-2"
          />
          <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login
            </Button>
            <button
  type="button"
  className="text-blue-500 text-sm mt-2 underline cursor-pointer"
>
  <Link href="/auth/forgotpassword">Forgot Password?</Link>
</button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </CardFooter>
      </Card>
    </div>
  );
}
