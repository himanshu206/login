import users from "../assets/users.json";

export const doLogin = (username, password) => {
  // Mocking api call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        resolve(user);
      } else {
        reject("Invalid Credentials, Please try again");
      }
    }, 3000);
  });
};
