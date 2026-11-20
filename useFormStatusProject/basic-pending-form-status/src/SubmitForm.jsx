import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-200 cursor-pointer"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit your data"}
    </button>
  );
}

const SubmitForm = () => {

  async function handleSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return (
    <form action={handleSubmit}>
      <SubmitButton />
    </form>
  )
}

export default SubmitForm;
