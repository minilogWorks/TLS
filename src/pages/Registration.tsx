import React, { useEffect, useState } from "react";

type MemberFormData = {
  firstName: string;
  surname: string;
  otherNames: string;
  email: string;
  phone: string;
  whatsapp: string;
  sameAsPhone: boolean;
  gender: string;
  dob: string;
  maritalStatus: string;
  ministry: string;
  address: string;
  consent: boolean;
};

export default function RegistrationForm(): JSX.Element {
  const [form, setForm] = useState<MemberFormData>({
    firstName: "",
    surname: "",
    otherNames: "",
    email: "",
    phone: "",
    whatsapp: "",
    sameAsPhone: false,
    gender: "",
    dob: "",
    maritalStatus: "",
    ministry: "",
    address: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation helpers
  const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  // Accepts +countrycode or local formats, 9 to 15 digits total
  const phoneValid = (v: string) =>
    /^(\+?\d{1,3}[\s-]?)?\d{9,14}$/.test(v.replace(/\s+/g, ""));

  // Keep whatsapp in sync when sameAsPhone is checked
  useEffect(() => {
    if (form.sameAsPhone) {
      setForm((p) => ({ ...p, whatsapp: p.phone }));
      setErrors((e) => ({ ...e, whatsapp: "" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.sameAsPhone]);

  // If user changes phone while sameAsPhone is true, update whatsapp
  useEffect(() => {
    if (form.sameAsPhone) {
      setForm((p) => ({ ...p, whatsapp: form.phone }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.phone]);

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => {
      // when user unchecks sameAsPhone, keep whatsapp as it was
      if (name === "sameAsPhone") {
        return {
          ...prev,
          sameAsPhone: Boolean(val),
          whatsapp: Boolean(val) ? prev.phone : prev.whatsapp,
        };
      }

      // normal update
      const next = { ...prev, [name]: val };

      // If sameAsPhone is true, keep whatsapp synced
      if (name === "phone" && prev.sameAsPhone) {
        next.whatsapp = String(val);
      }

      return next as MemberFormData;
    });

    // simple live validation for key fields
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: emailValid(val as string) ? "" : "Enter a valid email",
      }));
    }

    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: phoneValid(val as string) ? "" : "Enter a valid phone",
      }));
    }

    if (name === "whatsapp") {
      setErrors((prev) => ({
        ...prev,
        whatsapp: phoneValid(val as string)
          ? ""
          : "Enter a valid WhatsApp number",
      }));
    }
  };

  const validateAll = () => {
    const e: Record<string, string> = {};

    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.surname.trim()) e.surname = "Required";
    if (!emailValid(form.email)) e.email = "Enter a valid email";
    if (!phoneValid(form.phone)) e.phone = "Enter a valid phone";
    if (!form.sameAsPhone && !phoneValid(form.whatsapp))
      e.whatsapp = "Enter a valid WhatsApp number";
    if (!form.gender) e.gender = "Select gender";
    if (!form.dob) e.dob = "Select date of birth";
    if (!form.maritalStatus) e.maritalStatus = "Select marital status";
    if (!form.address.trim()) e.address = "Enter address";
    if (!form.consent) e.consent = "You must give consent";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validateAll()) return;

    // Final ensure whatsapp matches phone if sameAsPhone
    const payload = {
      ...form,
      whatsapp: form.sameAsPhone ? form.phone : form.whatsapp,
    };

    // Replace with your submit logic
    console.log("Submitting registration", payload);

    // simple success flow
    alert("Member registered");
    setForm({
      firstName: "",
      surname: "",
      otherNames: "",
      email: "",
      phone: "",
      whatsapp: "",
      sameAsPhone: false,
      gender: "",
      dob: "",
      maritalStatus: "",
      ministry: "",
      address: "",
      consent: false,
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">
          Church Member Registration
        </h2>

        {/* Names row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleInput}
              className={`mt-1 w-full border rounded px-3 py-2 ${
                errors.firstName ? "border-red-500" : ""
              }`}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">Surname</label>
            <input
              name="surname"
              value={form.surname}
              onChange={handleInput}
              className={`mt-1 w-full border rounded px-3 py-2 ${
                errors.surname ? "border-red-500" : ""
              }`}
              placeholder="Surname"
            />
            {errors.surname && (
              <p className="text-red-600 text-xs mt-1">{errors.surname}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">Other Names</label>
            <input
              name="otherNames"
              value={form.otherNames}
              onChange={handleInput}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="Other names"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleInput}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="name@example.com"
            required
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone and WhatsApp row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleInput}
              className={`mt-1 w-full border rounded px-3 py-2 ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="+233 24 000 0000"
              required
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">WhatsApp Number</label>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="sameAsPhone"
                checked={form.sameAsPhone}
                onChange={handleInput}
                className="h-4 w-4"
                aria-label="WhatsApp same as phone"
              />
              <span className="text-sm">WhatsApp number is same as phone</span>
            </div>

            {!form.sameAsPhone && (
              <>
                <input
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleInput}
                  className={`mt-2 w-full border rounded px-3 py-2 ${
                    errors.whatsapp ? "border-red-500" : ""
                  }`}
                  placeholder="+233 24 000 0000"
                  required
                />
                {errors.whatsapp && (
                  <p className="text-red-600 text-xs mt-1">{errors.whatsapp}</p>
                )}
              </>
            )}

            {form.sameAsPhone && (
              <p className="mt-2 text-sm text-gray-600">
                Using phone number for WhatsApp
              </p>
            )}
          </div>
        </div>

        {/* Gender and DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleInput}
              className={`mt-1 w-full border rounded px-3 py-2 ${
                errors.gender ? "border-red-500" : ""
              }`}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-600 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleInput}
              className={`mt-1 w-full border rounded px-3 py-2 ${
                errors.dob ? "border-red-500" : ""
              }`}
              required
            />
            {errors.dob && (
              <p className="text-red-600 text-xs mt-1">{errors.dob}</p>
            )}
          </div>
        </div>

        {/* Marital status */}
        <div>
          <label className="block text-sm">Marital Status</label>
          <select
            name="maritalStatus"
            value={form.maritalStatus}
            onChange={handleInput}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.maritalStatus ? "border-red-500" : ""
            }`}
            required
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Divorced">Divorced</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-600 text-xs mt-1">{errors.maritalStatus}</p>
          )}
        </div>

        {/* Ministry */}
        <div>
          <label className="block text-sm">Ministry / Department</label>
          <input
            name="ministry"
            value={form.ministry}
            onChange={handleInput}
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="Ushering, Choir, Media, etc."
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleInput}
            className={`mt-1 w-full border rounded px-3 py-2 ${
              errors.address ? "border-red-500" : ""
            }`}
            placeholder="Enter member's address"
            rows={3}
            required
          />
          {errors.address && (
            <p className="text-red-600 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleInput}
            className="h-4 w-4"
            aria-label="consent"
          />
          <label className="text-sm">
            I consent to my data being stored for church administration and
            communication
          </label>
        </div>
        {errors.consent && (
          <p className="text-red-600 text-xs">{errors.consent}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register Member
        </button>
      </form>
    </div>
  );
}
