const KanaWordBase = ({
  kanaArr,
  endHighlightingAtIndex = -1,
}: {
  kanaArr: string[];
  endHighlightingAtIndex?: number;
}) => (
  <div>
    {kanaArr.map((char, idx) => (
      <span
        key={idx}
        className={`${idx <= endHighlightingAtIndex && 'text-green-500'}`}
      >
        {char}
      </span>
    ))}
  </div>
);

export default KanaWordBase;
