"use client";

import { useState, useRef, FormEvent } from "react";

const projectTypes = [
  "Rough-in & New Build",
  "Fit-out & Refurbishment",
  "Hydraulic Services",
  "Gas Fitting",
  "Drainage & Stormwater",
  "Roofing",
  "Hot Water",
  "Maintenance Contract",
  "Other",
];

const timelines = [
  "ASAP",
  "1–3 Months",
  "3–6 Months",
  "6+ Months",
];

interface FormErrors {
  [key: string]: string;
}

export default function QuoteForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.get("fullName")) errs.fullName = "Full name is required.";
    if (!data.get("companyName")) errs.companyName = "Company name is required.";
    if (!data.get("phone")) errs.phone = "Phone number is required.";
    const email = data.get("email") as string;
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address.";
    }
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-white border px-4 py-3 text-sm text-black placeholder-[#888888] focus:outline-none focus:border-black transition-colors ${
      errors[field] ? "border-black" : "border-[#888888]"
    }`;

  if (submitted) {
    return (
      <div className="border border-black p-12 text-center">
        <div className="w-12 h-12 bg-black mx-auto mb-6 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 10l5 5 9-9" stroke="white" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </div>
        <h3 className="font-black text-xl uppercase tracking-wide text-black mb-3">
          Enquiry Sent
        </h3>
        <p className="text-[#888888] text-sm leading-relaxed max-w-sm mx-auto">
          Thanks for reaching out. Our team will review your project details
          and get back to you promptly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Row: Full Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
            Full Name <span className="text-[#888888]">*</span>
          </label>
          <input
            name="fullName"
            type="text"
            placeholder="James Robertson"
            className={inputClass("fullName")}
          />
          {errors.fullName && (
            <p className="text-black text-xs mt-1 font-medium">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
            Company Name <span className="text-[#888888]">*</span>
          </label>
          <input
            name="companyName"
            type="text"
            placeholder="Robertson Constructions"
            className={inputClass("companyName")}
          />
          {errors.companyName && (
            <p className="text-black text-xs mt-1 font-medium">{errors.companyName}</p>
          )}
        </div>
      </div>

      {/* Role */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
          Role / Title
        </label>
        <input
          name="role"
          type="text"
          placeholder="Project Manager"
          className={inputClass("role")}
        />
      </div>

      {/* Row: Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
            Phone <span className="text-[#888888]">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="0400 000 000"
            className={inputClass("phone")}
          />
          {errors.phone && (
            <p className="text-black text-xs mt-1 font-medium">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
            Email <span className="text-[#888888]">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="james@company.com.au"
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="text-black text-xs mt-1 font-medium">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
          Project Type
        </label>
        <select name="projectType" className={inputClass("projectType")}>
          <option value="">Select a service...</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Row: Location + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
            Project Location
          </label>
          <input
            name="location"
            type="text"
            placeholder="Melbourne suburb"
            className={inputClass("location")}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
            Estimated Timeline
          </label>
          <select name="timeline" className={inputClass("timeline")}>
            <option value="">Select timeline...</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
          Project Description
        </label>
        <textarea
          name="description"
          rows={5}
          placeholder="Briefly describe the project scope, size, and any key requirements..."
          className={`${inputClass("description")} resize-none`}
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
          Upload Plans / Specs
        </label>
        <div
          className="border border-[#888888] p-4 cursor-pointer hover:border-black transition-colors duration-150 flex items-center gap-4"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="bg-black text-white text-xs font-bold px-4 py-2 uppercase tracking-wide whitespace-nowrap">
            Choose File
          </div>
          <span className="text-[#888888] text-sm truncate">
            {fileName || "No file chosen, PDF, DWG accepted"}
          </span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          name="file"
          accept=".pdf,.dwg,.dxf,.docx"
          className="hidden"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors duration-150"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}
