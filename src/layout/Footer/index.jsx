const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Min nettside</p>
      </div>
    </footer>
  );
};

export default Footer;