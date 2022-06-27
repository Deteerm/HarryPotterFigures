export default function fakeFetch(
  fakeUrl: string,
  options: object
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log(options);
      console.log("Response status: 200 OK");
      resolve();
    }, 1000);
  });
}
