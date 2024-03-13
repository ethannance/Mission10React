import { useEffect, useState } from 'react';
import { Bowlers } from '../types/Bowlers';

//function to get the data for the bowler list
function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowlers[]>([]);

  //Fetching data from the bowlers table first and then the teams table
  useEffect(() => {
    const fetchBowlerData = async () => {
      const bowlResponse = await fetch('http://localhost:5106/Bowlers');
      const bowlers = await bowlResponse.json();
      setBowlerData(bowlers);
    };
    fetchBowlerData();
  }, []);

  //filter for only sharks and marlins
  const filteredBowlerData = bowlerData.filter((bowler) => {
    return (
      bowler.team.teamName === 'Marlins' || bowler.team.teamName === 'Sharks'
    );
  });

  //returning information, to get teams we use the getTeamName function and pass it the teamId
  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Initial</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlerData.map((b) => (
            <tr key={b.bowlerID}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
