import React, { useState, useRef, useEffect } from "react";
import { IoMdRocket } from "react-icons/io";
import { Link } from "react-router-dom";

const HomePage = () => {
  const teamMembers = [
    {
      name: "SIDDHANT CHAKRABORTY",
      role: "Team Lead",
      imgSrc: "/sid-1.jpg",
    },
    {
      name: "OM JAISWAL",
      role: "Frontend Developer",
      imgSrc: "/om-team.jpg",
    },
    {
      name: "VISHESH AGRAWAL",
      role: "Backend Developer",
      imgSrc: "/vishesh-team.jpg",
    },
    { name: "SIA SHUKLA", 
      role: "UI/UX Designer",
      imgSrc: "/sia-team.jpg" },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen ">
      <nav className="bg-gradient-to-br from-cyan-900 via-cyan-200 to-cyan-500 text-white p-5 flex justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Algorithm Atlas
          </h1>
          <h4 className="text-sm md:text-base font-semibold">
            Made By Team Quixotic
          </h4>
        </div>
        <button
          ref={buttonRef}
          onClick={toggleSidebar}
          className="p-2  text-cyan-900 rounded-md hover:bg-cyan-200 transition-colors"
        >
          ☰
        </button>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-5">Menu</h2>
          <ul>
            <li className="mb-3">
              <Link
                to="/sorting"
                className="text-cyan-900 hover:text-cyan-700 transition-colors"
              >
                Sorting
              </Link>
            </li>
            <li>
              <Link
                to="/searching"
                className="text-cyan-900 hover:text-cyan-700 transition-colors"
              >
                Searching
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 mt-8 grid grid-cols-3">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-4 gap-2 flex">
              Welcome to Algorithm Atlas <IoMdRocket />
            </h2>
            <p className="text-lg">
              Algorithm Atlas is an interactive learning platform designed to
              help users understand and master various algorithms through
              engaging animations and visualizations.
            </p>
            <p className="text-lg mt-5">
              Our platform allows users to visualize complex algorithms in
              action, breaking down intricate processes into easily digestible
              steps. Whether you're a beginner looking to grasp fundamental
              concepts or an experienced programmer aiming to refine your
              skills, Algorithm Atlas offers a unique, hands-on approach to
              learning. With interactive simulations, you can manipulate input
              data, observe real-time changes, and gain deep insights into how
              algorithms operate under different scenarios.
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <img src="/algorithms.png" alt="Image of algorithms" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What Are Algorithms?</h2>
          <p className="text-lg">
            Algorithms are step-by-step procedures or formulas for solving
            problems. They are the building blocks of computer programming and
            are essential in various fields, from computer science to
            mathematics and beyond.
          </p>
        </section>

        <section className="mb-32 grid grid-cols-3 grid-rows-2">
          <div className="col-span-1 row-span-1">
            <img src="/sorting.png" alt="image of sorting" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/searching.jpg" alt="image of searching" />
          </div>
          <div className="col-span-2 row-span-2">
            <h2 className="text-3xl font-bold mb-4">
              Currently Featured Algorithms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Selection Sort",
                "Insertion Sort",
                "Bubble Sort",
                "Linear Search",
                "Binary Search",
              ].map((algo) => (
                <div
                  key={algo}
                  className=" p-4 rounded-md shadow-xl shadow-cyan-100"
                >
                  <h3 className="text-xl font-semibold mb-2">{algo}</h3>
                  <p>
                    Learn and visualize how {algo.toLowerCase()} works
                    step-by-step.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Coming Soon...</h2>
          <p className="text-lg mb-4">
            We're constantly expanding our library of algorithms. Soon, we'll be
            adding:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pathfinding Algorithms (A*, Dijkstra's)</li>
            <li>Tree Traversal (In-order, Pre-order, Post-order)</li>
            <li>Recursive Algorithms (Factorial, Fibonacci)</li>
            <li>Quick Sort</li>
            <li>Merge Sort</li>
            <li>Breadth-First Search (BFS)</li>
            <li>Depth-First Search (DFS)</li>
          </ul>
        </section>

        <section className="mb-12  mt-10 h-72">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 
          md:grid-cols-2 lg:grid-cols-4 gap-6 h-80">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="w-full max-w-sm
                 bg-white border border-gray-200
                  rounded-lg shadow-2xl
                  dark:bg-cyan-300 "
              >
                <div className="flex flex-col items-center justify-center h-full pb-10">
                  <img
                    className="w-24 h-24 mt-2 mb-16 rounded-full  shadow-lg"
                    src={member.imgSrc}
                    alt={`${member.name} image`}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {member.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-cyan-900 md:mt-72 lg:mt-28 sm:mt-28 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Algorithm Atlas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
