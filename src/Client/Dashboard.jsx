// import React, { useState } from "react";
// import {
//   LayoutDashboard,
//   User,
//   Mail,
//   LogOut,
//   Phone,
//   MapPin,
//   Calendar,
//   TrendingUp,
//   Users,
//   Bell,
//   Send,
//   FileText,
//   Upload,
//   FileCheck,
//   Menu,
//   X,
//   ShieldQuestionMark,
//   Copy,
// } from "lucide-react";

// // Dashboard Component
// function DashboardContent() {
//   const stats = [
//     {
//       label: "Active Queries",
//       value: "1",
//       qName: "Legal Assistance",
//       icon: <Users size={24} />,
//       bgColor: "bg-green-50",
//       textColor: "text-green-600",
//     },
//     {
//       label: "Status",
//       value: "Approved",
//       icon: <TrendingUp size={24} />,
//       bgColor: "bg-orange-50",
//       textColor: "text-orange-600",
//     },
//     {
//       label: "Documents Notifications",
//       value: "Under Review",
//       icon: <FileCheck size={24} />,
//       bgColor: "bg-blue-50",
//       textColor: "text-blue-600",
//     },
//   ];

//   const recentActivity = [
//     { title: "Sent for review", time: "2 hours ago", type: "success" },
//     {
//       title: "Meeting scheduled for details discussion",
//       time: "5 hours ago",
//       type: "info",
//     },
//     {
//       title: "Contacted by Mr. Ajay Banger",
//       time: "1 day ago",
//       type: "success",
//     },
//     {
//       title: "Query added successfully",
//       time: "2 days ago",
//       type: "default",
//     },
//   ];

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !mb-8">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6 hover:shadow-md transition-shadow duration-200"
//           >
//             <div className="flex items-center justify-between !mb-4">
//               <div className={`!p-3 rounded-lg ${stat.bgColor}`}>
//                 <div className={stat.textColor}>{stat.icon}</div>
//               </div>
//             </div>
//             <p className="text-gray-500 text-sm !mb-1">{stat.label}</p>
//             <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
//             <p className="text-md font-bold text-gray-800">{stat.qName}</p>
//           </div>
//         ))}
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
//         <h3 className="text-xl font-semibold text-gray-800 !mb-6">
//           Recent Activity
//         </h3>
//         <div className="flex flex-col gap-y-4">
//           {recentActivity.map((activity, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-4 !pb-4 border-b border-gray-100 last:border-0 last:!pb-0"
//             >
//               <div
//                 className={`w-2 h-2 rounded-full !mt-2 ${
//                   activity.type === "success"
//                     ? "bg-green-500"
//                     : activity.type === "info"
//                     ? "bg-blue-500"
//                     : "bg-gray-400"
//                 }`}
//               />
//               <div className="flex-1">
//                 <p className="text-gray-800 font-medium">{activity.title}</p>
//                 <p className="text-sm text-gray-500 !mt-1">{activity.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Contact/Chat Component
// function ContactContent() {
//   const [messages, setMessages] = useState([
//     { sender: "Ajay", text: "Hi, how can I help you?", time: "10:00 AM" },
//     {
//       sender: "You",
//       text: "I wanted to ask about my documents status.",
//       time: "10:02 AM",
//     },
//     {
//       sender: "Sarah Johnson",
//       text: "Looks like my boss is offline. Don't worry, I can assist you with your query!",
//       time: "10:05 AM",
//     },
//     {
//       sender: "You",
//       text: "Leave it, thanks!",
//       time: "10:06 AM",
//     },
//   ]);
//   const [newMessage, setNewMessage] = useState("");

//   const handleSend = () => {
//     if (newMessage.trim() === "") return;
//     setMessages([
//       ...messages,
//       { sender: "You", text: newMessage, time: "Now" },
//     ]);
//     setNewMessage("");
//   };

