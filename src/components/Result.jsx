function Result({ bmi }) {
    let message = '';
  
    if (bmi < 18.5) {
      message = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      message = 'Overweight';
    } else {
      message = 'Obesity';
    }
  
    return (
      <div style={{ marginTop: '2rem', color: '#AFDDE5', animation: 'fadeIn 1s ease-in' }}>
        <h2>Your BMI is: {bmi}</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0FA4AF' }}>{message}</p>
      </div>
    );
  }
  
  export default Result;
  