import React, { useState } from 'react';

export const ResumeButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/resume.pdf');

      if (!response.ok) {
        throw new Error(`Failed to download resume: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(message);
      console.error('Resume download error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="group flex items-center justify-between border border-neutral-800 rounded-lg px-5 py-4 hover:border-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full text-left"
    >
      <div>
        <p className="text-sm font-medium text-neutral-100">Resume</p>
        <p className="text-xs text-neutral-500 mt-0.5">
          {error ? 'Failed to download' : isLoading ? 'Downloading...' : 'View or download my resume'}
        </p>
      </div>
      <span className={`text-neutral-500 group-hover:text-neutral-300 transition-colors text-sm ${isLoading ? 'animate-spin' : ''}`}>
        {error ? '!' : '↗'}
      </span>
    </button>
  );
};
