import React from 'react';
import './TableHeader.css'; // Import CSS
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const TableHeader = ({ pageInfo, currentPage, onNext, onPrev }) => {
  return (
    <div className="table-header">
      <div className="left-section">
        <i className="pi pi-cog settings-icon"></i>
        <div className="search-container">
          <i className="pi pi-search search-icon"></i>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="right-section">
        <span className="pagination-info">
          {pageInfo?.pages ? `${(currentPage - 1) * 20 + 1} - ${Math.min(currentPage * 20, pageInfo.count)} of ${pageInfo.count}` : 'Loading...'}
        </span>
        <button className="icon-button" onClick={onPrev} disabled={!pageInfo.prev}>
          <i className="pi pi-angle-left"></i>
        </button>
        <button className="icon-button" onClick={onNext} disabled={!pageInfo.next}>
          <i className="pi pi-angle-right"></i>
        </button>
        <div className="vertical-divider"></div>
        <button className="icon-button">
          <i className="pi pi-filter"></i>
        </button>
        <button className="icon-button">
          <i className="pi pi-print"></i>
        </button>
        <button className="icon-button">
          <i className="pi pi-download"></i>
        </button>
        <div className="vertical-divider"></div>
        <button className="icon-button">
        <i className="pi pi-external-link"></i> 

        </button>
      </div>
    </div>
  );
};

export default TableHeader;
