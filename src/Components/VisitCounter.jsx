// import React, { useEffect, useRef, useState } from "react";

// const VisitCounter = () => {
//   const [visitCount, setVisitCount] = useState(0);
//   const hasUpdated = useRef(false);

//   useEffect(() => {
//     if (hasUpdated.current) return;
//     hasUpdated.current = true;

//     const visits = localStorage.getItem("visitCount");
//     const newCount = visits ? parseInt(visits) + 1 : 1;
//     localStorage.setItem("visitCount", newCount);
//     setVisitCount(newCount);
//   }, []);

//   const formattedCount = visitCount.toString().padStart(7, "0");

//   return (
//     <div className="!my-4 !px-6 !py-1 rounded-xl bg-black shadow-lg text-white flex items-center gap-3 animate-fade-in">
//       <span className="text-lg">👁️ Visitors : </span>
//       <span className="text-xl font-mono tracking-widest bg-black/20 !px-3 !py-1 rounded-md">
//         {formattedCount}
//       </span>
//     </div>
//   );
// };

// export default VisitCounter;


import React, { useEffect, useRef, useState } from "react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const hasUpdated = useRef(false);

  useEffect(() => {
    if (hasUpdated.current) return;
    hasUpdated.current = true;

    const visits = localStorage.getItem("visitCount");
    const newCount = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem("visitCount", newCount);
    setVisitCount(newCount);
  }, []);

  return (
    <div className="!my-4 !px-6 !py-1 rounded-xl bg-black shadow-lg text-white flex items-center gap-3 animate-fade-in">
      <span className="text-lg">👁️ Visitors:</span>
      <span className="text-xl font-mono tracking-widest bg-black/20 !px-3 !py-1 rounded-md">
        {visitCount}
      </span>
    </div>
  );
};

export default VisitCounter;
