// import React, { useRef, useState, useEffect, useMemo } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import SignatureCanvas from "react-signature-canvas";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// function ContractWithSignature() {
//   const sigPad = useRef(null);
//   const containerRef = useRef(null);

//   const [containerWidth, setContainerWidth] = useState(800);
//   const [numPages, setNumPages] = useState(null);
//   const [contractPath, setContractPath] = useState(null);

//   const [selectedMethod, setSelectedMethod] = useState(null);
//   const [uploadedFileMethod1, setUploadedFileMethod1] = useState(null);

//   const [drawnSignatureURL, setDrawnSignatureURL] = useState(null);
//   const [rawUploadSigFile, setRawUploadSigFile] = useState(null);
//   const [uploadSigURL, setUploadSigURL] = useState(null);
//   const [hasBgRemoved, setHasBgRemoved] = useState(false);

//   const [placedSignatures, setPlacedSignatures] = useState([]);
//   const [activePlacedId, setActivePlacedId] = useState(null);

//   // SWITCHES
//   const [placeMode, setPlaceMode] = useState(false);
//   const [dragEnabled, setDragEnabled] = useState(true);
//   const [deleteEnabled, setDeleteEnabled] = useState(true);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContract = async (userEmail) => {
//       try {
//         const res = await fetch(
//           "http://localhost:5001/api/contracts/upload-signed-contract",
//           { userEmail }
//         );
//         const response = await fetch(
//           `https://nripropertybackend.onrender.com/api/contract/path/${encodeURIComponent(
//             userEmail
//           )}`
//         );

//         const data = await response.json();
//         if (!response.ok) throw new Error(data.error);
//         setContractPath(data.contractPath);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const storedEmail = localStorage.getItem("userEmail");
//     if (!storedEmail) {
//       alert("Please login first.");
//       window.location.replace("/login");
//       return;
//     }
//     fetchContract(storedEmail);
//   }, []);

//   useEffect(() => {
//     function updateWidth() {
//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.offsetWidth);
//       }
//     }
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   // Memoize the file object to prevent unnecessary re-renders
//   const pdfFile = useMemo(() => {
//     if (!contractPath) return null;
//     return { url: contractPath };
//   }, [contractPath]);

//   const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

//   const clearDrawn = () => sigPad.current?.clear();
//   const saveDrawnSignature = () => {
//     if (!sigPad.current) return;
//     const dataURL = sigPad.current.getCanvas().toDataURL("image/png");
//     setDrawnSignatureURL(dataURL);
//   };

//   const handleSigFileUpload = (file) => {
//     if (!file) return;
//     setRawUploadSigFile(file);
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setUploadSigURL(e.target.result);
//       setHasBgRemoved(false);
//     };
//     reader.readAsDataURL(file);
//   };

//   const removeWhiteBackground = async () => {
//     if (!uploadSigURL) return;

//     try {
//       const img = new Image();

//       await new Promise((resolve, reject) => {
//         img.onload = resolve;
//         img.onerror = reject;
//         img.src = uploadSigURL;
//       });

//       const canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);

//       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//       const d = imageData.data;
//       const THRESH = 240;

//       for (let i = 0; i < d.length; i += 4) {
//         if (d[i] >= THRESH && d[i + 1] >= THRESH && d[i + 2] >= THRESH) {
//           d[i + 3] = 0;
//         }
//       }

//       ctx.putImageData(imageData, 0, 0);
//       setUploadSigURL(canvas.toDataURL("image/png"));
//       setHasBgRemoved(true);
//     } catch (error) {
//       console.error("Error removing background:", error);
//       alert(
//         "Failed to remove background. Please try uploading the image again."
//       );
//     }
//   };

//   const currentSignatureToPlace = useMemo(() => {
//     if (selectedMethod === 2) return drawnSignatureURL || null;
//     if (selectedMethod === 3) return uploadSigURL || null;
//     return null;
//   }, [selectedMethod, drawnSignatureURL, uploadSigURL]);