//   return (
//     <div className="flex flex-col h-[calc(100vh-200px)] bg-gray-50 rounded-2xl shadow-sm overflow-hidden">
//       <div className="flex-1 !p-4 overflow-y-auto flex flex-col gap-y-4">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === "You" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-xs !px-4 !py-2 rounded-xl text-sm ${
//                 msg.sender === "You"
//                   ? "bg-blue-600 text-white rounded-br-none"
//                   : "bg-white text-gray-800 rounded-bl-none"
//               }`}
//             >
//               {msg.sender !== "You" && (
//                 <p className="font-semibold text-blue-600 text-xs !mb-1">
//                   {msg.sender}
//                 </p>
//               )}
//               <p>{msg.text}</p>
//               <span
//                 className={`text-xs !mt-1 block ${
//                   msg.sender === "You" ? "text-blue-200" : "text-gray-400"
//                 }`}
//               >
//                 {msg.time}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="!p-4 bg-white border-t border-gray-200 flex items-center gap-3">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 !px-4 !py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-600 text-white !p-2 rounded-full hover:bg-blue-700 transition-all"
//         >
//           <Send size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Documentation Component
// function Documentation() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");

//   const adminNotifications = [
//     //   {
//     //     id: 1,
//     //     title: "Important: Documentation Update Required",
//     //     message:
//     //       "Please upload the latest property documents for verification. All documents must be submitted by end of this week.",
//     //     date: "Oct 20, 2025",
//     //     priority: "high",
//     //   },
//     //   {
//     //     id: 2,
//     //     title: "Reminder: Pending Documents",
//     //     message:
//     //       "We are still waiting for your identity verification documents. Please upload them at your earliest convenience.",
//     //     date: "Oct 18, 2025",
//     //     priority: "medium",
//     //   },
//   ];

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setUploadStatus("");
//     }
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       setUploadStatus("uploading");
//       setTimeout(() => {
//         setUploadStatus("success");
//         setTimeout(() => {
//           setSelectedFile(null);
//           setUploadStatus("");
//         }, 2000);
//       }, 1500);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-y-6">
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
//         <h3 className="text-xl font-semibold text-gray-800 !mb-6 flex items-center gap-2">
//           <Bell className="text-blue-600" size={24} />
//           Admin Notifications
//         </h3>
//         <div className="flex flex-col gap-y-4">
//           {adminNotifications.map((notification) => (
//             <div
//               key={notification.id}
//               className={`!p-4 rounded-lg border-l-4 ${
//                 notification.priority === "high"
//                   ? "bg-red-50 border-red-500"
//                   : "bg-yellow-50 border-yellow-500"
//               }`}
//             >
//               <div className="flex items-start justify-between !mb-2">
//                 <h4 className="font-semibold text-gray-800">
//                   {notification.title}
//                 </h4>
//                 <span
//                   className={`text-xs !px-2 !py-1 rounded-full ${
//                     notification.priority === "high"
//                       ? "bg-red-200 text-red-800"
//                       : "bg-yellow-200 text-yellow-800"
//                   }`}
//                 >
//                   {notification.priority.toUpperCase()}
//                 </span>
//               </div>
//               <p className="text-gray-600 text-sm !mb-2">
//                 {notification.message}
//               </p>
//               <p className="text-xs text-gray-500">{notification.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
//         <h3 className="text-xl font-semibold text-gray-800 !mb-6">
//           Upload Response Documents
//         </h3>

//         <div className="border-2 border-dashed border-gray-300 rounded-lg !p-8 text-center hover:border-blue-500 transition-colors duration-200">
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center !mb-4">
//               <Upload size={32} className="text-blue-600" />
//             </div>

//             <input
//               type="file"
//               id="file-upload"
//               onChange={handleFileChange}
//               className="hidden"
//               accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//             />

//             <label
//               htmlFor="file-upload"
//               className="!mb-2 text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
//             >
//               Click to browse
//             </label>
//             <p className="text-sm text-gray-500 !mb-4">
//               or drag and drop your files here
//             </p>
//             <p className="text-xs text-gray-400">
//               Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
//             </p>
//           </div>
//         </div>

