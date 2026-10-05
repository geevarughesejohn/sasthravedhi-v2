'use client';

import { useState, useEffect, useCallback } from 'react';
import { StoredMembership } from '@/lib/server/membershipStorage';
import { districts } from '@/lib/data/districts';

export default function AdminMembershipsPage() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [memberships, setMemberships] = useState<StoredMembership[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<StoredMembership | null>(null);

  const fetchData = useCallback(async (key: string) => {
    setIsLoading(true);
    setLoginError('');
    try {
      const res = await fetch('/api/admin/memberships', {
        headers: { 'x-admin-key': key },
      });
      if (res.ok) {
        const json = await res.json();
        setMemberships(json.memberships || []);
        setIsAuthenticated(true);
        sessionStorage.setItem('sasthra_admin_key', key);
      } else {
        setIsAuthenticated(false);
        setLoginError('Invalid Admin Passcode. Please check and try again.');
        sessionStorage.removeItem('sasthra_admin_key');
      }
    } catch (err) {
      console.error(err);
      setLoginError('Network error connecting to admin server.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check stored key in sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('sasthra_admin_key');
    if (saved) {
      const timer = setTimeout(() => {
        setAdminKey(saved);
        fetchData(saved);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [fetchData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminKey.trim()) return;
    fetchData(adminKey.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem('sasthra_admin_key');
    setIsAuthenticated(false);
    setAdminKey('');
    setMemberships([]);
  };

  const handleStatusChange = async (id: string, newStatus: 'pending' | 'verified' | 'rejected') => {
    try {
      const res = await fetch('/api/admin/memberships', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setMemberships((prev) =>
          prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
        );
        if (selectedRecord && selectedRecord.id === id) {
          setSelectedRecord({ ...selectedRecord, status: newStatus });
        }
      } else {
        alert('Failed to update status.');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating status.');
    }
  };

  // Filter logic
  const filtered = memberships.filter((m) => {
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      m.name?.toLowerCase().includes(q) ||
      m.phone?.includes(q) ||
      m.email?.toLowerCase().includes(q) ||
      m.transactionId?.toLowerCase().includes(q) ||
      m.id?.toLowerCase().includes(q);

    const matchDistrict = !districtFilter || m.district === districtFilter;
    const matchStatus = !statusFilter || m.status === statusFilter;

    return matchSearch && matchDistrict && matchStatus;
  });

  // Calculate stats
  const totalCount = memberships.length;
  const pendingCount = memberships.filter((m) => m.status === 'pending').length;
  const verifiedCount = memberships.filter((m) => m.status === 'verified').length;
  const totalAmount = memberships
    .filter((m) => m.status !== 'rejected')
    .reduce((sum, m) => sum + (Number(m.amount) || 0), 0);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
          <div className="w-14 h-14 bg-blue-100 text-[#145AC6] rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            🛡️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Admin Portal</h2>
          <p className="text-xs text-gray-500 mb-6">
            Sasthra Vedhi Membership & Applications Review
          </p>

          {loginError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-left text-xs font-semibold text-gray-700 mb-1">
                Enter Admin Passcode
              </label>
              <input
                type="password"
                required
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter ADMIN_KEY passcode"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] focus:border-[#145AC6] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#145AC6] hover:bg-[#0D3E83] text-white font-bold py-3 rounded-xl transition text-sm shadow cursor-pointer disabled:bg-blue-300"
            >
              {isLoading ? 'Verifying...' : 'Unlock Dashboard →'}
            </button>
          </form>

          <p className="text-[11px] text-gray-400 mt-6">
            Passcode configured in <code>ADMIN_KEY</code> environment variable.
          </p>
        </div>
      </div>
    );
  }

  // DASHBOARD SCREEN
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div>
          <span className="text-[11px] font-bold text-[#145AC6] tracking-wider uppercase">
            Internal Review Portal
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mt-0.5">
            Membership Applications
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Review registered members, verify UPI transactions, and export membership records for member coordination.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={`/api/admin/memberships/export?key=${encodeURIComponent(adminKey)}`}
            download
            className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-sm"
          >
            <span>📥</span> Download CSV / Excel
          </a>
          <button
            onClick={() => fetchData(adminKey)}
            disabled={isLoading}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5"
          >
            <span>🔄</span> Refresh
          </button>
          <button
            onClick={handleLogout}
            className="text-xs text-red-600 hover:text-red-700 font-semibold px-3 py-2 rounded-xl border border-red-200 hover:bg-red-50 transition"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-xs text-gray-500 font-medium">Total Applications</span>
          <p className="text-2xl font-extrabold text-gray-900 mt-1">{totalCount}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm bg-amber-50/20">
          <span className="text-xs text-amber-800 font-medium">Pending Verification</span>
          <p className="text-2xl font-extrabold text-amber-600 mt-1">{pendingCount}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-sm bg-green-50/20">
          <span className="text-xs text-green-800 font-medium">Verified Members</span>
          <p className="text-2xl font-extrabold text-green-600 mt-1">{verifiedCount}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-blue-200 shadow-sm bg-blue-50/20">
          <span className="text-xs text-blue-800 font-medium">Total Collected</span>
          <p className="text-2xl font-extrabold text-[#145AC6] mt-1">₹{totalAmount.toLocaleString('en-IN')}</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="w-full md:w-80 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            🔍
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Name, Phone, UTR..."
            className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#145AC6] outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* District Filter */}
          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="text-xs border border-gray-300 rounded-xl px-3 py-2 bg-white focus:ring-2 focus:ring-[#145AC6] outline-none"
          >
            <option value="">All Districts ({districts.length})</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs border border-gray-300 rounded-xl px-3 py-2 bg-white focus:ring-2 focus:ring-[#145AC6] outline-none"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>

          {(searchQuery || districtFilter || statusFilter) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setDistrictFilter('');
                setStatusFilter('');
              }}
              className="text-xs text-gray-500 hover:text-gray-800 underline px-2 py-1"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <span className="text-3xl block mb-2">📭</span>
            <p className="font-semibold text-sm">No applications found</p>
            <p className="text-xs text-gray-400 mt-1">
              {totalCount === 0
                ? 'Applications submitted through the membership page will appear here.'
                : 'Try clearing your search or filter criteria.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-600 font-bold border-b border-gray-200 uppercase tracking-wider text-[10px]">
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Applicant Details</th>
                  <th className="p-3.5">Plan & Fee</th>
                  <th className="p-3.5">District / Address</th>
                  <th className="p-3.5">UPI UTR Ref</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/30 transition">
                    {/* Date */}
                    <td className="p-3.5 whitespace-nowrap text-gray-500 font-mono text-[11px]">
                      {new Date(item.submittedAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                      <div className="text-[10px] text-gray-400">
                        {new Date(item.submittedAt).toLocaleTimeString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </td>

                    {/* Applicant Name & Contact */}
                    <td className="p-3.5">
                      <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                      <div className="text-gray-500 font-mono mt-0.5 flex items-center gap-1.5">
                        <span>{item.phone}</span>
                        <a
                          href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 font-sans text-[10px] font-bold"
                          title="Open WhatsApp chat"
                        >
                          [WhatsApp]
                        </a>
                      </div>
                      <div className="text-gray-400 text-[11px] truncate max-w-[160px]">{item.email}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.whatsappVerified === 'yes' && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700">
                            ✓ WA Verified {item.whatsappCode ? `(#${item.whatsappCode})` : ''}
                          </span>
                        )}
                        {item.yuvaVedhi && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700">
                            🚀 YuvaVedhi
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Plan & Fee */}
                    <td className="p-3.5">
                      <div className="font-semibold text-gray-800">{item.planTitle || `Tier ${item.membershipType}`}</div>
                      <div className="font-bold text-[#145AC6] text-sm mt-0.5">₹{item.amount}</div>
                      {item.institutionName && (
                        <span className="inline-block text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded mt-1">
                          🎓 Student: {item.institutionName}
                        </span>
                      )}
                      {item.seniorAge && (
                        <span className="inline-block text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded mt-1">
                          🎖️ Senior: {item.seniorAge}
                        </span>
                      )}
                    </td>

                    {/* District & Address */}
                    <td className="p-3.5 max-w-[200px]">
                      <div className="font-bold text-gray-900">{item.district} <span className="text-[10px] font-normal text-blue-600 font-sans">(Activity)</span></div>
                      {item.homeDistrict && item.homeDistrict !== item.district && (
                        <div className="text-[10px] text-gray-500 font-medium">Home: {item.homeDistrict}</div>
                      )}
                      <p className="text-gray-500 text-[11px] line-clamp-2 mt-0.5 leading-snug">
                        {item.address}
                      </p>
                      {item.pincode && (
                        <span className="text-[10px] font-mono text-gray-400">PIN: {item.pincode}</span>
                      )}
                    </td>

                    {/* UPI UTR */}
                    <td className="p-3.5 font-mono text-xs">
                      <span className="bg-gray-100 px-2 py-1 rounded text-gray-800 font-bold select-all block max-w-fit">
                        {item.transactionId || 'N/A'}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="p-3.5 whitespace-nowrap">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold capitalize ${
                          item.status === 'verified'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'rejected'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.status || 'pending'}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-3.5 text-right whitespace-nowrap space-x-1.5">
                      <button
                        onClick={() => setSelectedRecord(item)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition"
                      >
                        View
                      </button>
                      {item.status !== 'verified' && (
                        <button
                          onClick={() => handleStatusChange(item.id, 'verified')}
                          className="bg-green-600 hover:bg-green-700 text-white px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition"
                        >
                          Verify ✓
                        </button>
                      )}
                      {item.status !== 'rejected' && (
                        <button
                          onClick={() => handleStatusChange(item.id, 'rejected')}
                          className="bg-red-50 hover:bg-red-100 text-red-600 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition"
                        >
                          ✕
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detailed Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-gray-900">Application Details</h3>
              <button
                onClick={() => setSelectedRecord(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl">
                <div>
                  <span className="text-gray-400 block text-[10px]">ID</span>
                  <span className="font-mono font-bold text-gray-800">{selectedRecord.id}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Submitted At</span>
                  <span className="text-gray-700">
                    {new Date(selectedRecord.submittedAt).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-gray-400 block text-[10px]">Full Name</span>
                <span className="font-bold text-sm text-gray-900">{selectedRecord.name}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-gray-400 block text-[10px]">Phone</span>
                  <span className="font-bold text-gray-800">{selectedRecord.phone}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Email</span>
                  <span className="text-gray-800">{selectedRecord.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-gray-400 block text-[10px]">Plan</span>
                  <span className="font-bold text-gray-800">{selectedRecord.planTitle}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">Amount</span>
                  <span className="font-bold text-[#145AC6]">₹{selectedRecord.amount}</span>
                </div>
              </div>

              {selectedRecord.institutionName && (
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                  <span className="font-bold text-amber-900 block">Student Information</span>
                  <div className="mt-1 space-y-0.5 text-amber-800">
                    <div>Institution: {selectedRecord.institutionName}</div>
                    <div>Course/Class: {selectedRecord.courseGrade}</div>
                    {selectedRecord.studentId && <div>Student ID: {selectedRecord.studentId}</div>}
                  </div>
                </div>
              )}

              {selectedRecord.seniorAge && (
                <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                  <span className="font-bold text-purple-900 block">Senior Citizen Info</span>
                  <div className="mt-1 text-purple-800">Age / Birth: {selectedRecord.seniorAge}</div>
                </div>
              )}

              <div className="border-t pt-2">
                <span className="text-gray-400 block text-[10px]">District of Activity</span>
                <span className="font-bold text-gray-900 block">{selectedRecord.district}</span>
              </div>

              <div className="border-t pt-2">
                <span className="text-gray-400 block text-[10px]">Permanent Address (സ്ഥിര വിലാസം)</span>
                <p className="text-gray-800 font-medium mt-1 leading-relaxed">{selectedRecord.address}</p>
                {selectedRecord.pincode && (
                  <div className="text-gray-500 mt-1 font-mono text-[11px]">
                    PIN Code: {selectedRecord.pincode}
                  </div>
                )}
              </div>

              <div className="border-t pt-2">
                <span className="text-gray-400 block text-[10px]">UPI Transaction ID / UTR</span>
                <span className="font-mono font-bold text-sm bg-gray-100 px-2 py-1 rounded inline-block mt-1">
                  {selectedRecord.transactionId}
                </span>
              </div>
            </div>

            <div className="border-t pt-3 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => handleStatusChange(selectedRecord.id, 'verified')}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition"
                >
                  Mark Verified ✓
                </button>
                <button
                  onClick={() => handleStatusChange(selectedRecord.id, 'rejected')}
                  className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-lg transition"
                >
                  Mark Rejected
                </button>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="text-xs text-gray-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

