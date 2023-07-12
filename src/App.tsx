import ImageUploader from './components/ImageUploader/ImageUploader';
import { useState } from 'react';
import { Image } from './interfaces';
import { FaImages } from 'react-icons/fa';
function App() {
  const [values, setValues] = useState<{ [name: string]: Image[] }>();
  const setFieldValue = (name: string, value: any) => {
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <div>
      <ImageUploader
        config={{
          setFieldValue,
          dragDropText: 'Drop your images in there. Or...',
          dragDropClassName: 'text-center  ',
          dragDropStyle: {
            backgroundImage: `
            url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23888888FF' stroke-width='5' stroke-dasharray='30%2c 30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")
            `,
          },
          dragDropIcon: <FaImages className="text-6xl text-red-500" />,
        }}
      />

      <div>
        Images value:
        {values?.imagenes?.map((image, i) => (
          <p key={i}>{image.src}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
