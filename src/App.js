import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import './ProjectTable.css';
import 'primeicons/primeicons.css';

const CharacterTable = () => {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async (page = 1) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);
      setPageInfo(data.info);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (pageInfo.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageInfo.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <TableHeader 
        pageInfo={pageInfo}
        currentPage={currentPage}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />

      <table className="character-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Owner</th>
            <th>City</th>
            <th>Work Location</th>
            <th>Project Link</th>
            <th>Status</th>
            <th>Team Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <tr key={char.id}>
              {/* Checkbox */}
              <td>
                <input type="checkbox" />
              </td>

              {/* Owner - Avatar, Name, Sub title */}
              <td className="owner-cell">
                <img src={char.image} alt={char.name} className="avatar" />
                <div className="owner-info">
                  <div className="name">{char.name}</div>
                  <div className="role">{char.species}</div>
                </div>
              </td>

              {/* City */}
              <td className="city_name">{char.origin.name}</td>

              {/* Work Location - Dropdown */}
              <td>
              <select defaultValue="Office" className="custom-select">
  <option value="Office">Office</option>
  <option value="Remote">Remote</option>
</select>

              </td>

              {/* Project Link */}
              <td>
  <a href={char.url} target="_blank" rel="noopener noreferrer" className="url-link">
    {char.url}
  </a>
</td>


              {/* Status - Badge */}
              <td>
                <span className={`status-badge ${char.status.toLowerCase()}`}>
                  {char.status}
                </span>
              </td>

            
<td className="team-members">
  {Array(3).fill(0).map((_, index) => (
    <img 
      key={index} 
      src={char.image} 
      alt={char.name} 
      className="team-avatar" 
    />
  ))}
  <div className="more-members">+1</div>
</td>


              {/* Actions */}
              <td className="actions">
                <button><i className="pi pi-pencil"></i></button>
                <button><i className="pi pi-trash"></i></button>
                <button><i className="pi pi-share-alt"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;
