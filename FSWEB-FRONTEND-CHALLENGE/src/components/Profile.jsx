

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      {/* Profil fotoğrafı */}
      <img 
        src="path_to_your_image.jpg" 
        alt="Profile" 
        className="w-36 h-36 rounded-full object-cover mb-4"
      />
      {/* Profil ismi */}
      <h2 className="text-2xl font-semibold mb-2">Mustafa</h2>
      {/* Profil açıklaması */}
      <p className="text-lg text-gray-600">Web Developer and React Enthusiast</p>
    </div>
  );
};

export default Profile;
