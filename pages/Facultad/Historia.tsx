import React from 'react';
import InternalPageLayout from '../../components/InternalPageLayout';
import { PAGE_CONTENT } from '../../constants';

const Historia: React.FC = () => {
  const content = PAGE_CONTENT['/facultad/historia'];
  return (
    <InternalPageLayout 
      title={content.title} 
      subtitle={content.subtitle} 
      image={content.image}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="text-2xl text-slate-700 dark:text-slate-200 font-semibold mb-8 leading-snug italic border-l-8 border-uncp pl-6 py-2">
          {content.intro}
        </div>
        <div className="space-y-6">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-lg">
              {para}
            </p>
          ))}
        </div>

        {content.author && (
          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-slate-800 flex justify-end">
            <div className="text-right">
              <p className="text-xl font-bold text-slate-800 dark:text-slate-200 font-sans italic">
                {content.author}
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-black mt-1">
                Autor de la Reseña Histórica
              </p>
            </div>
          </div>
        )}
      </div>
    </InternalPageLayout>
  );
};

export default Historia;