//         {selectedFile && (
//           <div className="!mt-6 !p-4 bg-gray-50 rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <FileText size={20} className="text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800">
//                     {selectedFile.name}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {(selectedFile.size / 1024).toFixed(2)} KB
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleFileUpload}
//                 disabled={uploadStatus === "uploading"}
//                 className={`!px-6 !py-2 rounded-lg font-medium transition-all duration-200 ${
//                   uploadStatus === "uploading"
//                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     : uploadStatus === "success"
//                     ? "bg-green-500 text-white"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                 {uploadStatus === "uploading"
//                   ? "Uploading..."
//                   : uploadStatus === "success"
//                   ? "Uploaded!"
//                   : "Upload"}
//               </button>
//             </div>
//           </div>
//         )}

//         {uploadStatus === "success" && (
//           <div className="!mt-4 !p-4 bg-green-50 border border-green-200 rounded-lg">
//             <p className="text-green-800 text-sm font-medium">
//               ✓ File uploaded successfully! Our team will review it shortly.
//             </p>
//           </div>
//         )}
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
//         <h3 className="text-xl font-semibold text-gray-800 !mb-6">
//           Previous Submissions
//         </h3>
//         <div className="flex flex-col gap-y-3">
//           {[
//             {
//               name: "Property_Documents.pdf",
//               date: "Oct 19, 2025",
//               status: "Approved",
//             },
//             {
//               name: "ID_Verification.jpg",
//               date: "Oct 15, 2025",
//               status: "Under Review",
//             },
//           ].map((doc, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between !p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <FileText size={20} className="text-gray-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800">{doc.name}</p>
//                   <p className="text-sm text-gray-500">{doc.date}</p>
//                 </div>
//               </div>
//               <span
//                 className={`!px-3 !py-1 rounded-full text-sm font-medium ${
//                   doc.status === "Approved"
//                     ? "bg-green-100 text-green-800"
//                     : "bg-yellow-100 text-yellow-800"
//                 }`}
//               >
//                 {doc.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Profile Component
// function ProfileContent() {
//   const id = "#124202500001";

//   const handleCopy = async () => {
//     try {
//       // Primary method
//       await navigator.clipboard.writeText(id);
//       alert("User ID copied to clipboard!");
//     } catch (err) {
//       // Fallback for older or restricted mobile browsers
//       const textArea = document.createElement("textarea");
//       textArea.value = id;
//       document.body.appendChild(textArea);
//       textArea.select();
//       document.execCommand("copy");
//       document.body.removeChild(textArea);
//       alert("User ID copied to clipboard!");
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
//             <div className="flex flex-col items-center text-center">
//               <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center !mb-4">
//                 <User size={48} className="text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 !mb-1">
//                 Rahul Sharma
//               </h3>
//               <div className="flex gap-2 items-start !mt-2">
//                 <p className="text-sm text-gray-500 !mb-4">{id}</p>
//                 <Copy
//                   size={60}
//                   onClick={handleCopy}
//                   className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 active:scale-95 transition"
//                 />
//               </div>

//               <button className="w-full cursor-pointer bg-blue-600 text-white !py-2 !px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
//             <h3 className="text-xl font-semibold text-gray-800 !mb-6">
//               Personal Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="text-sm font-medium text-gray-500 !mb-2 block">
//                   Email
//                 </label>
//                 <div className="flex items-center gap-3 text-gray-800">
//                   <Mail size={18} className="text-gray-400" />
//                   <span className="text-sm">rahulsharma64789@gmail.com</span>
//                 </div>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-500 !mb-2 block">
//                   Phone
//                 </label>
//                 <div className="flex items-center gap-3 text-gray-800">
//                   <Phone size={18} className="text-gray-400" />
//                   <span>+44 20 7123 4567</span>
//                 </div>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-500 !mb-2 block">
//                   Location
//                 </label>
//                 <div className="flex items-center gap-3 text-gray-800">
//                   <MapPin size={18} className="text-gray-400" />
//                   <span>London, United Kingdom</span>
//                 </div>
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-500 !mb-2 block">
//                   Member Since
//                 </label>
//                 <div className="flex items-center gap-3 text-gray-800">
//                   <Calendar size={18} className="text-gray-400" />
//                   <span>January 2025</span>
//                 </div>
//               </div>
//             </div>

