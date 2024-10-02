import './App.css';

function Button({ label, style, onClick }) {
  return <button
    className={'button'}
    style={style}
    onClick={onClick}
  >
    {label}
  </button>
}

function App() {
  const onSave = () => {
    alert('Save Button Clicked');
  }

  const onCancle = () => {
    alert('Cancle Button Clicked');
  }

  const onReset = () => {
    alert('Reset Button Clicked');
  }
  const saveBtnStyle = {
    backgroundColor: 'lightgreen'
  }
  const cancleBtnStyle = {
    backgroundColor: 'red',
    color: 'white'
  }
  const resetBtnStyle = {
    backgroundColor: 'lightblue'
  }
  return (
    <div className="App">
      <Button
        style={saveBtnStyle}
        label={'Save'}
        onClick={onSave}
      />
      <Button
        label={'Cancle'}
        onClick={onCancle}
        style={cancleBtnStyle}
      />
      <Button
        label={'Reset'}
        onClick={onReset}
        style={resetBtnStyle}
      />
    </div>
  );
}

export default App;
