"use client";

import { useRouter } from "next/navigation";

const UserForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    const name = e.target.name.value;
    const message = e.target.message.value;

    const formData = { name, message };

    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.insertedId) {
      alert("Success");
      router.push("/users")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="border px-3 py-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="border px-3 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;