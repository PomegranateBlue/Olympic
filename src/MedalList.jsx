import "./MedalList.css";

const MedalList = ({ rows, deleteMedalInfo }) => {
  return (
    <div className="TableContainer">
      <table className="TableContent">
        <thead>
          <tr className="tableHeader">
            <th className="tableHeaderCell">국가명</th>
            <th className="tableHeaderCell">금메달</th>
            <th className="tableHeaderCell">은메달</th>
            <th className="tableHeaderCell">동메달</th>
            <th className="tableHeaderCell">액션</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="listDetail">
              <td className="tableBodyCell">{row.country}</td>
              <td className="tableBodyCell">{row.gold}</td>
              <td className="tableBodyCell">{row.silver}</td>
              <td className="tableBodyCell">{row.copper}</td>
              <td className="tableBodyCell">
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
