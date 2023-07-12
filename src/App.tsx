import ImageUploader from './components/ImageUploader/ImageUploader';
import { useState } from 'react';
function App() {
  const [values, setValues] = useState<{ [name: string]: any }>();
  const setFieldValue = (name: string, value: any) => {
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <div>
      <ImageUploader setFieldValue={setFieldValue} />

      <div>
        Images value:
        {values?.imagenes?.map((image, i) => (
          <p key={i}>{image.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
