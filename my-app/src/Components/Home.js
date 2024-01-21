import React from 'react'
import PortfolioSection from './PortfolioSection';

function Home() {
  const skills = [
    'JavaScript',
    'React.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Git',
    'Responsive Web Design',
    'UI/UX Design',
    'Python',
    'C#',
    'SQL',
    'Problem-solving',
    'Excel'
  ];


  return (
    <>
    <section className="bg-blue-900 text-white h-screen flex items-center">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">Explore my projects and skills to learn more about what I do.</p>
      <button className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline">
        View Projects
      </button>
    </div>
  </section>

  <section className="bg-white py-12 px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-loose text-left">
        Hi, I'm Ruqayah Abdulghani! 
        Recent IT graduate with strong programming, data structures, and algorithmic foundation. Proven skills developed through academic projects and internships. Quick learner, creative problem-solver, and effective communicator. Eager to contribute innovation and enthusiasm in a dynamic professional setting. Seeking a challenging role to apply academic knowledge in a forward-thinking organization.
      
        </p>
        <p className="text-gray-700 leading-loose text-left">
        I'm a passionate web developer with a focus on creating
          engaging and user-friendly experiences. My journey in the world of programming began
          with a curiosity that turned into a deep love for crafting code.

        </p>
        <p className="text-gray-700 leading-loose text-left">
          When I'm not coding, you can find me exploring the latest tech trends, enjoying a good
          cup of coffee, or diving into a captivating book.
        </p>
      </div>
    </section>

    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <h3 className="text-xl font-semibold mb-2">Bachelor's Degree in Information Technology and Computing (ITC)</h3>
            <p className="text-gray-700 mb-4">Arab Open University, 2024</p>
      
      </div>
    </section>


    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
              <p className="text-blue-500 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <PortfolioSection/>

<section className="bg-gray-100 py-12">
<div className="container mx-auto text-center">
  <h2 className="text-3xl font-bold mb-6">Connect with Me</h2>
  <div className="flex justify-center space-x-4">
    <a href="https://twitter.com/codeMind23" className="text-blue-500 hover:underline">
      <i className="fab fa-twitter"></i> X
    </a>
    <a href="https://www.linkedin.com/in/ruqayah-abdullghani/" className="text-blue-800 hover:underline">
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="tel:+966509843910" className="text-pink-500 hover:underline">
      <i className="fab fa-instagram"></i> Phone
    </a>
    <a href="mailto:Ruqayahabdullghani@gmail.com" className="text-gray-800 hover:underline">
      <i className="fas fa-envelope"></i> Email
    </a>
  </div>
  <p className="mt-6">Feel free to reach out through any of the above channels. I look forward to connecting with you!</p>
</div>
</section>


</>
  )
}

export default Home