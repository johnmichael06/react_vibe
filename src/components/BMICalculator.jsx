import { useState } from 'react';
import Result from './Result';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form 
        onSubmit={calculateBMI}
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(2, 73, 80, 0.37)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          padding: '2.5rem',
          width: '90%',
          maxWidth: '400px',
          textAlign: 'center',
          animation: 'slideUp 0.8s ease'
        }}
      >
        <h2 style={{ marginBottom: '1.5rem', color: '#AFDDE5' }}>Calculate your BMI</h2>

        <input 
  className="inputField"
  type="number"
  placeholder="Height (meters)"
  value={height}
  onChange={(e) => setHeight(e.target.value)}
/>

<input 
  className="inputField"
  type="number"
  placeholder="Weight (kilograms)"
  value={weight}
  onChange={(e) => setWeight(e.target.value)}
/>


        <button
          type="submit"
          style={{
            backgroundColor: '#964734',
            color: 'white',
            padding: '0.8rem 2rem',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: '0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#AFDDE5'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#964734'}
        >
          Calculate
        </button>

        {bmi && <Result bmi={bmi} />}
      </form>
    </div>
  );
}

export default BMICalculator;
