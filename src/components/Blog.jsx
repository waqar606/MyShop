import React from "react";
const data = [
  {
    comment: 3,
    title: "Healthy food Healthy life",
    date: "Aug 27, 2023",
    img: "images/post__1.webp",
  },
  {
    comment: 3,
    title: "Healthy food Healthy life",
    date: "Aug 27, 2023",
    img: "images/post__2.webp",
  },
  {
    comment: 3,
    title: "Healthy food Healthy life",
    date: "Aug 27, 2023",
    img: "images/post__3.webp",
  },
];
const Blog = () => {
  return (
    <>
      <div className="container pb-4 pt-16">
        <h2 className="font-bold text-2x1"> Latest News</h2>
        <p className="text-gray-500">
          Present posts in a best way to highlight interesting moments of your
          blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
          {data.map((el) => {
            return (
              <>
                <div className="space-y-4">
                  <img
                    className="rounded-lg hover: scale-105 transition-transform"
                    src={el.img}
                    alt="post"
                  />
                  <div className="text-accent font-medium">
                    <span>{el.date}/ </span>
                    <span>{el.comment} Comments</span>
                  </div>
                  <h3 className="font-bold text-x1">{el.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
