let deltaTime = 0;

const tick = () => {
  deltaTime++;
}

const clock = setInterval(tick, 10);

onmessage = (e) => {
  console.log(e);
  const action = e.data;
  switch (action.type) {
    case 'deltaTime':
      postMessage(deltaTime);
      deltaTime = 0;
      break;
    default:
      postMessage({
        type: 'unknown'
      });

  }
};
