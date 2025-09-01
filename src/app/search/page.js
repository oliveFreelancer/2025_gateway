// "use client";

import Image from "next/image";
import Link from "next/link";
//data
import dataProject from "@/data/dataProject";

export default function Home({ searchParams }) {
  const query = searchParams?.query?.toLowerCase() || "";

  const filteredProjects = dataProject.filter(
    (project) =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
  );
  console.log(query);
  return (
    <main className="py-12">
      <div className="mx-auto py-[100px] w-2/3">
        <h3 className="py-12 text-center text-2xl">검색 결과</h3>
        {filteredProjects.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          filteredProjects.map((project, id) => (
            <div
              key={id}
              className="mb-6 p-6 border rounded-lg border-neutral-700 cursor-pointer hover:bg-neutral-700/10"
            >
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="text-xs mt-2 text-gray-400">
                {project.tags.join(", ")}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
