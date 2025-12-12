import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code, Briefcase, GraduationCap } from 'lucide-react';
import './css/profile.css';
import profilePhoto from './assets/images/profile.jpg';

const profile = {
  name: 'Jio Biala',
  initials: 'JB',
  title: 'Full Stack Developer',
  bio: 'Passionate full-stack developer with 3+ years of experience building scalable web applications. I love creating intuitive user interfaces and solving complex problems with clean, efficient code.',
  location: 'Quezon City, Metro Manila',
  social: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/jrbiala/' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Email', icon: Mail, url: 'jiorbiala@gmail.com' }
  ]
};

const skills = [
  'React', 
  'JavaScript', 
  'Node.js', 
  'Python', 
  'CSS',
  'Bootstrap', 
  'Git', 
  'MySQL',
  'PostgreSQL'
];

const projects = [
  { 
    name: 'Developer Profile', 
    tech: 'React, CSS', 
    description: 'Developer Profile using React' 
  },
  { 
    name: 'Asset Management System', 
    tech: 'Yii, Bootstrap 5, MySQL', 
    description: 'Asset tracking and monitoring for LGUS' 
  }
];

const ProfileHeader = ({ profile }) => {
  return (
    <div className="profile-header">
      <div className="header-content">
        <div className="profile-avatar">
          <img src={profilePhoto} alt="Profile" className="avatar-image" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-title">{profile.title}</p>
          <div className="social-links">
            {profile.social.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={index} href={link.url} className="social-btn">
                  <Icon size={18} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = ({ profile }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="icon-circle icon-blue">
          <Code size={20} />
        </div>
        <h2 className="card-title">About Me</h2>
      </div>
      <p className="card-text">{profile.bio}</p>
      <div className="location">
        <MapPin size={18} />
        <span>{profile.location}</span>
      </div>
    </div>
  );
};

const SkillsSection = ({ skills }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="icon-circle icon-green">
          <Briefcase size={20} />
        </div>
        <h2 className="card-title">Skills</h2>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-tech">{project.tech}</p>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="icon-circle icon-orange">
          <GraduationCap size={20} />
        </div>
        <h2 className="card-title">Featured Projects</h2>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default function DeveloperProfile() {
  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <ProfileHeader profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
      </div>
    </div>
  );
}