//             <div className="!mt-8 !pt-6 border-t border-gray-100">
//               <h4 className="text-lg font-semibold text-gray-800 !mb-4">
//                 Account Settings
//               </h4>
//               <div className="flex flex-col gap-y-3">
//                 <button className="w-full cursor-pointer text-left !py-3 !px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//                   <span className="text-gray-800 font-medium">
//                     Change Password
//                   </span>
//                 </button>
//                 <button className="w-full cursor-pointer text-left !py-3 !px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//                   <span className="text-gray-800 font-medium">
//                     Notification Preferences
//                   </span>
//                 </button>
//                 <button className="w-full cursor-pointer text-left !py-3 !px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//                   <span className="text-gray-800 font-medium">
//                     Privacy Settings
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main Dashboard Component
// export default function Dashboard() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [showNotifications, setShowNotifications] = useState(false);

//   const notifications = [
//     {
//       id: 1,
//       title: "Congratulations! Your account has been approved.",
//       time: "5 min ago",
//       unread: true,
//     },
//     // {
//     //   id: 2,
//     //   title: "Property Under Review",
//     //   time: "1 hour ago",
//     //   unread: true,
//     // },
//     // {
//     //   id: 3,
//     //   title: "Documents approval needed",
//     //   time: "2 hours ago",
//     //   unread: true,
//     // },
//     // { id: 4, title: "Payment received", time: "1 day ago", unread: false },
//   ];

//   const unreadCount = notifications.filter((n) => n.unread).length;

//   const menuItems = [
//     { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
//     { name: "Contact", icon: <Mail size={20} /> },
//     { name: "Documentation", icon: <FileText size={20} /> },
//     { name: "Profile", icon: <User size={20} /> },
//   ];

//   const handleMenuClick = (itemName) => {
//     setActiveTab(itemName);
//     setMobileMenuOpen(false);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Dashboard":
//         return <DashboardContent />;
//       case "Contact":
//         return <ContactContent />;
//       case "Documentation":
//         return <Documentation />;
//       case "Profile":
//         return <ProfileContent />;
//       default:
//         return <DashboardContent />;
//     }
//   };
//   const giveAlert = () => {
//     alert(
//       "Need Help? — This page is unable to load. Please contact our support team at info@nriproperty.uk"
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Top Navbar */}
//       <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-8xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
//           <div className="flex items-center justify-between h-26 !px-2 md:!px-4 lg:!px-6 xl:!px-8">
//             {/* Logo - Left Side */}
//             <div className="flex items-center h-full">
//               <h1 className="text-base sm:text-md md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent leading-tight text-center">
//                 <span className="block">nriproperty.uk</span>
//               </h1>
//             </div>

//             {/* Desktop Navigation - Right Side */}
//             <div className="hidden md:flex items-center gap-2 lg:gap-4">
//               {menuItems.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleMenuClick(item.name)}
//                   className={`flex cursor-pointer items-center !px-3 lg:!px-4 !py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     activeTab === item.name
//                       ? "bg-blue-50 text-blue-600 shadow-sm"
//                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                   }`}
//                 >
//                   <span className="!mr-2">{item.icon}</span>
//                   <span className="hidden lg:inline">{item.name}</span>
//                 </button>
//               ))}

//               {/* Notifications */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="relative !p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <Bell size={22} className="text-gray-600" />
//                   {unreadCount > 0 && (
//                     <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
//                       {unreadCount}
//                     </span>
//                   )}
//                 </button>
//               </div>

//               {/* Logout */}
//               <button
//                 onClick={() => {
//                   localStorage.removeItem("authToken");
//                   localStorage.removeItem("clientUser");
//                   localStorage.removeItem("userEmail");
//                   navigate("/login");
//                 }}
//                 className="flex cursor-pointer items-center !px-3 lg:!px-4 !py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
//               >
//                 <LogOut className="!mr-2" size={20} />
//                 <span className="hidden lg:inline">Logout</span>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex items-center gap-2 md:hidden">
//               {/* Mobile Notifications */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="relative !p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <Bell size={22} className="text-gray-600" />
//                   {unreadCount > 0 && (
//                     <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
//                       {unreadCount}
//                     </span>
//                   )}
//                 </button>
//               </div>

