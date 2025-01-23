import "../styles/MedalSort.css";

const MedalSort = ({ rows, setRows }) => {
  const sortByValue = (e) => {
    const selectOption = e.target.value;
    switch (selectOption) {
      case "id":
        console.log("기본 정렬");

        setRows([...rows].sort((a, b) => a.id - b.id));
        break;
      case "totalMedal":
        console.log("총 메달 수");
        setRows(
          [...rows].sort(
            (a, b) =>
              b.gold + b.silver + b.copper - (a.gold + a.silver + a.copper)
          )
        );
        break;
      case "goldMedal":
        console.log("금메달 순");
        setRows([...rows].sort((a, b) => b.gold - a.gold));
        break;
    }
  };

  return (
    <div className="sortContainer">
      <select className="options" onChange={sortByValue}>
        <option value="id">기본 순</option>
        <option value="totalMedal">총 메달 순</option>
        <option value="goldMedal">금메달 순</option>
      </select>
    </div>
  );
};

export default MedalSort;
