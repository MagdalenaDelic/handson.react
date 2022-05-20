import apiOrigin from "./api";

export const registerUser = (user) => {
  return fetch(`${apiOrigin}/users`, {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res; //ako je doslo do errora baci error; mozemo hvatati
    }
    return res.json();
  });
};

export const logInUser = (user) => {
  return fetch(`${apiOrigin}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};
