import React from "react";

const SocialMedia = () => {
  return (
    <div className="bg-gray-100 !p-5 rounded-xl">
      <h2 className="text-3xl font-bold !my-5 text-center">
        Our{" "}
        <span className="text-red-600 underline underline-offset-4">
          Social Profiles
        </span>
      </h2>
      <div className="flex flex-col gap-8 !mb-10 justify-center items-center">
        <div className="w-full flex flex-col items-center">
          <h2 className="!px-4 !py-2 bg-blue-500 text-white rounded-xl text-3xl font-bold text-center !mb-4">
            Facebook
          </h2>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleinfra.co.in&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
            className="rounded-xl border-2 border-black"
          ></iframe>
        </div>

        {/* You can uncomment this if you use SnapWidget */}
        {/* <iframe
          src="https://snapwidget.com/embed/104774"
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen={true}
          className="rounded border-2 border-black"
        ></iframe> */}
      </div>
    </div>
  );
};

export default SocialMedia;
