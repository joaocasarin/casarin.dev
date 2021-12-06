import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Project } from '../../interfaces/Project';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';
import { selfApi } from '../../api/axios';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await selfApi.get('/projects');
            setProjects(data.projects);
        })();
    }, []);

    if (!projects.length) return null;

    return (
        <section id="projects" className="section projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__grid">
                {projects.map((project: Project) => (
                    <ProjectContainer key={uuid()} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