//   const handlePageClick = (e, pageNumber) => {
//     if (!placeMode || !currentSignatureToPlace) return;

//     // Get the clicked position relative to the page container
//     const rect = e.currentTarget.getBoundingClientRect();
//     const clickX = e.clientX - rect.left;
//     const clickY = e.clientY - rect.top;

//     const newSig = {
//       id: crypto.randomUUID(),
//       page: pageNumber,
//       x: clickX - 75, // Center the signature on click point
//       y: clickY - 30,
//       width: 150,
//       height: 60,
//       src: currentSignatureToPlace,
//     };
//     setPlacedSignatures((prev) => [...prev, newSig]);
//   };

//   const onDragStart = (e, sigId) => {
//     if (!dragEnabled) {
//       e.preventDefault();
//       return;
//     }
//     e.dataTransfer.effectAllowed = "move";
//     e.dataTransfer.setData("text/html", sigId);
//   };

//   const onDragEnd = (e, sigId) => {
//     if (!dragEnabled) return;

//     const parentRect = e.target.parentElement.getBoundingClientRect();
//     const newX = e.clientX - parentRect.left - e.target.offsetWidth / 2;
//     const newY = e.clientY - parentRect.top - e.target.offsetHeight / 2;

//     setPlacedSignatures((prev) =>
//       prev.map((s) =>
//         s.id === sigId
//           ? { ...s, x: Math.max(0, newX), y: Math.max(0, newY) }
//           : s
//       )
//     );
//   };

//   const removePlacedSignature = (sigId) => {
//     if (!deleteEnabled) return;
//     setPlacedSignatures((prev) => prev.filter((s) => s.id !== sigId));
//     if (activePlacedId === sigId) setActivePlacedId(null);
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       const storedEmail = localStorage.getItem("userEmail");

//       if (!storedEmail) {
//         alert("User email not found. Please login again.");
//         return;
//       }

//       formData.append("userEmail", storedEmail);
//       formData.append("contractPath", contractPath);
//       formData.append("signingMethod", selectedMethod.toString());

//       if (selectedMethod === 1) {
//         // Method 1: Upload signed PDF/document
//         if (!uploadedFileMethod1) {
//           alert("Please upload the signed document.");
//           return;
//         }
//         formData.append("signedContract", uploadedFileMethod1);
//       } else if (selectedMethod === 2 || selectedMethod === 3) {
//         // Method 2 & 3: Digital signature placed on PDF
//         if (!placedSignatures.length) {
//           alert("Place at least one signature on the PDF.");
//           return;
//         }

//         // Send signature data as JSON
//         formData.append("signatures", JSON.stringify(placedSignatures));

//         // Send the signature image
//         const firstSig = placedSignatures[0];
//         const response = await fetch(firstSig.src);
//         const blob = await response.blob();
//         formData.append("signedContract", blob, "signedContract.png");
//       } else {
//         alert("Please select a signing method.");
//         return;
//       }

//       const res = await fetch(
//         "https://nripropertybackend.onrender.com/api/upload-signed-contract",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//         alert("Contract Submitted Successfully ✅");
//         // Optional: Reset form or redirect
//         // window.location.href = "/success";
//       } else {
//         alert(`Error: ${data.error || "Failed to submit contract"}`);
//       }
//     } catch (error) {
//       console.error("Submit error:", error);
//       alert("Failed to submit contract. Please try again.");
//     }
//   };

//   if (loading) return <div className="!p-5">Loading contract...</div>;
//   if (error) return <div className="!p-5 text-red-500">{error}</div>;
//   if (!pdfFile) return <div className="!p-5">No contract found.</div>;

//   return (
//     <>
//       <div className="overflow-hidden bg-yellow-100 border border-yellow-300 text-yellow-900 !py-2 rounded !mb-4">
//         <p className="animate-marquee w-max block !px-4">
//           You're logged in successfully. Your account is under review. We will
//           notify you once updated.
//         </p>
//       </div>

