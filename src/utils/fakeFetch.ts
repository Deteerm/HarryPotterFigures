export default function fakeFetch(
  fakeUrl: string,
  payload: object
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log(payload);
      console.log("Response status: 200 OK");
      resolve();
    }, 1000);
  });
}
