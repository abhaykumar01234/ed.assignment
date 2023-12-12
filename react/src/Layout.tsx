import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card";
import Filters from "./components/Filters";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export type BlogType = {
  id: string;
  imgUrl: string;
  heading: string;
  tag: string;
  created: string;
  content: string;
  category: string[];
};

const blogs: BlogType[] = [
  {
    id: "blog1",
    imgUrl:
      "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    heading: "Introduction To A Machine Learning Online Course",
    tag: "Edyoda",
    created: "23 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["Machine Learning", "Artificial Intelligence"],
  },
  {
    id: "blog2",
    imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
    heading: "LAMP Stack VS MEAN Stack",
    tag: "Edyoda",
    created: "24 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: [
      "Programming Languages",
      "Mobile Application Development",
      "Technology and Tools",
      "Get a Job in a Tech Company",
    ],
  },
  {
    id: "blog3",
    imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/4.png",
    heading: "Impact of Cloud Computing in Various Industries",
    tag: "Edyoda",
    created: "24 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["Cloud Computing", "Get a Job in a Tech Company"],
  },
  {
    id: "blog4",
    imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
    heading: "Challenges of Machine Learning",
    tag: "Edyoda",
    created: "23 Jun 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["Machine Learning", "Artificial Intelligence"],
  },
  {
    id: "blog5",
    imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
    heading: "Breaking the Myths around Cyber Security",
    tag: "Edyoda",
    created: "23 Jan 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["DevOps", "Artificial Intelligence", "Others"],
  },
  {
    id: "blog6",
    imgUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/7.png",
    heading: "Importance of Data Backup",
    tag: "Edyoda",
    created: "23 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["DevOps", "Cloud Computing", "Others"],
  },
  {
    id: "blog7",
    imgUrl:
      "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
    heading: "What is Web Scrapping?",
    tag: "Edyoda",
    created: "23 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["Artificial Intelligence", "Programming Languages", "Others"],
  },
  {
    id: "blog8",
    imgUrl:
      "https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png",
    heading: "What is Income Share Agreement?",
    tag: "Edyoda",
    created: "23 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["Others"],
  },
  {
    id: "blog9",
    imgUrl:
      "https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png",
    heading: "Practical Machine Learning with Python and Keras",
    tag: "Edyoda",
    created: "23 Aug 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque tempora nihil! Vero aperiam animi iste doloremque debitis corrupti, nihil nostrum eaque quo magni! Vero magni commodi harum quaerat minima odio esse labore accusamus nulla unde dolorum neque, rem quis sint nihil maiores ipsa adipisci eligendi quae. Deserunt, consectetur velit.",
    category: ["Artificial Intelligence", "Programming Languages", "Others"],
  },
];

const uniqueFilters: string[] = blogs
  .map(({ category }) => category)
  .flat()
  .filter((value, idx, arr) => arr.indexOf(value) === idx);

export const Layout = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>(blogs);

  const handleFilterBlog = (filter: string) =>
    setFilteredBlogs(
      blogs.filter((blog) => blog.category.includes(filter) || filter === "All")
    );

  return (
    <div className="layout">
      <Header />

      <main className="stack">
        <h1>Trending Posts</h1>
        <Filters filters={uniqueFilters} onFilter={handleFilterBlog} />

        <div className="cardWrapper">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
