export const isAuthenticated = () => {
  return localStorage.getItem("foundit_user") !== null;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("foundit_user");

  return user ? JSON.parse(user) : null;
};

export const login = (user) => {
  localStorage.setItem("foundit_user", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("foundit_user");
};

export const register = (user) => {
  localStorage.setItem("foundit_user", JSON.stringify(user));
};