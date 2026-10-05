'use client';

import { useState } from 'react';
import Image from 'next/image';
import MembershipForm from '@/components/forms/MembershipForm';
import {
  planCategories,
  PlanCategory,
  PlanOption,
  membershipFaqs,
} from '@/lib/data/membership';

export default function MembershipView() {
  // Step 1: Plan selection, Step 2: Form & Payment
  const [step, setStep] = useState<1 | 2>(1);

  // Selected options inside each category
  const [selectedOptionsMap, setSelectedOptionsMap] = useState<Record<string, number>>({
    annual: 0, // default to General (index 0) or student (index 1)
    'three-year': 0,
    life: 0, // default to Regular Patron (index 0) or Senior (index 1)
  });

  const [activePlanOption, setActivePlanOption] = useState<PlanOption>(
    planCategories[1].options[0]
  );
  const [activeCategoryTitle, setActiveCategoryTitle] = useState<string>(
    planCategories[1].title
  );

  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Change sub-option for a category (e.g. Student vs General, or Senior vs Regular)
  const handleOptionChange = (categoryId: string, optionIndex: number) => {
    setSelectedOptionsMap((prev) => ({
      ...prev,
      [categoryId]: optionIndex,
    }));
  };

  // Proceed to Step 2 with the chosen plan
  const handleProceed = (category: PlanCategory) => {
    const optionIdx = selectedOptionsMap[category.id] || 0;
    const option = category.options[optionIdx];
    setActivePlanOption(option);
    setActiveCategoryTitle(category.title);
    setStep(2);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToPlans = () => {
    setStep(1);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText('sastravedi8906@dlb');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-12">
      {/* ================= STEP 1: MEMBERSHIP PLANS PANEL ================= */}
      {step === 1 && (
        <div className="space-y-12 animate-fadeIn">
          {/* Header intro */}
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Select Your Membership Plan
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Choose the tier that fits you. Explore the specific benefits included with each membership.
            </p>
          </div>

          {/* 3 Main Vertical Plan Panels */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {planCategories.map((category) => {
              const selectedOptIdx = selectedOptionsMap[category.id] || 0;
              const currentOption = category.options[selectedOptIdx];

              return (
                <div
                  key={category.id}
                  className={`rounded-2xl flex flex-col justify-between transition-all duration-200 border bg-white ${
                    category.highlight
                      ? 'border-[#145AC6] shadow-xl ring-2 ring-[#145AC6]/15 relative'
                      : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                  }`}
                >
                  {/* Top Badge */}
                  {category.badge && (
                    <div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${
                        category.highlight
                          ? 'bg-[#145AC6] text-white'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {category.badge}
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex-1">
                    {/* Title & Malayalam subtitle */}
                    <div className="text-center pb-5 border-b border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      <h4 className="text-xs font-anek text-gray-500 mt-1 font-medium">
                        {category.titleMl}
                      </h4>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                        {category.tagline}
                      </p>
                    </div>

                    {/* Sub-options selector (e.g. Student for Annual, Senior for Life) */}
                    {category.options.length > 1 && (
                      <div className="mt-5 p-1 bg-gray-100/80 rounded-xl flex gap-1">
                        {category.options.map((opt, idx) => {
                          const isOptActive = selectedOptIdx === idx;
                          return (
                            <button
                              key={opt.code}
                              type="button"
                              onClick={() => handleOptionChange(category.id, idx)}
                              className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center ${
                                isOptActive
                                  ? 'bg-white text-[#145AC6] shadow-sm font-bold'
                                  : 'text-gray-600 hover:text-gray-900'
                              }`}
                            >
                              {opt.isStudent && '🎓 '}
                              {opt.isSenior && '🎖️ '}
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Price & Duration Display */}
                    <div className="text-center my-6">
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="text-4xl font-extrabold text-[#145AC6]">
                          ₹{currentOption.price}
                        </span>
                        <span className="text-xs font-semibold text-gray-500">
                          / {currentOption.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 font-medium">
                        Tier Code: {currentOption.code} &bull; {currentOption.description}
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="border-t border-gray-100 pt-5 space-y-3">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        Membership Benefits:
                      </h5>
                      <ul className="space-y-2.5 text-xs text-gray-600">
                        {category.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Proceed CTA */}
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => handleProceed(category)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow cursor-pointer ${
                        category.highlight
                          ? 'bg-[#145AC6] hover:bg-[#0D3E83] text-white hover:shadow-lg'
                          : 'bg-gray-900 hover:bg-black text-white hover:shadow-md'
                      }`}
                    >
                      Proceed to Register (₹{currentOption.price}) &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto pt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
              <p className="text-xs text-gray-500 mt-1">Queries on subscriptions and membership</p>
            </div>
            <div className="space-y-3">
              {membershipFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className={`transform transition-transform text-gray-400 font-mono text-base ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= STEP 2: REGISTRATION & PAYMENT ================= */}
      {step === 2 && (
        <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
          {/* Top navigation & Selected Plan summary bar */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={handleBackToPlans}
                className="text-xs font-bold text-[#145AC6] hover:underline flex items-center gap-1.5 mb-2"
              >
                &larr; Back to Membership Plans
              </button>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {activeCategoryTitle}
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-blue-100 text-[#145AC6]">
                  {activePlanOption.label}
                </span>
                {activePlanOption.isStudent && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800">
                    Student
                  </span>
                )}
                {activePlanOption.isSenior && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-purple-100 text-purple-800">
                    Senior 60+
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-baseline gap-2 bg-blue-50/80 px-4 py-2 rounded-xl border border-blue-100">
              <span className="text-xs text-gray-500 font-medium">Total Payable:</span>
              <span className="text-2xl font-extrabold text-[#145AC6]">
                ₹{activePlanOption.price}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                ({activePlanOption.duration})
              </span>
            </div>
          </div>

          {/* 2-Column Layout: Payment Card (Left) and Application Form (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Payment & QR Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="border-b border-gray-100 pb-3 mb-4">
                  <span className="text-[11px] font-bold text-teal-600 tracking-wider uppercase">
                    Step 1: Complete Payment
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-0.5">Scan to Pay via UPI</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Pay <strong>₹{activePlanOption.price}</strong> for {activeCategoryTitle} ({activePlanOption.label}).
                  </p>
                </div>

                {/* QR Image Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <div className="relative w-48 h-48 mx-auto bg-white p-2 rounded-lg shadow-inner">
                    <Image
                      src="/images/membership/payment-qr.png"
                      alt="Sasthra Vedhi UPI Payment QR"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mt-3">
                    Payee: <span className="text-gray-900 font-bold">Sasthra Vedhi</span>
                  </p>
                </div>

                {/* UPI ID copy pill */}
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-blue-600 uppercase font-bold tracking-wider block">
                      UPI ID
                    </span>
                    <span className="font-mono text-xs font-bold text-blue-950 select-all">
                      sastravedi8906@dlb
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyUpiId}
                    className="bg-white hover:bg-blue-100 border border-blue-300 text-blue-700 text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <span className="text-green-600">✓</span> Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy UPI
                      </>
                    )}
                  </button>
                </div>

                {/* Where to find UTR helper */}
                <div className="mt-5 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-800 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    How to find your 12-digit UPI UTR?
                  </p>
                  <p className="text-[11px] leading-relaxed text-gray-500">
                    After completing payment in Google Pay, PhonePe, or Paytm, view the receipt and copy the <strong>12-digit UTR / UPI Transaction ID</strong>. Paste it into the form on the right.
                  </p>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="bg-gradient-to-br from-blue-900 to-[#145AC6] text-white rounded-2xl p-5 shadow-md">
                <h4 className="font-bold text-sm mb-1">Need Assistance?</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Have questions about your transaction? Email us at{' '}
                  <a href="mailto:sasthravedhi@gmail.com" className="underline font-medium text-white hover:text-amber-200">
                    sasthravedhi@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <MembershipForm
                selectedOption={activePlanOption}
                categoryTitle={activeCategoryTitle}
                onBack={handleBackToPlans}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

