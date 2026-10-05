import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Sasthra Vedhi (ശാസ്ത്രവേദി)',
  description: 'Get in touch with Sasthra Vedhi state committee for inquiries, memberships, event collaborations, or subscriptions.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading en="Contact Us" ml="ബന്ധപ്പെടുക" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto bg-white p-8 rounded shadow">
        <div>
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <p>Sasthravedhi<br/>TC-22/3719, Sasthamangalam<br/>Thiruvananthapuram 695010</p>
          <p className="mt-4"><strong>Phone:</strong> +91 81368 60906</p>
          <p><strong>Email:</strong> contact@sasthravedhi.in</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
