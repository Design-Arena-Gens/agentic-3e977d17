"use client";

import { useState } from "react";
import {
  FileText,
  MessageCircle,
  Upload,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
  Home as HomeIcon,
  Calendar,
  TrendingUp,
  Send,
  Paperclip,
  Menu,
  Bell,
  User,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("approvals");
  const [message, setMessage] = useState("");

  const loans = [
    {
      id: 1,
      type: "Home Mortgage",
      amount: "$450,000",
      status: "approved",
      date: "Oct 28, 2025",
      rate: "6.5%",
    },
    {
      id: 2,
      type: "Auto Loan",
      amount: "$35,000",
      status: "pending",
      date: "Oct 25, 2025",
      rate: "5.2%",
    },
    {
      id: 3,
      type: "Personal Loan",
      amount: "$15,000",
      status: "approved",
      date: "Oct 20, 2025",
      rate: "8.9%",
    },
  ];

  const chatMessages = [
    {
      id: 1,
      sender: "agent",
      text: "Hello! I'm here to help with your loan application. How can I assist you today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "I have questions about my mortgage approval",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "agent",
      text: "Of course! Your mortgage for $450,000 has been approved. What would you like to know?",
      time: "10:33 AM",
    },
  ];

  const documents = [
    { id: 1, name: "Purchase Agreement", status: "pending" },
    { id: 2, name: "Title Insurance", status: "uploaded" },
    { id: 3, name: "Home Inspection", status: "pending" },
    { id: 4, name: "Property Appraisal", status: "uploaded" },
  ];

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case "pending":
        return <Clock className="w-5 h-5 text-amber-400" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-slate-900">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

        {/* Screen Content */}
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-8 pt-3 pb-2 text-white text-xs">
            <span className="font-semibold">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-3 border border-white rounded-sm">
                <div className="w-2 h-2 bg-white m-0.5"></div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-white text-2xl font-bold">LoanHub</h1>
                <p className="text-slate-400 text-xs">Your financial partner</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center">
                <Bell className="w-5 h-5 text-slate-300" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center">
                <User className="w-5 h-5 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 py-3 flex gap-2">
            <button
              onClick={() => setActiveTab("approvals")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "approvals"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-slate-800/30 text-slate-400"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Approvals
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "chat"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-slate-800/30 text-slate-400"
              }`}
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Chat
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "documents"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-slate-800/30 text-slate-400"
              }`}
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Docs
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-2 pb-20">
            {/* Approvals Tab */}
            {activeTab === "approvals" && (
              <div className="space-y-3">
                {loans.map((loan) => (
                  <div
                    key={loan.id}
                    className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                          <HomeIcon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-base">
                            {loan.type}
                          </h3>
                          <p className="text-slate-400 text-xs">{loan.date}</p>
                        </div>
                      </div>
                      <StatusIcon status={loan.status} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-700/50">
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Amount</p>
                        <p className="text-white font-bold text-lg">
                          {loan.amount}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Rate</p>
                        <p className="text-cyan-400 font-bold text-lg">
                          {loan.rate}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          loan.status === "approved"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {loan.status.charAt(0).toUpperCase() +
                          loan.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Chat Tab */}
            {activeTab === "chat" && (
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-3 mb-4">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] rounded-2xl p-3 ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            : "bg-slate-800/60 text-slate-200"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === "user"
                              ? "text-cyan-100"
                              : "text-slate-500"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 items-center bg-slate-800/40 rounded-2xl p-2 border border-slate-700/50">
                  <button className="p-2 text-slate-400 hover:text-cyan-400">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-sm"
                  />
                  <button className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === "documents" && (
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-4 mb-4">
                  <p className="text-cyan-400 text-sm">
                    📄 Upload your closing documents to complete your loan
                    process
                  </p>
                </div>
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">
                            {doc.name}
                          </h3>
                          <p className="text-slate-400 text-xs mt-1">
                            {doc.status === "uploaded" ? "Uploaded" : "Required"}
                          </p>
                        </div>
                      </div>
                      {doc.status === "uploaded" ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white text-xs font-semibold">
                          Upload
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-bold shadow-lg mt-4 flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload New Document
                </button>
              </div>
            )}
          </div>

          {/* Bottom Navigation Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
