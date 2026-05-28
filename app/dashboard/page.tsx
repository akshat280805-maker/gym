'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  Activity,
  LogOut,
  Settings,
  Shield,
} from 'lucide-react';
import Logo from '../../components/Logo';

type DashboardStats = {
  revenue: string;
  inquiries: number;
  atRisk: number;
  hoursSaved: number;
};

const SAMPLE_STATS: DashboardStats = {
  revenue: "₹15.2L",
  inquiries: 124,
  atRisk: 12,
  hoursSaved: 47,
};

export default function OwnerDashboard() {
  const data = SAMPLE_STATS;

  const stats = [
    {
      label: "Active Revenue",
      value: data.revenue,
      growth: "+14%",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      label: "New Inquiries",
      value: data.inquiries,
      growth: "24 new",
      icon: MessageSquare,
      color: "text-yellow-500",
    },
    {
      label: "At-Risk Members",
      value: data.atRisk,
      growth: "-4",
      icon: Users,
      color: "text-red-500",
    },
    {
      label: "AI Hours Saved",
      value: `${data.hoursSaved}h`,
      growth: "This month",
      icon: Clock,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">

      {/* SIDEBAR */}
      <aside className="w-64 border-r border-white/10 p-6 flex-col hidden md:flex">
        <div className="mb-12 text-white">
          <Logo size="sm" />
        </div>

        <nav className="flex-1 space-y-2">
          {['Overview', 'Members', 'AI Chats', 'Payments'].map((item) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${
                item === 'Overview' ? 'bg-white text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-white/10 space-y-4">
          <button className="flex items-center text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest">
            <Settings className="w-4 h-4 mr-3" /> Settings
          </button>
          <button className="flex items-center text-red-500 text-xs font-bold uppercase tracking-widest">
            <LogOut className="w-4 h-4 mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter">Command Center</h1>
            <p className="text-gray-500 text-sm font-medium">Welcome back, Administrator.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center">
              <Shield className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">System Secure</span>
            </div>
          </div>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded-md">
                  {stat.growth}
                </span>
              </div>
              <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* RECENT ACTIVITY / CHART */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-black uppercase tracking-tight">Revenue Velocity</h3>
              <Activity className="w-5 h-5 text-gray-500" />
            </div>
            <div className="h-64 w-full bg-gradient-to-t from-yellow-500/5 to-transparent border-b border-yellow-500/20 rounded-xl flex items-end justify-around px-4">
              {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-8 bg-yellow-500/20 hover:bg-yellow-500 transition-all rounded-t-sm" />
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8">
            <h3 className="text-lg font-black uppercase tracking-tight mb-8">Live Intelligence</h3>
            <div className="space-y-6">
              {[
                { user: "James W.", msg: "Asking about PT costs...", time: "2m ago" },
                { user: "Sarah L.", msg: "Payment link sent.", time: "14m ago" },
                { user: "Rahul M.", msg: "Workout plan updated.", time: "1h ago" },
              ].map((chat) => (
                <div key={chat.user} className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="text-sm font-bold">{chat.user}</p>
                    <p className="text-xs text-gray-500">{chat.msg}</p>
                  </div>
                  <span className="text-[10px] text-gray-600 font-bold uppercase">{chat.time}</span>
                </div>
              ))}
              <button className="w-full py-3 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                View All Chats
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
