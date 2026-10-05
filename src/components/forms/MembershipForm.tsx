'use client';

import { useState, useRef } from 'react';
import { districts } from '@/lib/data/districts';
import { PlanOption } from '@/lib/data/membership';

interface MembershipFormProps {
  selectedOption: PlanOption;
  categoryTitle: string;
  onBack: () => void;
}

export default function MembershipForm({
  selectedOption,
  categoryTitle,
  onBack,
}: MembershipFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Address and District states
  const [homeDistrict, setHomeDistrict] = useState('');
  const [sameAsHome, setSameAsHome] = useState(true);
  const [activityDistrict, setActivityDistrict] = useState('');

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedTxId, setSubmittedTxId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const formTopRef = useRef<HTMLDivElement>(null);

  // Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Enrich payload
    data.membershipType = selectedOption.code;
    data.planTitle = `${categoryTitle} (${selectedOption.label})`;
    data.amount = String(selectedOption.price);

    // District logic: Activity District defaults to Home District
    const finalActivityDistrict = sameAsHome ? homeDistrict : (activityDistrict || homeDistrict);
    data.district = finalActivityDistrict;
    data.homeDistrict = homeDistrict;

    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (res.ok && resData.success) {
        setSubmittedTxId((data.transactionId as string) || '');
        setSubmitSuccess(true);
        form.reset();
      } else {
        const errorMsg = resData.error || 'Failed to submit application. Please check and try again.';
        setErrorMessage(errorMsg);
        if (formTopRef.current) {
          formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('A network error occurred. Please try again.');
      if (formTopRef.current) {
        formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
        <p className="text-gray-600 mb-3 text-sm leading-relaxed max-w-md mx-auto">
          Thank you for joining Sasthra Vedhi under <strong>{categoryTitle} - {selectedOption.label}</strong> (₹{selectedOption.price}).
        </p>
        {submittedTxId && (
          <div className="inline-block bg-gray-100 text-gray-800 font-mono text-xs px-3 py-1.5 rounded-md mb-6 border">
            UTR / Ref: {submittedTxId}
          </div>
        )}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-left text-xs text-blue-900 mb-6">
          <p className="font-semibold mb-1">What happens next?</p>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Our district committee will verify your payment UTR within 24–48 hours.</li>
            <li>Your verified membership confirmation will be notified to WhatsApp (+91 {cleanPhone || phone}).</li>
            <li>Digital access to the monthly Sasthram Munnott Magazine will be activated for your registered WhatsApp and email.</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setSubmittedTxId('');
              setName('');
              setPhone('');
              setEmail('');
              setTransactionId('');
            }}
            className="bg-[#145AC6] hover:bg-[#0D3E83] text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition"
          >
            Submit Another Application
          </button>
          <button
            onClick={onBack}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-5 py-2.5 rounded-lg transition"
          >
            ← Choose Another Plan
          </button>
        </div>
      </div>
    );
  }

  const txClean = transactionId.trim();
  const isTxValidLength = txClean.length >= 12;

  return (
    <div ref={formTopRef} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 scroll-mt-6">
      {/* Header with Plan Info & Change Button */}
      <div className="flex items-start justify-between border-b border-gray-100 pb-5 mb-6 gap-4">
        <div>
          <span className="text-[11px] font-bold text-[#145AC6] uppercase tracking-wider block">
            Step 2: Applicant Information
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-0.5">Applicant Details</h3>
          <p className="text-xs text-gray-500 mt-1">
            Applying for: <strong className="text-gray-800">{categoryTitle} ({selectedOption.label})</strong> — ₹{selectedOption.price}
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-semibold text-[#145AC6] hover:underline flex items-center gap-1 flex-shrink-0 pt-1"
        >
          ← Change Plan
        </button>
      </div>

      {errorMessage && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-start gap-2.5 leading-relaxed">
          <span className="text-base flex-shrink-0">⚠️</span>
          <div>
            <span className="font-bold block mb-0.5">Registration Warning</span>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="membershipType" value={selectedOption.code} />

        {/* SECTION 1: Personal & Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-800 pb-1 border-b border-gray-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#145AC6] flex items-center justify-center text-[11px]">
              1
            </span>
            <span>Personal & Contact Info (വ്യക്തിഗത വിവരങ്ങൾ)</span>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. K. Radhakrishnan / Anjali Nair"
                className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] focus:border-[#145AC6] outline-none transition"
              />
            </div>
          </div>

          {/* Mobile & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                WhatsApp Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-xs font-bold text-gray-500">
                  +91
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full pl-11 pr-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] outline-none transition font-mono"
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                For WhatsApp confirmation and magazine notices
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] outline-none transition"
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                For digital membership receipt & updates
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: DYNAMIC STUDENT OR SENIOR VERIFICATION */}
        {selectedOption.isStudent && (
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 pb-1 border-b border-amber-200/60">
              <span>🎓</span>
              <span>Student Verification (വിദ്യാർത്ഥി വിവരങ്ങൾ)</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-normal">
              Subsidized student rate (₹{selectedOption.price}). Please specify your institution details:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-1">
                  School / College / University <span className="text-red-500">*</span>
                </label>
                <input
                  name="institutionName"
                  type="text"
                  required
                  placeholder="e.g. Govt. Arts & Science College, Kozhikode"
                  className="w-full px-3 py-2 text-xs border border-amber-300 bg-white rounded-lg focus:ring-2 focus:ring-[#145AC6] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-800 mb-1">
                  Course & Year / Class <span className="text-red-500">*</span>
                </label>
                <input
                  name="courseGrade"
                  type="text"
                  required
                  placeholder="e.g. B.Sc Physics (2nd Year) / Plus Two"
                  className="w-full px-3 py-2 text-xs border border-amber-300 bg-white rounded-lg focus:ring-2 focus:ring-[#145AC6] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Student ID / Roll No. (Optional)
              </label>
              <input
                name="studentId"
                type="text"
                placeholder="e.g. ID No. 4029 / Roll No. 24"
                className="w-full px-3 py-2 text-xs border border-amber-300 bg-white rounded-lg focus:ring-2 focus:ring-[#145AC6] outline-none"
              />
            </div>
          </div>
        )}

        {selectedOption.isSenior && (
          <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-900 pb-1 border-b border-purple-200/60">
              <span>🎖️</span>
              <span>Senior Citizen Verification (60+ Years)</span>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Age / Year of Birth <span className="text-red-500">*</span>
              </label>
              <input
                name="seniorAge"
                type="text"
                required
                placeholder="e.g. 65 Years (Born 1960)"
                className="w-full px-3 py-2 text-xs border border-purple-300 bg-white rounded-lg focus:ring-2 focus:ring-[#145AC6] outline-none"
              />
            </div>
          </div>
        )}

        {/* SECTION 3: Permanent Address */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-800 pb-1 border-b border-gray-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#145AC6] flex items-center justify-center text-[11px]">
              {selectedOption.isStudent || selectedOption.isSenior ? '3' : '2'}
            </span>
            <span>Permanent Address (സ്ഥിര വിലാസം)</span>
          </div>

          {/* Detailed Street & Postal Address */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Permanent Residential Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              rows={3}
              required
              placeholder="House/Apartment Name, Village/Town, Post Office..."
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] outline-none transition"
            ></textarea>
          </div>

          {/* Permanent District & PIN Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Permanent District (സ്ഥിര ജില്ല) <span className="text-red-500">*</span>
              </label>
              <select
                name="homeDistrict"
                required
                value={homeDistrict}
                onChange={(e) => setHomeDistrict(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] focus:border-[#145AC6] outline-none transition bg-white font-medium"
              >
                <option value="" disabled>Select your permanent district</option>
                {districts.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Postal PIN Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <input
                  name="pincode"
                  type="text"
                  required
                  maxLength={6}
                  pattern="[0-9]{6}"
                  placeholder="e.g. 673001"
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] outline-none transition font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: District of Activity (Defaults to Permanent District) */}
        <div className="space-y-3 bg-slate-50/70 border border-slate-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-800 pb-1 border-b border-gray-200">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#145AC6] flex items-center justify-center text-[11px]">
              {selectedOption.isStudent || selectedOption.isSenior ? '4' : '3'}
            </span>
            <span>District of Activity (പ്രവർത്തന ജില്ല)</span>
          </div>

          <p className="text-[11px] text-gray-600 leading-normal">
            Select the district where you wish to actively work with Sasthra Vedhi. By default, this is set to your Permanent District.
          </p>

          <label className="flex items-center gap-2.5 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={sameAsHome}
              onChange={(e) => setSameAsHome(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#145AC6] focus:ring-[#145AC6]"
            />
            <span className="text-xs font-semibold text-gray-800">
              Same as Permanent District ({homeDistrict || 'Selected Above'})
            </span>
          </label>

          {!sameAsHome && (
            <div className="pt-2 animate-fadeIn">
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Select Different Activity District (ജോലി / പഠന ജില്ല) <span className="text-red-500">*</span>
              </label>
              <select
                name="activityDistrictSelect"
                value={activityDistrict}
                onChange={(e) => setActivityDistrict(e.target.value)}
                required={!sameAsHome}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] outline-none transition bg-white font-medium"
              >
                <option value="" disabled>Select district where you work/study</option>
                {districts.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* SECTION 5: Youth Wing */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-800 pb-1 border-b border-gray-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#145AC6] flex items-center justify-center text-[11px]">
              {selectedOption.isStudent || selectedOption.isSenior ? '5' : '4'}
            </span>
            <span>YuvaSasthraVedhi (യുവ ശാസ്ത്രവേദി)</span>
          </div>

          {/* YuvaSasthraVedhi Toggle Card */}
          <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-200 rounded-2xl p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                name="yuvaVedhi"
                type="checkbox"
                value="yes"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#145AC6] focus:ring-[#145AC6]"
              />
              <div>
                <span className="text-xs font-bold text-blue-900 block flex items-center gap-1.5">
                  🚀 Join YuvaSasthraVedhi (Youth Wing, Age up to 40)
                </span>
                <span className="text-[11px] text-blue-700 block mt-0.5 leading-relaxed">
                  Participate in youth science forums, tech workshops, hackathons, and grassroots science awareness drives.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* SECTION 6: UPI Payment Verification */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-800 pb-1 border-b border-gray-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-[#145AC6] flex items-center justify-center text-[11px]">
              {selectedOption.isStudent || selectedOption.isSenior ? '6' : '5'}
            </span>
            <span>Payment Verification (പേയ്മെന്റ് സ്ഥിരീകരണം)</span>
          </div>

          <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3 flex items-center justify-between text-xs">
            <span className="text-gray-600">Amount Paid via UPI:</span>
            <span className="font-extrabold text-[#145AC6] text-base">
              ₹{selectedOption.price}
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-gray-700">
                UPI Transaction ID / UTR Ref No. <span className="text-red-500">*</span>
              </label>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  isTxValidLength
                    ? 'bg-green-100 text-green-700 font-bold'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {txClean.length}/12 digits
              </span>
            </div>

            <div className="relative">
              <input
                name="transactionId"
                type="text"
                required
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="e.g. 12-digit UTR like 429381029482"
                className={`w-full px-3.5 py-2.5 text-sm border rounded-xl focus:ring-2 outline-none transition font-mono ${
                  isTxValidLength
                    ? 'border-green-400 focus:ring-green-500 bg-green-50/20'
                    : 'border-gray-300 focus:ring-[#145AC6]'
                }`}
              />
            </div>
            <p className="text-[10px] text-gray-500 mt-1">
              Found on your UPI receipt (Google Pay, PhonePe, Paytm, BHIM) after sending ₹{selectedOption.price} to <code>sastravedi8906@dlb</code>.
            </p>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="text-[11px] text-gray-400 flex items-center gap-1.5 pt-1">
          <span>🔒</span>
          <span>Your information is confidential and used exclusively for Sasthra Vedhi membership records.</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#145AC6] hover:bg-[#0D3E83] disabled:bg-blue-300 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Membership Application...
            </>
          ) : (
            `Complete Registration & Submit (₹${selectedOption.price})`
          )}
        </button>
      </form>
    </div>
  );
}

