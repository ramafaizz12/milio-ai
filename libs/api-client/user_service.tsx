// Simpan data pengguna ke localStorage
export const setUser = (user: object) => {
  // Mengubah objek JSON menjadi string sebelum menyimpannya
  localStorage.setItem('user', JSON.stringify(user));
};

// Mengambil data pengguna dari localStorage
export const getUser = (): object | null => {
  const user = localStorage.getItem('user');
  if (user) {
    // Mengubah string JSON kembali menjadi objek
    return JSON.parse(user);
  }
  return null;
};

// Menghapus data pengguna dari localStorage
export const removeUser = () => {
  localStorage.removeItem('user');
};
