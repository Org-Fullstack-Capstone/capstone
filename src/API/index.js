const cohortName = "2302-ACC-PT-WEB-PT-A";
const API_URL = `https://fakestoreapi.com`;
const PRODUCTS_API_URL = `${API_URL}/products`;
const LOGIN_API_URL = `${API_URL}/auth/login`;
const LOGGEDIN_API_URL = `${API_URL}/users/me`;
const REGISTER_API_URL = `${API_URL}/users`;

// Fetch all posts: unauthenticated
export async function fetchProducts(token) {
  try {
    if (token) {
      const response = await fetch(POSTS_API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data.data.products;
    } else {
      const response = await fetch(PRODUCTS_API_URL);
      const data = await response.json();
      return data.data.products;
    }
  } catch (error) {
    console.log("Trouble fetching products: ", error);
  }
}
fetchProcuts();

// Fetch login, authenticating a user if their username and password mathes the right data
export async function fetchLogin(username, password) {
  try {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Fetching a token based on if a user is currently logged in
export async function fetchLoggedIn(token) {
  try {
    const response = await fetch(LOGGEDIN_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Registering a new user
export async function fetchNewUser(username, password) {
  try {
    const response = await fetch(REGISTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// Add a new Product
export async function fetchNewProduct(
  userToken,
  title,
  description,
  price,
  category,
  imageUrl
) {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          price: `${price}`,
          category: `${category}`,
          description: `${description}`,
          image: `${imageUrl}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProducts(id, userToken) {
  try {
    const response = await fetch(`${PRODUCTS_API_URL}/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

export async function editProduct(
  productId,
  userToken,
  title,
  description,
  price,
  category,
  imageUrl
) {
  try {
    const response = await fetch(`${POSTS_API_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          category: `${category}`,
          image: `${imageUrl}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function productMessage(Id, userToken, message) {
  try {
    const response = await fetch(`${POSTS_API_URL}/${productId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        message: {
          content: `${message}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
