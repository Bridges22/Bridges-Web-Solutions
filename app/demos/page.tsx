'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import LiveChat from '../../components/LiveChat';

export default function DemosPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [showMpesaPrompt, setShowMpesaPrompt] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleMpesaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMpesaPrompt(true);
    setTimeout(() => {
      setShowMpesaPrompt(false);
      alert('Payment successful!');
    }, 3000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Interactive Previews
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digital System Demos
            </h1>
            <p className="text-xl text-slate-300">
              Try out some of the interactive features we build for our clients. These are simplified mockups to demonstrate functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Demo Cards */}
            <div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 cursor-pointer hover:bg-slate-700 transition-all"
              onClick={() => setActiveDemo('mpesa')}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 mb-4">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">M-Pesa Integration</h3>
              <p className="text-slate-400 text-sm">Simulate an STK push prompt for seamless e-commerce checkout.</p>
            </div>

            <div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 cursor-pointer hover:bg-slate-700 transition-all"
              onClick={() => setActiveDemo('booking')}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 mb-4">
                <i className="ri-calendar-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Appointment Booking</h3>
              <p className="text-slate-400 text-sm">Interactive calendar scheduling system for clinics and salons.</p>
            </div>

            <div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 cursor-pointer hover:bg-slate-700 transition-all"
              onClick={() => setActiveDemo('dashboard')}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 mb-4">
                <i className="ri-dashboard-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Admin Dashboard</h3>
              <p className="text-slate-400 text-sm">Preview a modern inventory and sales analytics dashboard.</p>
            </div>
          </div>

          {/* Active Demo Area */}
          <div className="bg-slate-800 rounded-3xl border border-slate-700 p-8 min-h-[400px]">
            {!activeDemo && (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 pt-20">
                <i className="ri-cursor-line text-5xl mb-4"></i>
                <p>Select a demo above to interact with it</p>
              </div>
            )}

            {activeDemo === 'mpesa' && (
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">E-commerce Checkout</h3>
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                    <span className="text-slate-300">Total Amount</span>
                    <span className="text-xl font-bold text-white">KSh 2,500</span>
                  </div>
                  
                  <form onSubmit={handleMpesaSubmit}>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-400 mb-2">M-Pesa Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="07XX XXX XXX" 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                        value={mpesaPhone}
                        onChange={(e) => setMpesaPhone(e.target.value)}
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
                      disabled={showMpesaPrompt}
                    >
                      {showMpesaPrompt ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Awaiting Payment...
                        </>
                      ) : (
                        'Pay with M-Pesa'
                      )}
                    </button>
                  </form>
                </div>

                {showMpesaPrompt && (
                  <div className="mt-8 bg-black/50 border border-slate-700 p-4 rounded-xl text-center animate-pulse">
                    <p className="text-green-400 font-medium">Check your phone!</p>
                    <p className="text-slate-400 text-sm mt-1">An M-Pesa prompt has been sent to your device. Enter your PIN to complete the transaction.</p>
                  </div>
                )}
              </div>
            )}

            {activeDemo === 'booking' && (
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Book an Appointment</h3>
                
                {!bookingConfirmed ? (
                  <form onSubmit={handleBookingSubmit} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-400 mb-2">Select Service</label>
                      <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                        <option>Consultation (30 min)</option>
                        <option>System Setup (2 hours)</option>
                        <option>Maintenance (1 hour)</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-400 mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-400 mb-2">Preferred Time</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['09:00', '11:30', '14:00', '15:30', '16:00'].map((time) => (
                          <div key={time} className="bg-slate-800 border border-slate-700 rounded-lg py-2 text-center text-sm text-slate-300 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors">
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                      Confirm Booking
                    </button>
                  </form>
                ) : (
                  <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 text-center">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-3xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Booking Confirmed!</h4>
                    <p className="text-slate-400 mb-6">You will receive an SMS reminder 24 hours before your appointment.</p>
                    <button 
                      onClick={() => setBookingConfirmed(false)}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Book another
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeDemo === 'dashboard' && (
              <div className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Sales Dashboard Preview</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300">Today</span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs text-white">This Week</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <div className="text-slate-400 text-sm mb-1">Total Revenue</div>
                    <div className="text-2xl font-bold text-white">KSh 145,000</div>
                    <div className="text-green-400 text-xs mt-2"><i className="ri-arrow-up-line"></i> +12.5%</div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <div className="text-slate-400 text-sm mb-1">Active Users</div>
                    <div className="text-2xl font-bold text-white">842</div>
                    <div className="text-green-400 text-xs mt-2"><i className="ri-arrow-up-line"></i> +5.2%</div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <div className="text-slate-400 text-sm mb-1">Pending Orders</div>
                    <div className="text-2xl font-bold text-white">14</div>
                    <div className="text-red-400 text-xs mt-2"><i className="ri-arrow-down-line"></i> -2.1%</div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
                  <h4 className="text-white font-medium mb-4">Recent Transactions</h4>
                  <div className="space-y-3">
                    {[
                      { id: '#TRX-001', customer: 'John Doe', amount: 'KSh 4,500', status: 'Completed', color: 'text-green-400' },
                      { id: '#TRX-002', customer: 'Jane Smith', amount: 'KSh 12,000', status: 'Pending', color: 'text-yellow-400' },
                      { id: '#TRX-003', customer: 'Alice Johnson', amount: 'KSh 1,200', status: 'Completed', color: 'text-green-400' },
                    ].map((trx, i) => (
                      <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-800 rounded-lg transition-colors border-b border-slate-800 last:border-0">
                        <div>
                          <div className="text-white font-medium text-sm">{trx.customer}</div>
                          <div className="text-slate-500 text-xs">{trx.id}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm">{trx.amount}</div>
                          <div className={`${trx.color} text-xs`}>{trx.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </>
  );
}
