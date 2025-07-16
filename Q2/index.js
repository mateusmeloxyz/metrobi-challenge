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
  let count = 0;

  console.log(new Date());
  for (let item of arr) {
    setTimeout(
      () => console.log(item + " date time: " + new Date()),
      2 ** count * 1000,
    );
    count++;
  }
}

asyncCallArr(["A", "B", "C", "D", "E"]);
