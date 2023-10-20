const TableSectionColumnSelector = ({
  columnInitializer,
}: {
  columnInitializer: null[];
}) => (
  <tr>
    {columnInitializer.map((_, idx) => (
      <td key={idx}>
        <input type="checkbox"></input>
      </td>
    ))}
  </tr>
);

export default TableSectionColumnSelector;