//       <div className="w-full max-w-4xl !mx-auto !p-4 md:!p-6">
//         <div ref={containerRef}>
//           <Document
//             file={pdfFile}
//             onLoadSuccess={onDocumentLoadSuccess}
//             loading={<div className="!p-4">Loading PDF...</div>}
//             error={<div className="!p-4 text-red-500">Failed to load PDF</div>}
//           >
//             {numPages &&
//               Array.from(new Array(numPages), (_, index) => (
//                 <div
//                   key={`page_${index + 1}`}
//                   className="relative !mb-4 shadow-md border rounded overflow-hidden"
//                   style={{ cursor: placeMode ? "crosshair" : "default" }}
//                   onClick={(e) => handlePageClick(e, index + 1)}
//                 >
//                   <Page
//                     pageNumber={index + 1}
//                     width={containerWidth}
//                     renderTextLayer={true}
//                     renderAnnotationLayer={true}
//                   />

//                   {placedSignatures
//                     .filter((s) => s.page === index + 1)
//                     .map((s) => (
//                       <div
//                         key={s.id}
//                         className={`absolute ${
//                           activePlacedId === s.id ? "ring-2 ring-blue-500" : ""
//                         }`}
//                         style={{
//                           top: s.y,
//                           left: s.x,
//                           width: s.width,
//                           height: s.height,
//                           cursor: dragEnabled ? "move" : "default",
//                           pointerEvents: "auto",
//                           zIndex: 10,
//                         }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActivePlacedId(s.id);
//                         }}
//                       >
//                         {deleteEnabled && (
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               removePlacedSignature(s.id);
//                             }}
//                             className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full !w-6 !h-6 flex items-center justify-center text-xs shadow z-10"
//                             title="Delete signature"
//                           >
//                             ×
//                           </button>
//                         )}

//                         <img
//                           src={s.src}
//                           alt="signature"
//                           draggable={dragEnabled}
//                           onDragStart={(e) => onDragStart(e, s.id)}
//                           onDragEnd={(e) => onDragEnd(e, s.id)}
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             pointerEvents: dragEnabled ? "auto" : "none",
//                             userSelect: "none",
//                           }}
//                         />
//                       </div>
//                     ))}
//                 </div>
//               ))}
//           </Document>
//         </div>

//         {/* SWITCHES */}
//         <div className="flex flex-wrap gap-6 !my-6 items-center bg-gray-50 !p-4 rounded border">
//           <label className="flex items-center gap-2 text-sm cursor-pointer">
//             <input
//               type="checkbox"
//               checked={placeMode}
//               onChange={(e) => {
//                 if (!currentSignatureToPlace) {
//                   alert("Please save or upload a signature first.");
//                   e.preventDefault();
//                   return;
//                 }
//                 setPlaceMode(e.target.checked);
//               }}
//               className="w-4 h-4"
//             />
//             <span className="font-medium">Place Mode</span>
//             {placeMode && (
//               <span className="text-blue-700 text-xs">
//                 (Click PDF to place)
//               </span>
//             )}
//           </label>

//           <label className="flex items-center gap-2 text-sm cursor-pointer">
//             <input
//               type="checkbox"
//               checked={dragEnabled}
//               onChange={(e) => setDragEnabled(e.target.checked)}
//               className="w-4 h-4"
//             />
//             <span className="font-medium">Enable Drag</span>
//           </label>

//           <label className="flex items-center gap-2 text-sm cursor-pointer">
//             <input
//               type="checkbox"
//               checked={deleteEnabled}
//               onChange={(e) => setDeleteEnabled(e.target.checked)}
//               className="w-4 h-4"
//             />
//             <span className="font-medium">Enable Delete</span>
//           </label>
//         </div>

//         <h2 className="text-xl font-semibold !mt-6 !mb-4">
//           Choose Signing Method:
//         </h2>

