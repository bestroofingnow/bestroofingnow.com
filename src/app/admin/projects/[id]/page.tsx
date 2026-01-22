'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import ProjectForm from '@/components/admin/ProjectForm';

export default function EditProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProject() {
      try {
        // Try database first
        let response = await fetch(`/api/projects/${params.id}`);

        if (!response.ok) {
          // Fall back to PMI export
          const pmiResponse = await fetch('/api/pmi/projects');
          const pmiData = await pmiResponse.json();

          const pmiProject = pmiData.projects?.find(
            (p: any) => p.pmiId === params.id || p.id === params.id
          );

          if (pmiProject) {
            setProject({
              ...pmiProject,
              id: pmiProject.pmiId || pmiProject.id,
            });
          } else {
            setError('Project not found');
          }
        } else {
          const data = await response.json();
          setProject(data);
        }
      } catch (err) {
        console.error('Error loading project:', err);
        setError('Failed to load project');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadProject();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error || 'Project not found'}</p>
        <Link href="/admin/projects" className="text-primary hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/projects"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Project</h1>
        <p className="text-gray-600">
          {project.city}, {project.state} - {project.product || 'Roofing Project'}
        </p>
      </div>

      <ProjectForm initialData={project} isEditing />
    </div>
  );
}
