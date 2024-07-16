const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © 2024 - Version {import.meta.env.VITE_APP_VERSION}
      </p>
    </div>
  );
};

export default FooterBottom;
