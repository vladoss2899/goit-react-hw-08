import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Your Phone Book</h1>
    </div>
  );
}