//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="!p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
//               >
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 bg-white">
//             <div className="!px-4 !py-2 flex flex-col gap-2">
//               {menuItems.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleMenuClick(item.name)}
//                   className={`flex cursor-pointer items-center !px-4 !py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     activeTab === item.name
//                       ? "bg-blue-50 text-blue-600 shadow-sm"
//                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                   }`}
//                 >
//                   <span className="!mr-3">{item.icon}</span>
//                   {item.name}
//                 </button>
//               ))}

//               <button className="flex cursor-pointer items-center !px-4 !py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border-t border-gray-200 !mt-2 !pt-4">
//                 <LogOut className="!mr-3" size={20} />
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//       {/* Notifications Dropdown */}
//       {showNotifications && (
//         <>
//           <div
//             className="fixed inset-0 z-40"
//             onClick={() => setShowNotifications(false)}
//           />
//           <div className="fixed right-4 top-20 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
//             <div className="!px-4 !py-3 border-b border-gray-100 bg-gray-50">
//               <h3 className="text-sm font-semibold text-gray-800">
//                 Notifications
//               </h3>
//             </div>
//             <div className="max-h-96 overflow-y-auto">
//               {notifications.map((notification) => (
//                 <div
//                   key={notification.id}
//                   className={`!px-4 !py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
//                     notification.unread ? "bg-blue-50" : ""
//                   }`}
//                 >
//                   <div className="flex items-start gap-3">
//                     {notification.unread && (
//                       <div className="w-2 h-2 bg-blue-600 rounded-full !mt-2" />
//                     )}
//                     <div className="flex-1">
//                       <p
//                         className={`text-sm ${
//                           notification.unread
//                             ? "font-semibold text-gray-800"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {notification.title}
//                       </p>
//                       <p className="text-xs text-gray-500 !mt-1">
//                         {notification.time}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="!px-4 !py-3 border-t border-gray-100 bg-gray-50 text-center">
//               <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
//                 View all notifications
//               </button>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Main Content */}
//       <main className="!p-4 sm:!p-6 lg:!p-8">
//         <div className="max-w-7xl !mx-auto">
//           {/* Page Header */}
//           <div className="bg-blue-50 rounded-xl shadow-sm border border-gray-100 !px-4 sm:!px-6 !py-4 !mb-6">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-600">
//               {activeTab}
//             </h1>
//             <p className="text-sm text-gray-500 !mt-1">
//               Manage your {activeTab.toLowerCase()} information
//             </p>
//           </div>

//           {/* Help btn */}
//           <span title="Need Help? Contact Support" className="z-50">
//             <ShieldQuestionMark
//               size={50}
//               onClick={giveAlert} // ✅ Add this line
//               className="fixed md:hidden cursor-pointer right-6 bottom-6 text-blue-500 bg-blue-100 border rounded-full !p-2"
//             />
//             <button
//               id="helpAlert"
//               onClick={giveAlert} // ✅ Add this line too
//               className="fixed hidden md:block font-bold text-md cursor-pointer right-6 bottom-6 text-blue-500 bg-blue-100 border-2 rounded-full !p-3"
//             >
//               Help?
//             </button>
//           </span>
//           {/* Content Area */}
//           {renderContent()}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  LayoutDashboard,
  User,
  Mail,
  LogOut,
  Phone,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Bell,
  Send,
  FileText,
  Upload,
  FileCheck,
  Menu,
  X,
  ShieldQuestionMark,
  Copy,
} from "lucide-react";
  import Downloadpdf from "./Downloadpdf";
import { API_BASE_URL } from "../config";

