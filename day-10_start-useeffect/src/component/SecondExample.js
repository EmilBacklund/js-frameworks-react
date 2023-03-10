import { useState, useEffect } from 'react';

const ShowingMessage = () => {
  useEffect(() => {
    const timeerId = setInterval(() => {
      console.log('Timer is running');
    }, 1000);

    return () => {
      clearInterval(timeerId);
    };
  }, []);

  return <div>Hello I am show message component</div>;
};

const SecondExample = () => {
  const [showComponent, setShowComponent] = useState(true);

  function handleBtnClick() {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      {showComponent ? <ShowingMessage /> : null}
      <button onClick={handleBtnClick}>hide show component</button>
    </div>
  );
};

export default SecondExample;
