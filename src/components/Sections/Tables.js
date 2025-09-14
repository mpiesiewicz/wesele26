import React from 'react';
import { useSlideshow } from '../../hooks/useSlideshow';
import { tableData } from '../../data/tables';
import '../../styles/Components/Tables.css';

const Tables = () => {
  const { currentIndex, goToSlide, goToPrevSlide, goToNextSlide } = useSlideshow(tableData.length);

  return (
    <section id="tables" className="tables-container">
      <h2>Układ Stołów</h2>
      <div className="slideshow-container">
        {tableData.map((table, index) => (
          <Table 
            key={table.id} 
            table={table} 
            isActive={index === currentIndex} 
          />
        ))}
        
        <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>
        
        <div className="dot-container">
          {tableData.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Table = ({ table, isActive }) => {
  return (
    <div className={`table fade ${isActive ? 'active' : ''}`}>
      <h3 className="table-header">{table.tableName}</h3>
      <div className="table-content">
        {table.tableData.map((chair) => (
          <Chair key={chair.id} chair={chair} />
        ))}
      </div>
    </div>
  );
};

const Chair = ({ chair }) => {
  const leftPosition = chair.id < 10 ? -120 : 20;
  const topPosition = chair.id < 10 ? chair.id * 50 : (chair.id - 10) * 50;
  
  return (
    <div 
      className="chair" 
      style={{ 
        left: `${leftPosition}px`, 
        top: `${topPosition}px` 
      }}
    >
      {chair.initial}
    </div>
  );
};

export default Tables;