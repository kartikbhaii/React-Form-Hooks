import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending, data } = useFormStatus();
  console.log(pending, data)
  return (
    <>
      <button disabled={pending}>{pending ? "Searching..." : "Search"}</button>
      <h2>{pending ? `Searching for ${data.get('movie')}` : ""}</h2>
    </>
  );
}

function App() {
  async function handleSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <form action={handleSubmit}>
      <label>search your movie</label>
      <input type="text" name="movie" placeholder="Search your movie" />
      <SubmitButton />
    </form>
  );
}

export default App;
