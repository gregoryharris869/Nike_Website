function Button({ label, iconURL }) {
  return (
    <button className="flex items-center justify-center gap-2 py-4 text-lg leading-none text-white border rounded-full px-7 font-montserrat bg-coral-red border-coral-red ">
      {label}
      {iconURL && (
        <img
          className="w-5 h-5 ml-2 rounded-full"
          src={iconURL}
          alt="Arrow right"
        />
      )}
    </button>
  );
}

export default Button;
