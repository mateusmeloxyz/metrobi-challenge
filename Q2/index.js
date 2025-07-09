function resolveAfterNSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${seconds} seconds`);
    }, seconds * 1000);
  });
}

async function asyncCall(time) {
  const result = await resolveAfterNSeconds(time);
  console.log(result); // Expected output: Resolved after N seconds
}

async function asyncCallArr(arr) {
  let count = 1;
  for (let item of arr) {
    const result = await resolveAfterNSeconds(count);
    console.log(item);
    console.log(result);
    count = count * 2;
  }
}

asyncCall(1);
asyncCallArr(["A", "B", "C", "D", "E"]);
