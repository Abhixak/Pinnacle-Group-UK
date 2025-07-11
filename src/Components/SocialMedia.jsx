import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="bg-gray-100 !p-5 rounded-xl">
      <h2 className="text-3xl font-bold !mt-5 !mb-10 text-center">
        Our{" "}
        <span className="text-red-600 underline underline-offset-4">
          Social Profiles
        </span>
      </h2>

      <div className="flex flex-col gap-8 !mb-10 justify-center items-center">
        <div className="w-full max-w-[700px] flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
            <FaFacebookSquare className="text-4xl !my-6" />
            Facebook
          </h2>

          <div className="w-[300px] sm:w-[400px] lg:w-[500px] border-4 rounded-2xl overflow-hidden mx-auto">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleinfra.co.in&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              className="w-full h-[600px]"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Facebook Page Plugin"
            ></iframe>
          </div>

          <p className="text-center text-sm text-gray-500 !mt-4">
            If the Facebook feed doesn't load, please{" "}
            <a
              href="https://www.facebook.com/pinnacleinfra.co.in"
              className="underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here to visit our Facebook page
            </a>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

// import React from "react";
// import { FaFacebookSquare } from "react-icons/fa";

// const SocialMedia = () => {
//   return (
//     <div className="bg-gray-100 !p-5 rounded-xl">
//       <h2 className="text-3xl font-bold !mt-5 !mb-10 text-center">
//         Our{" "}
//         <span className="text-red-600 underline underline-offset-4">
//           Social Profiles
//         </span>
//       </h2>

//       <div className="flex flex-col items-center justify-center !mb-10 gap-6">
//         <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
//           <FaFacebookSquare className="text-4xl" />
//           Facebook
//         </h2>

//         <p className="text-gray-700 text-center max-w-md">
//           We regularly update our page with property tips, updates, and events.
//         </p>

//         <a
//           href="https://www.facebook.com/pinnacleinfra.co.in"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="!px-6 !py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Visit Our Facebook Page
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialMedia;