//         <div className="flex flex-wrap gap-3 !mb-6">
//           {[
//             "Download & Upload",
//             "Sign Digitally",
//             "Upload Signature Image",
//           ].map((label, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedMethod(index + 1)}
//               className={`!px-4 !py-2 rounded transition-colors ${
//                 selectedMethod === index + 1
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}. {label}
//             </button>
//           ))}
//         </div>

//         {/* Notes under each method */}
//         <div className="grid gap-3 !mb-6">
//           <div
//             className={`text-sm !p-3 rounded transition-colors ${
//               selectedMethod === 1
//                 ? "bg-blue-50 border border-blue-200"
//                 : "bg-gray-50"
//             }`}
//           >
//             <div className="font-semibold !mb-1">1) Download & Upload</div>
//             <div className="text-gray-700">
//               Download and print the contract, sign it and upload the signed
//               file(JPG/PDF) here.
//             </div>
//           </div>
//           <div
//             className={`text-sm !p-3 rounded transition-colors ${
//               selectedMethod === 2
//                 ? "bg-blue-50 border border-blue-200"
//                 : "bg-gray-50"
//             }`}
//           >
//             <div className="font-semibold !mb-1">2) Sign Digitally</div>
//             <div className="text-gray-700">
//               Draw your signature below, click{" "}
//               <span className="font-semibold">Save Signature</span>, then enable{" "}
//               <span className="font-semibold">Place Mode</span> and click on the
//               PDF to add it. You can add multiple placements and drag them.
//             </div>
//           </div>
//           <div
//             className={`text-sm !p-3 rounded transition-colors ${
//               selectedMethod === 3
//                 ? "bg-blue-50 border border-blue-200"
//                 : "bg-gray-50"
//             }`}
//           >
//             <div className="font-semibold !mb-1">3) Upload Signature Image</div>
//             <div className="text-gray-700">
//               Upload a photo/scan of your signature (preferably on white paper).
//               Optionally remove the white background, then enable{" "}
//               <span className="font-semibold">Place Mode</span> and click on the
//               PDF to add it multiple times.
//             </div>
//           </div>
//         </div>

//         {/* METHOD 1: Upload full signed file */}
//         {selectedMethod === 1 && (
//           <div className="border !p-4 rounded bg-gray-50 !mb-6">
//             <label className="block text-sm font-medium !mb-2">
//               Step 1: Download Contract
//             </label>
//             <button
//               onClick={() => {
//                 const link = document.createElement("a");
//                 link.href = contractPath;
//                 link.download = `contract_${new Date().getTime()}.pdf`;
//                 link.target = "_blank";
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
//               }}
//               className="bg-blue-600 hover:bg-blue-700 text-white !px-4 !py-2 rounded transition-colors flex items-center gap-2"
//             >
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//               Download Contract
//             </button>

//             <label className="block text-sm font-medium !mb-2 !mt-6">
//               Step 2: Upload Signed Document
//             </label>
//             <input
//               type="file"
//               accept="application/pdf,image/*"
//               className="!mt-2"
//               onChange={(e) =>
//                 setUploadedFileMethod1(e.target.files?.[0] || null)
//               }
//             />
//             {uploadedFileMethod1 && (
//               <div className="text-sm text-green-700 !mt-2">
//                 ✓ File selected: {uploadedFileMethod1.name}
//               </div>
//             )}
//           </div>
//         )}

//         {/* METHOD 2: DIGITAL SIGNATURE */}
//         {selectedMethod === 2 && (
//           <div className="border !p-4 rounded bg-gray-50 !mb-6">
//             <label className="block text-sm font-medium !mb-2">
//               Draw Your Signature:
//             </label>
//             <SignatureCanvas
//               ref={sigPad}
//               penColor="blue"
//               canvasProps={{
//                 className: "border bg-white w-full h-36 rounded",
//               }}
//             />
//             <div className="flex gap-3 !mt-3">
//               <button
//                 onClick={clearDrawn}
//                 className="bg-gray-300 hover:bg-gray-400 !px-4 !py-2 rounded transition-colors"
//               >
//                 Clear
//               </button>
//               <button
//                 onClick={saveDrawnSignature}
//                 className="bg-green-600 hover:bg-green-700 text-white !px-4 !py-2 rounded transition-colors"
//               >
//                 Save Signature
//               </button>
//             </div>

