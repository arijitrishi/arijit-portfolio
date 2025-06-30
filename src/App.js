// Portfolio site for Arijit Ghosh - Java Backend Developer + Photographer + YouTuber

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Arijit Ghosh</h1>
        <p className="text-lg text-gray-600">Java Backend Developer | Photographer | YouTube Food Vlogger</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/arijitrishi" target="_blank" rel="noreferrer noopener" className="text-blue-600">GitHub</a>
          <a href="https://www.linkedin.com/in/arijit-ghosh-033257190" target="_blank" rel="noreferrer noopener" className="text-blue-600">LinkedIn</a>
          <a href="https://www.youtube.com/@tastivana" target="_blank" rel="noreferrer noopener" className="text-red-500">YouTube</a>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold mb-2">🚀 Developer Profile</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>2+ years experience in Java, Spring Boot, REST APIs</li>
            <li>Skilled in MySQL, Hibernate, AWS (Cognito, Lambda, ECS)</li>
            <li>Projects with Docker, Redis, Terraform</li>
            <li>Built Gift Card Platform & Epidemic Simulator</li>
            <li><a className="text-blue-600 underline" href="https://github.com/arijitrishi" target="_blank" rel="noreferrer noopener">View GitHub Projects</a></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold mb-2">📸 Creative Work</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Runs a food vlog channel - <a className="text-red-500 underline" href="https://youtube.com/@tastivana" target="_blank" rel="noreferrer noopener">Tastivana</a></li>
            <li>Passionate about photography – street, food, lifestyle</li>
            <li>Experienced in editing, framing, and storytelling</li>
            <li>Integrates tech and creativity through content</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-4 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">📄 Resume & Contact</h2>
          <p className="mb-2 text-gray-700">
            View my updated resume <a className="text-blue-600 underline" href="https://drive.google.com/file/d/1xGkcD29VBoYzTA5eCViuNhigYwi6r82X/view?usp=drive_link" target="_blank" rel="noreferrer noopener">here</a>.
          </p>
          <p className="text-gray-700">Email: arijit.g499@gmail.com</p>
          <p className="text-gray-700">Phone: +91 8013159053</p>
        </div>
      </section>
    </div>
  );
}
