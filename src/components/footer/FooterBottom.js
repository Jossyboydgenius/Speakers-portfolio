import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-8 border-t border-white/5 font-bodyFont">
      <p className="text-center text-gray-500 text-sm font-light">
        © {new Date().getFullYear()}. All rights reserved by Helena Amoah.
      </p>
    </div>
  );
}

export default FooterBottom
