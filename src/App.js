import Button from "./components/Button";
import PrivateSectionContainer from "./components/PrivateSectionContainer";

function App() {
  return (
    <PrivateSectionContainer>
      <div className="flex flex-col">
        <Button customClassName="h-20  bg-sky-900" />
        <Button customClassName="h-96  bg-sky-900" />
      </div>
    </PrivateSectionContainer>
  );
}

export default App;
