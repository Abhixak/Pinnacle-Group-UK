import React from "react";

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
        <div className="w-full max-w-[700px] sm:max-w-[700px] lg:max-w-[800px] flex flex-col items-center">
          <h2 className="!px-4 !py-2 bg-blue-500 text-white rounded-xl text-3xl font-bold text-center !mb-4">
            Facebook
          </h2>

          <div className="w-[300px] sm:w-[400px] lg:w-[500px] sm:w-[400px] xs:w-[320px] border-4 rounded-2xl overflow-hidden mx-auto">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleinfra.co.in&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              className="w-full h-[500px] sm:h-[600px] xs:h-[600px]"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen={true}
              title="Facebook Page Plugin"
            ></iframe>
          </div>

          <p className="text-center text-sm text-gray-500 !mt-4">
            If the Facebook feed doesn't load, please check your browser
            settings or try again later. <br />
            To visit our Facebook page{" "}
            <a
              href="https://www.facebook.com/pinnacleinfra.co.in?ref=embed_page"
              className="underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