// Dashboard Component
function DashboardContent({ dashboardData, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const stats = [
    {
      label: "Active Queries",
      value: "1",
      qName: dashboardData?.query?.service || "N/A",
      icon: <Users size={24} />,
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      label: "Status",
      value: dashboardData?.query?.status || "Under Process",
      icon: <TrendingUp size={24} />,
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      label: "Documents Notifications",
      value:
        dashboardData?.documents?.length > 0
          ? "Under Review"
          : "No current notifications",
      icon: <FileCheck size={24} />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
  ];

  // ✅ Extract contract filename correctly
  // ✅ Extract correct file name from filePath
  const contractFile = dashboardData?.contracts?.length
    ? dashboardData.contracts[0].filePath.split("/").pop()
    : null;

  // ✅ Construct final download link
  const contractDownloadUrl = dashboardData?.contracts?.length
    ? `${API_BASE_URL}/contract/download/${contractFile}`
    : null;

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between !mb-4">
              <div className={`!p-3 rounded-lg ${stat.bgColor}`}>
                <div className={stat.textColor}>{stat.icon}</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm !mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ✅ Show Download Button Only If Contract Exists */}
      {/* {contractFile ? (
        <a
          href={contractDownloadUrl}
          download
          className="inline-block bg-blue-600 text-white !px-6 !py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download Contract
        </a>
      ) : (
        <p className="text-gray-500">No contract uploaded yet.</p>
      )} */}
        <Downloadpdf />
    </div>
  );
}

