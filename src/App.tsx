import HighLightsExample from './Examples/HighLightsExample';
import ImagesUplaoderExample from './Examples/ImagesUplaoderExample';
function App() {
  return (
    <div className="min-h-screen w-screen bg-neutral-200 [&>section]:p-4">
      <section className=" bg-blue-300 ">
        <h2 className="font-semibold text-xl">Images Uploader</h2>
        <p>
          Simple and configurable component for upload and display images. Take
          the files and trasnform in base64. Use the setFieldValue for recieve
          the images. That is a object with name,src,id
        </p>
        <ImagesUplaoderExample />
      </section>
      <section className="bg-neutral-600 text-neutral-100 ">
        <h2 className="font-semibold text-xl">HighLight</h2>
        <p>Higlight your text simply</p>
        <HighLightsExample />
      </section>
    </div>
  );
}

export default App;
