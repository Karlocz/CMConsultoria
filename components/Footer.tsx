
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark border-t border-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-neutral-light">
        <p>&copy; {new Date().getFullYear()} CM Consultoria de Dados. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito para impulsionar pequenos e médios negócios.</p>
      </div>
    </footer>
  );
};

export default Footer;
