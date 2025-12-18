import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-stone-900 mt-12">
      <div className="max-w-xl mx-auto text-center text-stone-500 text-sm space-y-2">
        <p>&copy; {new Date().getFullYear()} Ancient Truth, Modern Freedom.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
          <span>&bull;</span>
          <a href="#" className="hover:text-stone-300 transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;