const urls = [
  "https://jsonplaceholde.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log("oops", error);
  }
};

const heros = {
  bats: { name: "Batman", age: 52 },
  sups: { name: "Superman", age: 78 },
  wonder: { name: "Wonder Woman", age: 200 },
  doctor: { name: "The Doctor", age: 2000 },
};

const { doctor, ...others } = heros;

function almostIncreasingSequence(seq) {
  let bad = 0;

  for (let i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      bad++;

      if (bad > 1) {
        return false;
      }

      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
        return false;
      }
    }
  }

  return true;
}
