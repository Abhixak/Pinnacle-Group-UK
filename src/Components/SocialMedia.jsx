import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 !mb-10 justify-evenly">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleinfra.co.in&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="auto"
        height="auto"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
        className="rounded border-2 border-black !px-10 !py-10"
      ></iframe>

      <iframe
        src="https://snapwidget.com/embed/104774"
        width="auto"
        height="500"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
        className='snapwidget-widge rounded border-2 border-black'
      ></iframe>

      {/*       
        <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpinnacleinfra.co.in&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="auto"
        height="500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
        className='rounded border-2 border-black'
         
        ></iframe> */}
    </div>
  );
};

export default SocialMedia;