//             {drawnSignatureURL && (
//               <div className="flex items-center gap-3 !mt-3">
//                 <span className="text-sm text-green-700">
//                   ✓ Signature saved:
//                 </span>
//                 <img
//                   src={drawnSignatureURL}
//                   alt="signature preview"
//                   className="h-12 border rounded bg-white"
//                 />
//               </div>
//             )}
//           </div>
//         )}

//         {/* METHOD 3: Upload signature image with Remove Background */}
//         {selectedMethod === 3 && (
//           <div className="border !p-4 rounded bg-gray-50 !mb-6">
//             <label className="block text-sm font-medium !mb-2">
//               Upload Signature Image:
//             </label>
//             <div className="flex flex-col gap-3">
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="!mt-2"
//                 onChange={(e) =>
//                   handleSigFileUpload(e.target.files?.[0] || null)
//                 }
//               />

//               {uploadSigURL && (
//                 <>
//                   <div className="flex flex-wrap gap-3 items-center">
//                     <button
//                       onClick={removeWhiteBackground}
//                       disabled={hasBgRemoved}
//                       className={`text-white !px-4 !py-2 rounded transition-colors ${
//                         hasBgRemoved
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-purple-600 hover:bg-purple-700"
//                       }`}
//                       title="Remove pure white background from the signature"
//                     >
//                       {hasBgRemoved
//                         ? "Background Removed ✓"
//                         : "Remove White Background"}
//                     </button>
//                     {!hasBgRemoved && (
//                       <span className="text-gray-600 text-sm">
//                         Remove white background for cleaner overlay.
//                       </span>
//                     )}
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-sm text-gray-700">Preview:</span>
//                     <div className="border rounded bg-white !p-2">
//                       <img
//                         src={uploadSigURL}
//                         alt="uploaded signature"
//                         className="h-12"
//                       />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Submit */}
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-700 hover:bg-blue-800 text-white w-full md:w-auto !px-6 !py-3 rounded text-lg !mb-10 transition-colors"
//         >
//           Submit Signed Contract
//         </button>
//       </div>
//     </>
//   );
// }

// export default ContractWithSignature;

import React, { useState, useEffect } from "react";
import { Megaphone, XCircle } from "lucide-react";
import { API_BASE_URL } from "../config";

const ContractWithSignature = () => {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [customid, setCustomid] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return;

    fetch(`${API_BASE_URL}/user-details?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setCustomid(data.customId);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!visible) return null; // ✅ Now correctly placed

  return (
    <>
      <div>
        <p>
          {name
            ? `Welcome ${name}, User ID: #${customId}`
            : "Loading..."}
        </p>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-100 to-yellow-200 border border-yellow-400 text-yellow-900 !py-3 rounded-md !mb-5 shadow-sm flex items-center gap-3 !px-4">
        <Megaphone className="text-yellow-700 flex-shrink-0" size={20} />
        <div className="overflow-hidden flex-1">
          <p className="animate-marquee font-medium text-sm">
            You are successfully logged in • Your account is currently under
            review • 🕒 We will notify you once verification is completed • Thank
            you for your patience!
          </p>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-yellow-700 hover:text-red-600 transition"
        >
          <XCircle size={20} />
        </button>
      </div>

      <div className="flex items-center !mt-10">
        <a
          href="/"
          className="text-lg cursor-pointer !mx-auto border-2 !px-4 !py-2 rounded-xl text-blue-800 bg-white"
        >
          Explore nriproperty.uk
        </a>
      </div>
    </>
  );
};

export default ContractWithSignature;