// Contact/Chat Component
function ContactContent() {
  const [messages, setMessages] = useState([
    { sender: "Ajay", text: "Hi, how can I help you?", time: "10:00 AM" },
    {
      sender: "You",
      text: "I wanted to ask about my documents status.",
      time: "10:02 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const tempMessage = {
      sender: "You",
      text: newMessage,
      time: "Now",
    };

    setMessages([...messages, tempMessage]);
    const messageToSend = newMessage;
    setNewMessage("");
    setSending(true);

    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        `${API_BASE_URL}/dashboard/send-message`,
        { message: messageToSend },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-gray-50 rounded-2xl shadow-sm overflow-hidden">
      <div className="flex-1 !p-4 overflow-y-auto flex flex-col gap-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs !px-4 !py-2 rounded-xl text-sm ${
                msg.sender === "You"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.sender !== "You" && (
                <p className="font-semibold text-blue-600 text-xs !mb-1">
                  {msg.sender}
                </p>
              )}
              <p>{msg.text}</p>
              <span
                className={`text-xs !mt-1 block ${
                  msg.sender === "You" ? "text-blue-200" : "text-gray-400"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="!p-4 bg-white border-t border-gray-200 flex items-center gap-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 !px-4 !py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={sending}
        />
        <button
          onClick={handleSend}
          disabled={sending}
          className="bg-blue-600 text-white !p-2 rounded-full hover:bg-blue-700 transition-all disabled:bg-blue-400"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

// Documentation Component
function Documentation({ dashboardData, refreshData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const adminNotifications = dashboardData?.notifications || [];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("");
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    setUploadStatus("uploading");

    try {
      const token = localStorage.getItem("authToken");
      await axios.post(
        `${API_BASE_URL}/dashboard/upload-document`,
        {
          fileName: selectedFile.name,
          fileSize: selectedFile.size,
          fileUrl: "#", // In production, upload file and get URL
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUploadStatus("success");
      setTimeout(() => {
        setSelectedFile(null);
        setUploadStatus("");
        refreshData();
      }, 2000);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      {adminNotifications.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
          <h3 className="text-xl font-semibold text-gray-800 !mb-6 flex items-center gap-2">
            <Bell className="text-blue-600" size={24} />
            Admin Notifications
          </h3>
          <div className="flex flex-col gap-y-4">
            {adminNotifications.map((notification, index) => (
              <div
                key={index}
                className={`!p-4 rounded-lg border-l-4 ${
                  notification.priority === "high"
                    ? "bg-red-50 border-red-500"
                    : "bg-yellow-50 border-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between !mb-2">
                  <h4 className="font-semibold text-gray-800">
                    {notification.title}
                  </h4>
                  <span
                    className={`text-xs !px-2 !py-1 rounded-full ${
                      notification.priority === "high"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {notification.priority?.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 text-sm !mb-2">
                  {notification.message}
                </p>
                <p className="text-xs text-gray-500">{notification.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
        <h3 className="text-xl font-semibold text-gray-800 !mb-6">
          Upload Response Documents
        </h3>

        <div className="border-2 border-dashed border-gray-300 rounded-lg !p-8 text-center hover:border-blue-500 transition-colors duration-200">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center !mb-4">
              <Upload size={32} className="text-blue-600" />
            </div>

            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />

            <label
              htmlFor="file-upload"
              className="!mb-2 text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
            >
              Click to browse
            </label>
            <p className="text-sm text-gray-500 !mb-4">
              or drag and drop your files here
            </p>
            <p className="text-xs text-gray-400">
              Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
            </p>
          </div>
        </div>

        {selectedFile && (
          <div className="!mt-6 !p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={handleFileUpload}
                disabled={uploadStatus === "uploading"}
                className={`!px-6 !py-2 rounded-lg font-medium transition-all duration-200 ${
                  uploadStatus === "uploading"
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : uploadStatus === "success"
                    ? "bg-green-500 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {uploadStatus === "uploading"
                  ? "Uploading..."
                  : uploadStatus === "success"
                  ? "Uploaded!"
                  : "Upload"}
              </button>
            </div>
          </div>
        )}

        {uploadStatus === "success" && (
          <div className="!mt-4 !p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">
              ✓ File uploaded successfully! Our team will review it shortly.
            </p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
        <h3 className="text-xl font-semibold text-gray-800 !mb-6">
          Previous Submissions
        </h3>
        <div className="flex flex-col gap-y-3">
          {dashboardData?.documents?.length > 0 ? (
            dashboardData.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between !p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <FileText size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{doc.fileName}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <span
                  className={`!px-3 !py-1 rounded-full text-sm font-medium ${
                    doc.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {doc.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center !py-4">
              No documents uploaded yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Profile Component
function ProfileContent({ dashboardData }) {
  const id = `#${dashboardData?.profile?.id?.toString().slice(-12) || "N/A"}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      alert("User ID copied to clipboard!");
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = id;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("User ID copied to clipboard!");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center !mb-4">
                <User size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 !mb-1">
                {dashboardData?.profile?.name || "User"}
              </h3>
              <div className="flex gap-2 items-start !mt-2">
                <p className="text-sm text-gray-500 !mb-4">{id}</p>
                <Copy
                  size={60}
                  onClick={handleCopy}
                  className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 active:scale-95 transition"
                />
              </div>

              <button className="w-full cursor-pointer bg-blue-600 text-white !py-2 !px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 !p-6">
            <h3 className="text-xl font-semibold text-gray-800 !mb-6">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500 !mb-2 block">
                  Email
                </label>
                <div className="flex items-center gap-3 text-gray-800">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-sm">
                    {dashboardData?.profile?.email || "N/A"}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 !mb-2 block">
                  Phone
                </label>
                <div className="flex items-center gap-3 text-gray-800">
                  <Phone size={18} className="text-gray-400" />
                  <span>{dashboardData?.profile?.phone || "N/A"}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 !mb-2 block">
                  Location
                </label>
                <div className="flex items-center gap-3 text-gray-800">
                  <MapPin size={18} className="text-gray-400" />
                  <span>{dashboardData?.profile?.country || "N/A"}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500 !mb-2 block">
                  Member Since
                </label>
                <div className="flex items-center gap-3 text-gray-800">
                  <Calendar size={18} className="text-gray-400" />
                  <span>
                    {dashboardData?.profile?.memberSince
                      ? new Date(
                          dashboardData.profile.memberSince
                        ).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <div className="!mt-8 !pt-6 border-t border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 !mb-4">
                Account Settings
              </h4>
              <div className="flex flex-col gap-y-3">
                <button className="w-full cursor-pointer text-left !py-3 !px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <span className="text-gray-800 font-medium">
                    Change Password
                  </span>
                </button>
                <button className="w-full cursor-pointer text-left !py-3 !px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <span className="text-gray-800 font-medium">
                    Notification Preferences
                  </span>
                </button>
                <button className="w-full cursor-pointer text-left !py-3 !px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <span className="text-gray-800 font-medium">
                    Privacy Settings
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Congratulations! Your account has been approved.",
      // time: "5 min ago",
      unread: true,
    },
  ]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get(
        `${API_BASE_URL}/dashboard/dashboard-data`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setDashboardData(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("clientUser");
        localStorage.removeItem("userEmail");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    // { name: "Contact", icon: <Mail size={20} /> },
    { name: "Documentation", icon: <FileText size={20} /> },
    // { name: "Profile", icon: <User size={20} /> },
  ];

  const handleMenuClick = (itemName) => {
    setActiveTab(itemName);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("clientUser");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <DashboardContent dashboardData={dashboardData} loading={loading} />
        );
      case "Contact":
        return <ContactContent />;
      case "Documentation":
        return (
          <Documentation
            dashboardData={dashboardData}
            refreshData={fetchDashboardData}
          />
        );
      case "Profile":
        return <ProfileContent dashboardData={dashboardData} />;
      default:
        return (
          <DashboardContent dashboardData={dashboardData} loading={loading} />
        );
    }
  };

  const giveAlert = () => {
    alert(
      "Need Help? — This page is unable to load. Please contact our support team at info@nriproperty.uk"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-8xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <div className="flex items-center justify-between h-26 !px-2 md:!px-4 lg:!px-6 xl:!px-8">
            <div className="flex items-center h-full">
              <h1 className="text-base sm:text-md md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent leading-tight text-center">
                <span className="block">nriproperty.uk</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex cursor-pointer items-center !px-3 lg:!px-4 !py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === item.name
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="!mr-2">{item.icon}</span>
                  <span className="hidden lg:inline">{item.name}</span>
                </button>
              ))}

              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative !p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <Bell size={22} className="text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>

              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center !px-3 lg:!px-4 !py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <LogOut className="!mr-2" size={20} />
                <span className="hidden lg:inline">Logout</span>
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative !p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <Bell size={22} className="text-gray-600" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="!p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="!px-4 !py-2 flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex cursor-pointer items-center !px-4 !py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === item.name
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="!mr-3">{item.icon}</span>
                  {item.name}
                </button>
              ))}

              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center !px-4 !py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border-t border-gray-200 !mt-2 !pt-4"
              >
                <LogOut className="!mr-3" size={20} />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {showNotifications && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowNotifications(false)}
          />
          <div className="fixed right-4 top-20 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
            <div className="!px-4 !py-3 border-b border-gray-100 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-800">
                Notifications
              </h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`!px-4 !py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                    notification.unread ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full !mt-2" />
                    )}
                    <div className="flex-1">
                      <p
                        className={`text-sm ${
                          notification.unread
                            ? "font-semibold text-gray-800"
                            : "text-gray-600"
                        }`}
                      >
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 !mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="!px-4 !py-3 border-t border-gray-100 bg-gray-50 text-center">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}

      <div className="!p-4 sm:!p-6 lg:!p-8">
        <div className="max-w-7xl !mx-auto">
          <div className="bg-blue-50 rounded-xl shadow-sm border border-gray-100 !px-4 sm:!px-6 !py-4 !mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-600">
              {activeTab}
            </h1>
            <p className="text-sm text-gray-500 !mt-1">
              Manage your {activeTab.toLowerCase()} information
            </p>
          </div>

          <span title="Need Help? Contact Support" className="z-50">
            <ShieldQuestionMark
              size={50}
              onClick={giveAlert}
              className="fixed md:hidden cursor-pointer right-6 bottom-6 text-blue-500 bg-blue-100 border rounded-full !p-2"
            />
            <button
              id="helpAlert"
              onClick={giveAlert}
              className="fixed hidden md:block font-bold text-md cursor-pointer right-6 bottom-6 text-blue-500 bg-blue-100 border-2 rounded-full !p-3"
            >
              Help?
            </button>
          </span>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}
