import getData from "./app.js";

async function test() {
  try {
    const data = await getData(1);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

test();
