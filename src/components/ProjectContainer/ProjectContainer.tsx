import React from 'react';
import { v4 as uuid } from 'uuid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Project } from '../../interfaces/Project';
import './ProjectContainer.css';

const ProjectContainer = ({ project }: { project: Project }) => (
    <div className="project">
        <h3>{project.name}</h3>

        <p className="project__description">{project.description}</p>
        {project.stack && (
            <ul className="project__stack">
                {project.stack.map((item) => (
                    <li key={uuid()} className="project__stack-item">
                        {item}
                    </li>
                ))}
            </ul>
        )}

        <div>
            {project.sourceCode && (
                <a
                    href={project.sourceCode}
                    aria-label="source code"
                    className="link link--icon"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                </a>
            )}

            {project.livePreview && (
                <a
                    href={project.livePreview}
                    aria-label="live preview"
                    className="link link--icon"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LaunchIcon />
                </a>
            )}
        </div>
    </div>
);

export default ProjectContainer;
