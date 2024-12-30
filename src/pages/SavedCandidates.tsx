import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates: React.FC = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect(()=>{
    const storage = localStorage.getItem('potentialCandidates') ? localStorage.getItem('potentialCandidates') : null;
    const candidatesArr = JSON.parse(storage ? storage : '');
    setPotentialCandidates(candidatesArr);
  }, [])

  const handleClick = (e: BaseSyntheticEvent) =>{
    const { login } = e.target.dataset;
    const newList = potentialCandidates.filter(item=> item.login != login )
    setPotentialCandidates(newList);
    localStorage.setItem('potentialCandidates', JSON.stringify(newList));
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <div className="flex-container justify-center">
        <table className="table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Location</td>
              <td>Image</td>
              <td>Email</td>
              <td>URL</td>
              <td>Company</td>
              <td>Reject</td>
            </tr>
            {potentialCandidates.map((candidate: Candidate)=>{
              return (
                <tr key={candidate.login}>
                  <td>{candidate.name} {candidate.login}</td>
                  <td>{candidate.location}</td>
                  <td><img className="thumbnail" src={candidate.avatar_url} /></td>
                  <td><a href={`mailto: ${candidate.email}`}>{candidate.email}</a></td>
                  <td><a href={candidate.html_url}></a></td>
                  <td>{candidate.company}</td>
                  <td><button type="button" onClick={handleClick} data-login={candidate.login}>-</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div >

    </>
  );
};

export default SavedCandidates;
