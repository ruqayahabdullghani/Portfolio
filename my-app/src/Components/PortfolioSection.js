import React from 'react'

function PortfolioSection() {
  const projects = [
    {
      title: 'Project 1',
      description: 'ckkkkkkkkkkkkkkkkkkkkkkkkkk,x;l,x;lcklx.',
      technologies: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemoLink: 'https://project1-demo.netlify.app',
    },
    {
      title: 'Project 2',
      description: 'l;cxlkx;clmkcxmxkclcmxl',
      technologies: ['Angular', 'Firebase', 'CSS3'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://project2-demo.firebaseapp.com',
    },
    {
      title: 'Project 2',
      description: 'l;cxlkx;clmkcxmxkclcmxl',
      technologies: ['Angular', 'Firebase', 'CSS3'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://project2-demo.firebaseapp.com',
    }  ];
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between mb-4">
              <div>
                <strong>Technologies:</strong>{' '}
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-blue-500 mr-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default PortfolioSection