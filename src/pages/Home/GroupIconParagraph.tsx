import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import IconTitleParagraph from '../../components/iconParagraph';

const GroupIconParagraph: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 m-auto content-start">
          <IconTitleParagraph
            icon={FaReact}
            title="Step 1"
            description="Ceci est la description pour l'étape 1."
          />
          <div className="w-1/2 border-l-2 md:border-t-2 md:border-l-0 border-dashed border-gray-400  my-2 md:my-10"></div>
          <IconTitleParagraph
            icon={FaNodeJs}
            title="Step 2"
            description="Ceci est la description pour l'étape 2."
          />
          <div className="w-1/2 border-l-2 md:border-t-2 md:border-l-0 border-dashed border-gray-400  my-2 md:my-10"></div>
          <IconTitleParagraph
            icon={FaDatabase}
            title="Step 3"
            description="Ceci est la description pour l'étape 3."
          />
        </div>
      );
};

export default GroupIconParagraph;
