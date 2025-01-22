import "./MedalList.css";

const MedalList = ({ rows, deleteMedalInfo }) => {
  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr className="listHeader">
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="listDetail">
              <td>{row.country}</td>
              <td>{row.gold}</td>
              <td>{row.silver}</td>
              <td>{row.copper}</td>
              <td>
                <button id="deleteBtn" onClick={() => deleteMedalInfo(row.id)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
