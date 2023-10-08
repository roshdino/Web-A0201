// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data Fetched!");
//   }, 3000);
// }

// function process(data) {
//   console.log("processing: ", data)
// }

// fetchData(process);

// Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched!");
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log("Promise Resolved:", data);
  })
  .catch((error) => {
    console.log("Promise Rejected: ", error);
  });

// Async Await

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched!");
    }, 3000);
  });
}

async function process() {
  try {
    const data = await fetchData();
    console.log("Async/Await resolved", data);
  } catch (error) {
    console.log("Async/Await rejected", error);
  }
}

process();
