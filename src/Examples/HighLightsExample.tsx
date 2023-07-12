import Highlighted from '../components/Highlighted/components/Highlighted';

const HighLightsExample = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <p>
        TEXTO
        <Highlighted classNameConfig={{ bg: '#44ff00' }} variant="SKEWED">
          NUmERO 1
        </Highlighted>
      </p>
      <p>
        {' '}
        TEXTO
        <Highlighted classNameConfig={{ bg: 'green' }}>NUmERO 2</Highlighted>
      </p>
      <p>
        {' '}
        TEXTO
        <Highlighted>NUmERO 3</Highlighted>
      </p>
      <p>
        {' '}
        TEXTO
        <Highlighted>NUmERO 4</Highlighted>
      </p>
      <p>
        {' '}
        TEXTO
        <Highlighted>NUmERO 5</Highlighted>
      </p>
      <p>
        {' '}
        TEXTO
        <Highlighted>NUmERO 6</Highlighted>
      </p>
      <p>
        {' '}
        TEXTO
        <Highlighted>NUmERO 7</Highlighted>
      </p>
    </div>
  );
};

export default HighLightsExample;
