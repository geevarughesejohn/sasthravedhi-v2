import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-[#0D3E83] text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">Sasthravedhi</h3>
          <p>Founded: 2007</p>
          <p>TC-22/3719, Sasthamangalam, Thiruvananthapuram 695010</p>
          <p>Phone: +91 81368 60906</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/district-committees">District Committees</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <p>Email: contact@sasthravedhi.in</p>
        </div>
      </div>
    </footer>
  );
}
