const ButtonWhatsapp = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=51974980380&text=Hola%Buccasan!%20Vengo%20del%20sitio%20web%20y%20deseo%20reservar%20mi%20cita.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 bg-green-500 text-white rounded-full w-14 h-14 flex justify-center items-center shadow-md text-lg hover:bg-green-600 hover:shadow-lg transition duration-300"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M16.021 2.667c-7.338 0-13.333 5.973-13.333 13.306 0 2.352.615 4.647 1.802 6.667l-1.823 6.693 6.92-1.813a13.19 13.19 0 0 0 6.434 1.641c7.338 0 13.333-5.973 13.333-13.334 0-7.334-5.995-13.306-13.333-13.306zm0 24c-2.016 0-3.948-.52-5.682-1.484l-.41-.229-4.107 1.08 1.094-4.02-.267-.412a10.658 10.658 0 0 1-1.601-5.563c0-5.885 4.78-10.653 10.656-10.653 5.88 0 10.667 4.769 10.667 10.653 0 5.885-4.786 10.653-10.649 10.653zm5.656-7.5c-.31-.156-1.832-.903-2.116-1.004-.285-.105-.49-.156-.694.156s-.8 1.004-.981 1.207c-.183.209-.358.235-.668.08-.309-.156-1.306-.477-2.48-1.52-.917-.814-1.54-1.814-1.718-2.121-.183-.312-.02-.479.137-.634.142-.141.309-.368.465-.553.16-.185.215-.312.313-.521.104-.208.052-.391-.026-.552-.08-.156-.694-1.677-.951-2.299-.238-.572-.479-.494-.668-.504-.183-.008-.39-.01-.601-.01-.209 0-.547.08-.834.391s-1.098 1.072-1.098 2.615c0 1.542 1.188 3.033 1.352 3.249.167.208 2.345 3.74 5.695 5.15.797.344 1.42.55 1.904.705.801.256 1.533.22 2.111.134.643-.095 1.988-.813 2.27-1.598.281-.781.281-1.455.197-1.598-.083-.156-.285-.235-.594-.391z" />
      </svg>
    </a>
  );
};

export default ButtonWhatsapp;
