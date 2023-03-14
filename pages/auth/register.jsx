import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const auth = useAuth();
  return (
    <div>
      <form method="post" className="flex flex-col">
        <div>
          <input
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            type="text"
            name="first_name"
            autoComplete="true"
            placeholder="First Name"
            id=""
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            type="text"
            name="last_name"
            autoComplete="true"
            placeholder="Last Name"
            id=""
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            type="email"
            name="Email"
            autoComplete="true"
            placeholder="Email"
            id=""
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            type="text"
            name="username"
            placeholder="Username"
            id=""
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            id=""
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            id=""
            onChange={(event) => setConfirm(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            id=""
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            id=""
            onChange={(event) => setStreet(event.target.value)}
          />
          <input
            type="number"
            name="Number"
            placeholder="Number"
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            id=""
            onChange={(event) => setNumber(event.target.value)}
          />
          <input
            type="number"
            name="zip_code"
            placeholder="Zip Code"
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            id=""
            onChange={(event) => setZipcode(event.target.value)}
          />
          <input
            type="tel"
            name="phone"
            className="border px-2 max-w-xs py-1 my-3 self-center rounded-lg"
            placeholder="Phone Number"
            id=""
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <button
          className="bg-sky-400 px-3 py-1 max-w-xs self-center text-white rounded-md"
          onClick={(ev) => {
            ev.preventDefault();
            auth.register({
              email,
              username,
              password,
              name: { firstname: firstName, lastname: lastName },
              address: {
                city,
                street,
                number,
                zipcode,
                geolocation: {
                  lat: "-37.3159",
                  long: "81.1496",
                },
              },
              phone,
            });
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
